function Indicators({ items, onCustomClick }) {
  function handleClick() {}

  const numberedButtons = items.map((item, index) => (
    <button onClick={handleClick} className="numbered-button">{index}</button>
  ));

  return <div>{numberedButtons}</div>;
}

export default Indicators;
