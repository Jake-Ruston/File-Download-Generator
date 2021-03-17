export default [
  { name: 'Python HTTP', command: 'python -m SimpleHTTPServer {port}' },
  { name: 'Python3 HTTP', command: 'python3 -m http.server {port}' },
  { name: 'Python FTP', command: 'python -m pyftpdlib -p {port}' },
  { name: 'Python3 SMB', command: 'python3 impacket-smbserver.py files .' },
];
