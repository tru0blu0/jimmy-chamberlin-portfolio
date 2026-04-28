param([string]$Message = "deploy: update")

Write-Host "=> Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed." -ForegroundColor Red; exit 1 }

Write-Host "=> Committing and pushing to master..." -ForegroundColor Cyan
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "Nothing new to commit - pushing existing HEAD." -ForegroundColor Yellow
} else {
    git commit -m $Message
}
git push origin master

Write-Host ""
Write-Host "=> Pushed! GitHub Actions will deploy to:" -ForegroundColor Green
Write-Host "   https://tru0blu0.github.io/portfolio/" -ForegroundColor White
Write-Host ""
Write-Host "   Watch: https://github.com/tru0blu0/portfolio/actions" -ForegroundColor Gray
