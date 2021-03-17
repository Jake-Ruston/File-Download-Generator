const Serve = ({ serveOptions, serve, port }) => {
  const command = serveOptions
    .find(({ name }) => name === serve)
    .command.replace('{port}', port);

  return (
    <article class='serve'>
      <h3>Serve the files</h3>
      <p>{command}</p>
    </article>
  );
};

export default Serve;
