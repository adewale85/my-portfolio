Add-Type -AssemblyName System.Drawing
$imgPath = Resolve-Path "public\avatar.png"
$img = [System.Drawing.Image]::FromFile($imgPath)
$img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX)
$outPath = Join-Path (Get-Location) "public\avatar-flipped.png"
$img.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
Write-Output "Successfully flipped image to avatar-flipped.png"

