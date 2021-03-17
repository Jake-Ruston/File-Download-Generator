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

  return (
    <article class='download'>
      <h3>Download the files</h3>
      <p>{command}</p>
    </article>
  );
};

export default Download;
