# push.ps1 - Build and push to GitHub (triggers GitHub Pages auto-deploy via Actions)
Set-Location "C:\Users\jimch\projects\portfolio"

Write-Host "=> Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "BUILD FAILED" -ForegroundColor Red; exit 1 }

Write-Host "=> Committing and pushing to master..." -ForegroundColor Cyan
git add -A
$msg = if ($args[0]) { $args[0] } else { "deploy: update portfolio" }
git commit -m $msg
git push origin master

Write-Host "=> Pushed! GitHub Actions will deploy to:" -ForegroundColor Green
Write-Host "   https://tru0blu0.github.io/jimmy-chamberlin-portfolio/" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Watch deployment: https://github.com/tru0blu0/jimmy-chamberlin-portfolio/actions" -ForegroundColor Gray
