function Indicators({ count, currentIndex, onCustomClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    if (i === currentIndex) {
      buttons.push(
        <button key={i} type="button" onClick={() => onCustomClick(i)} className="">
          {i}
        </button>
      );
    } else {
      buttons.push(<button key={i} type="button" onClick={() => onCustomClick(i)}>{i}</button>);
    }
  }
  return <div>{buttons}</div>
}

export default Indicators;
