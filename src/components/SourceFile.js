const SourceFile = ({ sourceFile, setSourceFile }) => {
  const update = (event) => setSourceFile(event.target.value);

  return (
    <article>
      <h3>Source File</h3>
      <input type='text' value={sourceFile} onChange={update} />
    </article>
  );
};

export default SourceFile;
