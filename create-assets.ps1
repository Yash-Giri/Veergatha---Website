$root = ".\public\images"
$worlds = @{
  "chola"      = @("CHOLA","OCEANIC POWER","A CONNECTED WORLD","#8A5A2B")
  "maratha"    = @("MARATHA","FORTS OF FREEDOM","A PEOPLE'S POWER","#9A4D25")
  "rajputana" = @("RAJPUTANA","HONOUR ETERNAL","A LEGACY OF VALOUR","#A07832")
  "ahom"       = @("AHOM","STRENGTH IN HARMONY","A LEGACY OF RESILIENCE","#49664C")
  "gupta"      = @("GUPTA","A GOLDEN AGE","OF KNOWLEDGE","#8B5E34")
  "mauryan"    = @("MAURYAN","UNITY IN DIVERSITY","A GREATER INDIA","#6D4B32")
}

function New-HeritageSvg($dir,$file,$title,$subtitle,$tagline,$accent) {
  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
<defs>
 <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
  <stop stop-color="#151311"/>
  <stop offset=".55" stop-color="$accent"/>
  <stop offset="1" stop-color="#E8D5B5"/>
 </linearGradient>
 <radialGradient id="sun">
  <stop stop-color="#FFF0B8" stop-opacity=".8"/>
  <stop offset="1" stop-color="#FFF0B8" stop-opacity="0"/>
 </radialGradient>
</defs>
<rect width="1600" height="900" fill="url(#bg)"/>
<circle cx="1230" cy="230" r="330" fill="url(#sun)"/>
<path d="M0 720 Q250 500 500 670 T1000 630 T1600 700 V900 H0Z" fill="#0D0C0A" opacity=".72"/>
<g fill="none" stroke="#E7C875" stroke-width="4" opacity=".6">
 <circle cx="800" cy="445" r="190"/>
 <circle cx="800" cy="445" r="125"/>
 <path d="M610 445h380M800 255v380"/>
</g>
<g fill="#E7C875" opacity=".65">
 <circle cx="800" cy="445" r="10"/>
 <circle cx="610" cy="445" r="7"/>
 <circle cx="990" cy="445" r="7"/>
</g>
<text x="100" y="120" fill="#F3DFA8" font-family="Georgia,serif" font-size="30" letter-spacing="8">VEERGATHA · HERITAGE DISCOVERY</text>
<text x="100" y="650" fill="#FFF8E8" font-family="Georgia,serif" font-size="90" letter-spacing="4">$title</text>
<text x="105" y="715" fill="#F3DFA8" font-family="Arial,sans-serif" font-size="29" letter-spacing="7">$subtitle</text>
<text x="105" y="770" fill="#FFF8E8" font-family="Georgia,serif" font-size="28" font-style="italic">$tagline</text>
</svg>
"@
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  [IO.File]::WriteAllText((Join-Path $dir $file),$svg)
}

foreach($w in $worlds.Keys) {
  $d = Join-Path $root "heritage\$w"
  $v = $worlds[$w]

  $hero = switch($w) {
    "chola"      {"hero-oceanic-maritime-network-chola"}
    "maratha"    {"hero-sahyadri-fort-network-maratha"}
    "rajputana" {"hero-mewar-fortress-rajputana"}
    "ahom"       {"hero-brahmaputra-valley-ahom"}
    "gupta"      {"hero-knowledge-empire-gupta"}
    "mauryan"    {"hero-pataliputra-administration-mauryan"}
  }

  New-HeritageSvg $d "$hero.svg" $v[0] $v[1] $v[2] $v[3]

  $names = @(
    "merchandise-premium-tshirt",
    "merchandise-oversized-tshirt",
    "merchandise-embroidered-apparel",
    "merchandise-sweatshirt",
    "merchandise-jacket",
    "merchandise-cap",
    "merchandise-tote-bag"
  )

  foreach($n in $names) {
    New-HeritageSvg $d "$n.svg" $v[0] "CONCEPTUAL EXPLORATION" ($v[1] + " · " + $v[2]) $v[3]
  }
}

$concepts = @{
 "strategy"    = @("STRATEGY","TIMELESS LESSONS")
 "leadership"  = @("LEADERSHIP","PEOPLE BEFORE POWER")
 "innovation"  = @("INNOVATION","IDEAS THAT ENDURE")
 "culture"     = @("CULTURE","ROOTS AND RENAISSANCE")
 "governance"  = @("GOVERNANCE","SYSTEMS FOR A STRONGER TOMORROW")
 "heritage"    = @("HERITAGE","STORIES THAT LIVE ON")
 "our-vision"  = @("OUR VISION","STORIES THAT SHAPE TOMORROW")
 "stories"     = @("STORIES","DISCOVER THE PAST ANEW")
 "community"   = @("COMMUNITY","HERITAGE IN COLLECTIVE MEMORY")
 "sustainability" = @("SUSTAINABILITY","ROOTED IN TOMORROW")
 "join-us"     = @("JOIN US","BECOME PART OF THE STORY")
}

foreach($c in $concepts.Keys) {
  $v = $concepts[$c]
  New-HeritageSvg (Join-Path $root "concepts") "$c.svg" $v[0] $v[1] "VEERGATHA" "#6D5035"
}

# Convert every existing image reference in the source code from .jpg/.jpeg/.png to .svg.
Get-ChildItem ".\src" -Recurse -Include *.tsx,*.ts -File | ForEach-Object {
  $p = $_.FullName
  $s = [IO.File]::ReadAllText($p)
  $s = $s -replace '\.(jpg|jpeg|png|webp)(["''])', '.svg$2'
  [IO.File]::WriteAllText($p,$s)
}

Write-Host ""
Write-Host "VEERGATHA local visual assets created successfully." -ForegroundColor Green
Write-Host "Image count:" ((Get-ChildItem ".\public\images" -Recurse -File).Count)
