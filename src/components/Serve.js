import CopyIcon from '../icons/copy.svg';

const Serve = ({ serveOptions, serve, port }) => {
  const command = serveOptions
    .find(({ name }) => name === serve)
    .command.replace('{port}', port);

  const copyToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(command);
    } else if (window?.clipboardData?.setData) {
      window.clipboardData.setData('Text', command);
    } else {
      alert('Failed to copy command to clipboard');
    }
  };

  return (
    <article class='wide' onClick={copyToClipboard}>
      <h3>Serve the files</h3>
      <p>{command}</p>
      <img src={CopyIcon} />
    </article>
  );
};

export default Serve;
