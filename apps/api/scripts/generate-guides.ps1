# Gera as guias de voz (TTS do Windows) em public/audio/guides/
# Uso: powershell -ExecutionPolicy Bypass -File scripts/generate-guides.ps1  (a partir de apps/api)
Add-Type -AssemblyName System.Speech

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$ptVoice = $synth.GetInstalledVoices() |
  Where-Object { $_.VoiceInfo.Culture.Name -like "pt*" } |
  Select-Object -First 1
if ($ptVoice) {
  $synth.SelectVoice($ptVoice.VoiceInfo.Name)
  Write-Host "Voz: $($ptVoice.VoiceInfo.Name)"
} else {
  Write-Host "Nenhuma voz pt-BR instalada; usando voz padrao: $($synth.Voice.Name)"
}
$synth.Rate = 2

$outDir = Join-Path (Get-Location) "public\audio\guides"
New-Item -ItemType Directory -Force $outDir | Out-Null

$guides = @{
  "intro"  = "Intro"
  "verso"  = "Verso"
  "refrao" = "Refrão"
  "solo"   = "Solo"
  "ponte"  = "Ponte"
  "final"  = "Final"
}

# Números da contagem: bem mais rápidos, para caberem em 1 tempo do compasso
$numbers = @{
  "um"     = "Um"
  "dois"   = "Dois"
  "tres"   = "Três"
  "quatro" = "Quatro"
  "cinco"  = "Cinco"
  "seis"   = "Seis"
}

foreach ($slug in $guides.Keys) {
  $path = Join-Path $outDir "$slug.wav"
  $synth.Rate = 2
  $synth.SetOutputToWaveFile($path)
  $synth.Speak($guides[$slug])
  Write-Host "Gerado $slug.wav"
}

foreach ($slug in $numbers.Keys) {
  $path = Join-Path $outDir "$slug.wav"
  $synth.Rate = 6
  $synth.SetOutputToWaveFile($path)
  $synth.Speak($numbers[$slug])
  Write-Host "Gerado $slug.wav (rapido)"
}
$synth.SetOutputToNull()
$synth.Dispose()
Write-Host "Guias geradas em $outDir"
