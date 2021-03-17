import { useState } from 'react';

import serveOptions from './inputs/Serve';
import downloadOptions from './inputs/Download';

import Header from './components/Header';
import IPAddress from './components/IPAddress';
import Port from './components/Port';
import SourceFile from './components/SourceFile';
import DestinationFile from './components/DestinationFile';
import ServeSelect from './components/ServeSelect';
import Serve from './components/Serve';
import DownloadSelect from './components/DownloadSelect';
import Download from './components/Download';

const App = () => {
  const [ip, setIp] = useState('192.168.1.1');
  const [port, setPort] = useState(1234);
  const [sourceFile, setSourceFile] = useState('ms10-051.exe');
  const [destinationFile, setDestinationFile] = useState('exploit.exe');
  const [serve, setServe] = useState(serveOptions[0].name);
  const [download, setDownload] = useState(downloadOptions[0].name);

  return (
    <>
      <Header />
      <>
        <IPAddress ip={ip} setIp={setIp} />
        <Port port={port} setPort={setPort} />
        <SourceFile sourceFile={sourceFile} setSourceFile={setSourceFile} />
        <DestinationFile
          destinationFile={destinationFile}
          setDestinationFile={setDestinationFile}
        />
      </>
      <>
        <ServeSelect
          serveOptions={serveOptions}
          serve={serve}
          setServe={setServe}
        />
        <Serve serveOptions={serveOptions} serve={serve} port={port} />
      </>
      <>
        <DownloadSelect
          downloadOptions={downloadOptions}
          download={download}
          setDownload={setDownload}
        />
        <Download
          downloadOptions={downloadOptions}
          download={download}
          ip={ip}
          port={port}
          sourceFile={sourceFile}
          destinationFile={destinationFile}
        />
      </>
    </>
  );
};

export default App;
