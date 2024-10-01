# ── SETTINGS ──────────────────────────────────────────
$startDate = "2024-10-01"   # Change to your start date
$endDate   = Get-Date -Format "yyyy-MM-dd"
# ──────────────────────────────────────────────────────

$messages = @(
    "Update layout and fix spacing issues",
    "Improve navbar responsiveness",
    "Add hero section content",
    "Fix broken links in footer",
    "Refine color scheme and typography",
    "Add contact form structure",
    "Optimize images for faster load",
    "Fix mobile view alignment",
    "Update about section copy",
    "Add smooth scroll behavior",
    "Tweak button hover effects",
    "Clean up unused CSS classes",
    "Add meta tags for SEO",
    "Improve heading hierarchy",
    "Fix footer layout on small screens",
    "Add animations to hero section",
    "Update project section with new cards",
    "Improve accessibility attributes",
    "Add loading screen effect",
    "Fix cross-browser compatibility issues"
)

$current = [datetime]::Parse($startDate)
$end     = [datetime]::Parse($endDate)

while ($current -le $end) {
    $dateStr = $current.ToString("yyyy-MM-dd")
    $msg     = $messages | Get-Random

    # Make a small change to a file
    Add-Content -Path "index.html" -Value "<!-- Updated: $dateStr -->"

    git add .

    $env:GIT_AUTHOR_DATE    = "$dateStr 12:00:00"
    $env:GIT_COMMITTER_DATE = "$dateStr 12:00:00"

    git commit -m $msg

    $current = $current.AddDays(1)
}

Write-Host "✅ All commits created successfully!" -ForegroundColor Green