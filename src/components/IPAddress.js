const IPAddress = ({ ip, setIp }) => {
  const update = (event) => setIp(event.target.value);

  return (
    <article>
      <h3>IP Address</h3>
      <input type='text' value={ip} onChange={update} />
    </article>
  );
};

export default IPAddress;
