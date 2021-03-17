const Download = ({
  downloadOptions,
  download,
  ip,
  port,
  sourceFile,
  destinationFile,
}) => {
  let command = downloadOptions.find(({ name }) => name === download).command;
  command = command
    .replace('{ip}', ip)
    .replace('{port}', port)
    .replace('{source}', sourceFile)
    .replace('{destination}', destinationFile);

  const copyToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(command);
    } else if (window?.clipboardData?.setData) {
      window.clipboardData.setData('Text', command);
    } else {
      alert('Failed to copy command to clipboard');
    }
  };

  return (
    <article class='wide' onClick={copyToClipboard}>
      <h3>Download the files</h3>
      <p>{command}</p>
    </article>
  );
};

export default Download;
