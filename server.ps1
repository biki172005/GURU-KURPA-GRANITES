$port = 8081
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Listening on http://localhost:$port/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    
    $localPath = $context.Request.Url.LocalPath
    if ($localPath -eq "/") { $localPath = "/index.html" }
    
    $filePath = Join-Path $PWD $localPath.Replace("/", "\")
    
    if (Test-Path $filePath -PathType Leaf) {
        $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $fileBytes.Length
        
        $extension = [System.IO.Path]::GetExtension($filePath)
        if ($extension -eq ".html") { $response.ContentType = "text/html" }
        elseif ($extension -eq ".css") { $response.ContentType = "text/css" }
        elseif ($extension -eq ".js") { $response.ContentType = "application/javascript" }
        elseif ($extension -eq ".jpg") { $response.ContentType = "image/jpeg" }
        
        $response.OutputStream.Write($fileBytes, 0, $fileBytes.Length)
    } else {
        $response.StatusCode = 404
    }
    
    $response.Close()
}
