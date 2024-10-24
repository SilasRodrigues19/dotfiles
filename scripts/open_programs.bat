@echo off

:: Check if the script is being executed by Task Scheduler
set "isScheduled=false"
if "%1"=="scheduled" (
    set "isScheduled=true"
)

:: Get the current date and time
for /f "tokens=1-2 delims=:" %%a in ('time /t') do set "currentHour=%%a" & set "currentMinute=%%b"

:: Convert current hour to integer for comparison
set /a hourInt=currentHour

:: Check if it's a weekday (Monday to Friday) and within the specified time
for /f "skip=1 tokens=1" %%d in ('wmic path win32_localtime get dayofweek') do (
    set "dayOfWeek=%%d"
    goto :break
)
:break

:: Logic to check the time only if it's scheduled
if "%isScheduled%"=="true" (
    if %dayOfWeek% lss 5 (
        if %hourInt% geq 8 if %hourInt% lss 18 (
            goto runApps
        ) else (
            echo Outside of specified hours.
            exit /b
        )
    ) else (
        echo It's the weekend.
        exit /b
    )
) else (
    goto runApps
)

:runApps
:: Set URLs (Registered in the environment variables)
set "urls=%SIIMP_URLS%"

:: Convert the space-separated list into individual arguments
setlocal enabledelayedexpansion
set "chromeArgs="

for %%u in (%urls%) do (
    set "chromeArgs=!chromeArgs! "%%u""
)

:: Open Chrome with a specific user profile
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --profile-directory="Profile 2" !chromeArgs!

:: Open Postman
start "" "C:\Users\silas\AppData\Local\Postman\Postman.exe"

:: Open HeidiSQL
start "" "C:\Program Files\HeidiSQL\heidisql.exe"

:: Open Obsidian
start "" "C:\Users\silas\AppData\Local\Obsidian\Obsidian.exe"

echo Applications opened!
pause