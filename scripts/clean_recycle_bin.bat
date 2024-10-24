@echo off
echo Cleaning the Recycle Bin...
powershell.exe -command "Clear-RecycleBin -Force"
echo Recycle Bin cleaned!