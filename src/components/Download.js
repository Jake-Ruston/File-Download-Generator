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
    navigator.clipboard.writeText(command);
  };

  return (
    <article class='wide' onClick={copyToClipboard}>
      <h3>Download the files</h3>
      <p>{command}</p>
    </article>
  );
};

export default Download;
