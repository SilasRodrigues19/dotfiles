$null = $host.UI.RawUI.FlushInputBuffer()

$vscodePath = Get-Command "code" -ErrorAction SilentlyContinue

if (-not $vscodePath) {
    Write-Host -ForegroundColor Red "Visual Studio Code is not installed. Please install it before running this script"
    exit 1
}

if (-not (Get-Module -ListAvailable -Name PSReadline)) {
    Install-Module -Name PSReadline -Force -Scope CurrentUser
}

Import-Module PSReadline

$fileName = "README"
$folderName = ".vscode"
$fileExtension = ".md"
$filePath = ".\$folderName\$fileName$fileExtension"

$forceUpdate = $args.Contains("--force")

$fileContent = Get-Content -Path $filePath

$regex = '(https:\/\/marketplace\.visualstudio\.com\/items\?itemName=[^(\s)]+)'
$matches = [regex]::Matches($fileContent -join "`n", $regex)

if ($matches.Count -eq 0) {
    Write-Host -ForegroundColor Yellow "No extension link found in the file in $filePath. Make sure this file and $filePath are in the same directory"
    exit 1
}

foreach ($match in $matches) {
    $extensionURL = $match.Groups[1].Value

    $extensionID = $extensionURL -replace '.+\/items\?itemName=(.+)', '$1'

    $isInstalled = & $vscodePath --list-extensions | Where-Object { $_ -eq $extensionID }

    if (-not $isInstalled -or $forceUpdate) {
        $null = & $vscodePath --install-extension $extensionID --force
        $status = if ($forceUpdate) { "updated with --force flag" } else { "installed" }
        Write-Host -ForegroundColor Green "Extension '$extensionID' $status."
    } else {
        Write-Host -ForegroundColor Yellow "Extension '$extensionID' already installed."
    }
}

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