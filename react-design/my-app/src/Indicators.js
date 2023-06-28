const numberedButtonStyle = {
  width: '2.5rem',
  height: '2.5rem',
};

function Indicators({ items, onCustomClick }) {
  function handleClick() {}

  const numberedButtons = items.map((item, index) => (
    <button onClick={handleClick} style={numberedButtonStyle}>{index}</button>
  ));

  return <div>{numberedButtons}</div>;
}

export default Indicators;
