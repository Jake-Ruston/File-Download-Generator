const DestinationFile = ({ destinationFile, setDestinationFile }) => {
  const update = (event) => setDestinationFile(event.target.value);

  return (
    <article class='destination'>
      <h3>Destination File</h3>
      <input type='text' value={destinationFile} onChange={update} />
    </article>
  );
};

export default DestinationFile;
