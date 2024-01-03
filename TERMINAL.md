[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="#">
    <img src="./public/powershell.svg" alt="Logo" height="40">
  </a>

  <h3 align="center">Terminal Config</h3>

    
  <p align="center">
    My terminal config features Oh My Posh with the sleek star theme, enhancing the command-line experience with a touch of style and functionality
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
      <ul>
        <li><a href="#install-oh-my-posh">Install Oh My Posh</a>
          <ul>
            <li><a href="#windows-terminal">Windows Terminal</a></li>
            <li><a href="#reference">Reference</a></li>
          </ul>
        </li>
      </ul>
  </ol>
</details>


## Install Oh My Posh

Run this steps in the PowerShell as admin

```ps1
Install-Module oh-my-posh -Scope CurrentUser
```

```ps1
Install-Module posh-git -Scope CurrentUser
```

```ps1
Install-Module -Name PowerShellGet -Force
```

```ps1
Install-Module -Name PSReadline -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck
```

```ps1
New-Item -type file --force $profile
```

```ps1
notepad $profile # Open profile.ps1 file
```

Paste this content below into `profile.ps1` file

`Microsoft.PowerShell_profile.ps1`

```ps1

# Microsoft.PowerShell_profile.ps1

# Configurações do PowerShell
# Importar os temas do oh-my-posh e utilizar o Star
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt Star

# Autocomplete, keybinds e histórico de comandos
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadlineOption -HistorySearchCursorMovesToEnd

# Autosugestões do PSReadline
Set-PSReadlineOption -ShowToolTips
Set-PSReadlineOption -PredictionSource History


clear
# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}

```

## Windows Terminal

1. Install Windows Terminal in the following link

[Windows Terminal - Microsoft Store](https://apps.microsoft.com/detail/9N0DX20HK701)

2. Open as admin and, go to settings and open `LocalState` folder to edit `settings.json` file


3. Paste this content into `settings.json` file

```json
{
    "$help": "https://aka.ms/terminal-documentation",
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ],
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "initialCols": 75,
    "initialRows": 15,
    "launchMode": "default",
    "profiles": 
    {
        "defaults": 
        {
            "colorScheme": "Campbell",
            "font": 
            {
                "face": "JetBrains Mono"
            },
            "padding": "10"
        },
        "list": 
        [
            {
                "colorScheme": "One Dark",
                "commandline": "powershell.exe -nologo",
                "font": 
                {
                    "face": "JetBrains Mono"
                },
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell"
            },
            {
                "commandline": "%PROGRAMFILES%/git/usr/bin/bash.exe -i -l",
                "guid": "{00000000-0000-0000-ba54-000000000002}",
                "icon": "%PROGRAMFILES%/Git/mingw64/share/git/git-for-windows.ico",
                "name": "Bash",
                "startingDirectory": "%USERPROFILE%"
            },
            {
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "Prompt de comando"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            },
            {
                "guid": "{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}",
                "hidden": false,
                "name": "Git Bash",
                "source": "Git"
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#1E2127",
            "black": "#000000",
            "blue": "#61AFEF",
            "brightBlack": "#5C6370",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#D19A66",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#5C6370",
            "green": "#98C379",
            "name": "One Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#ABB2BF",
            "yellow": "#D19A66"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#F9F9F9",
            "black": "#000000",
            "blue": "#4078F2",
            "brightBlack": "#383A42",
            "brightBlue": "#4078F2",
            "brightCyan": "#0184BC",
            "brightGreen": "#50A14F",
            "brightPurple": "#A626A4",
            "brightRed": "#E45649",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#986801",
            "cursorColor": "#FFFFFF",
            "cyan": "#0184BC",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#A0A1A7",
            "yellow": "#986801"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ],
    "theme": "dark"
}
```

4. In your VSCode open the command palette `CTRL SHIFT P` and search for `Open Settings (JSON)`

5. Paste this content in the user settings

```json

{
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "terminal.integrated.shellArgs.windows": [
    "-ExecutionPolicy",
    "Bypass",
    "-NoLogo"
  ],
}

```

<hr>

## Reference:

[Huriel - Como eu personalizei o meu terminal do windows (Sem WSL) - Tips N' Tricks #01](https://youtu.be/lslaAhjNWeM) <br> <br>
[Microsoft.PowerShell_profile.ps1](https://gist.github.com/huri3l/34aef991c586f7cea6dca834735a16c6)


[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/dotfiles.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/dotfiles/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/dotfiles.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/dotfiles/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/dotfiles.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/dotfiles/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/dotfiles.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/dotfiles/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/dotfiles.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/dotfiles/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/dotfiles/blob/master/LICENSE.txt

<br><hr>
[🔼 Back to top](#Terminal-Config)