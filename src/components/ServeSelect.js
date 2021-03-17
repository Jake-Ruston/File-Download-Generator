const ServeSelect = ({ serveOptions, serve, setServe }) => {
  const update = (event) => setServe(event.target.value);

  return (
    <article class='serveSelect'>
      <select size={serveOptions.length} value={serve} onChange={update}>
        {serveOptions.map(({ name }) => (
          <option>{name}</option>
        ))}
      </select>
    </article>
  );
};

export default ServeSelect;
