const Port = ({ port, setPort }) => {
  const update = (event) => setPort(event.target.value);

  return (
    <article class='port'>
      <h3>Port</h3>
      <input type='number' value={port} onChange={update} />
    </article>
  );
};

export default Port;
