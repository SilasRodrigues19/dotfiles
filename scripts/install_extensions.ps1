$null = $host.UI.RawUI.FlushInputBuffer()

function Check-VSCodeInstallation {
    $vscodePath = Get-Command "code" -ErrorAction SilentlyContinue

    if (-not $vscodePath) {
        Write-Host -ForegroundColor Red "Visual Studio Code is not installed. Please install it before running this script"
        exit 1
    }
}

function Install-PSReadlineModule {
    if (-not (Get-Module -ListAvailable -Name PSReadline)) {
        Install-Module -Name PSReadline -Force -Scope CurrentUser
    }
}

function Get-FolderAndFileName {
    Show-Message "Enter the folder name and file name (e.g., FolderName/FileName)" "Green"
    $folderAndFileName = Read-Host
    return $folderAndFileName -split "/"
}

function Get-FileExtension {
    param (
        [string]$folderName,
        [string]$fileName
    )

    $mdFilePath = ".\$folderName\$fileName.md"
    $mdFileExists = Test-Path $mdFilePath

    $txtFilePath = ".\$folderName\$fileName.txt"
    $txtFileExists = Test-Path $txtFilePath

    if ($mdFileExists) {
        return ".md"
    } elseif ($txtFileExists) {
        return ".txt"
    } else {
        Show-Message "No file with .md or .txt extension found in the specified directory" "Red"
        exit 1
    }
}

function Get-ExtensionURLs {
    param (
        [string]$filePath
    )

    $fileContent = Get-Content -Path $filePath

    $regex = '(https:\/\/marketplace\.visualstudio\.com\/items\?itemName=[^(\s)]+)'
    $matches = [regex]::Matches($fileContent -join "`n", $regex)

    if ($matches.Count -eq 0) {
        $fullFileName = "$folderName\$fileName$fileExtension"
        Show-Message "No extension link found in the file in $fullFileName. Make sure you have entered the correct directory" "Yellow"
        exit 1
    }

    $extensionURLs = @()
    foreach ($match in $matches) {
        $extensionURLs += $match.Groups[1].Value
    }

    return $extensionURLs
}

function Install-Extensions {
    param (
        [string]$vscodePath,
        [string[]]$extensionURLs,
        [bool]$forceUpdate
    )

    foreach ($extensionURL in $extensionURLs) {
        $extensionID = $extensionURL -replace '.+\/items\?itemName=(.+)', '$1'

        $isInstalled = & $vscodePath --list-extensions | Where-Object { $_ -eq $extensionID }

        if (-not $isInstalled -or $forceUpdate) {
            $null = & $vscodePath --install-extension $extensionID --force
            $status = if ($forceUpdate) { "updated with --force flag" } else { "installed" }
            Write-Host -ForegroundColor Green "Extension '$extensionID' $status."
        } else {
            Write-Host -ForegroundColor Yellow "Extension '$extensionID' already installed."
        }

        Write-Host ""
    }
}

function Show-Message {
    param (
        [string]$message,
        [string]$color
    )

    $border = "+" + "-" * ($message.Length + 4) + "+"
    Write-Host $border -ForegroundColor $color
    Write-Host "| $message |" -ForegroundColor $color
    Write-Host $border -ForegroundColor $color
}

# Função principal
function Main {
    Check-VSCodeInstallation

    Install-PSReadlineModule

    $folderName, $fileName = Get-FolderAndFileName

    $fileExtension = Get-FileExtension -folderName $folderName -fileName $fileName

    $filePath = ".\$folderName\$fileName$fileExtension"

    $extensionURLs = Get-ExtensionURLs -filePath $filePath

    $vscodePath = Get-Command "code" -ErrorAction SilentlyContinue
    $forceUpdate = $args.Contains("--force")

    Install-Extensions -vscodePath $vscodePath -extensionURLs $extensionURLs -forceUpdate $forceUpdate

    $padding = " " * 4
    $border = "+" + "-" * 66 + "+"
    $content = @"
|                                                                   |
|  The install command has been executed successfully.              |
|                                                                   |
"@
    $styledMessage = @"
$border
$content
$border
"@

    Write-Host $styledMessage -ForegroundColor DarkGreen
}

Main
