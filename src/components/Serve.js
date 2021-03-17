const Serve = ({ serveOptions, serve, port }) => {
  const command = serveOptions
    .find(({ name }) => name === serve)
    .command.replace('{port}', port);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
  };

  return (
    <article class='wide' onClick={copyToClipboard}>
      <h3>Serve the files</h3>
      <p>{command}</p>
    </article>
  );
};

export default Serve;
