param([string]$Project = 'C:\Apply\WECHATDeveloper\Project\love-menu')
$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot 'recovered-love-menu\miniprogram'
if (!(Test-Path -LiteralPath (Join-Path $Project 'project.config.json') -PathType Leaf)) { throw 'Project configuration missing. Stopped.' }
$files = 'pages\index\index.js','pages\index\index.json','pages\index\index.wxml','pages\index\index.wxss','app.js','sitemap.json','app.json'
foreach ($file in $files) {
    if (!(Test-Path -LiteralPath (Join-Path $source $file) -PathType Leaf)) { throw "Recovery source missing: $file" }
}
foreach ($file in $files) {
    $target = Join-Path (Join-Path $Project 'miniprogram') $file
    if ([IO.File]::Exists($target)) { Write-Host "Kept existing: $file"; continue }
    [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($target)) | Out-Null
    [IO.File]::Copy((Join-Path $source $file), $target, $false)
    if ((Get-FileHash -LiteralPath $target).Hash -ne (Get-FileHash -LiteralPath (Join-Path $source $file)).Hash) { throw "File check failed: $file" }
    Write-Host "Restored and verified: $file"
}
Write-Host "Done: $Project"
