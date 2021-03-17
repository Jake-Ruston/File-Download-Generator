const DownloadSelect = ({ downloadOptions, download, setDownload }) => {
  const update = (event) => setDownload(event.target.value);

  return (
    <article class='downloadSelect'>
      <select size={downloadOptions.length} value={download} onChange={update}>
        {downloadOptions.map(({ name }) => (
          <option>{name}</option>
        ))}
      </select>
    </article>
  );
};

export default DownloadSelect;
