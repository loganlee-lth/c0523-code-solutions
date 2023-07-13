import { FaRegCircle, FaCircle } from 'react-icons/fa';

export default function Indicators({ images, currentIndex, onCustomClick }) {
  const circles = [];
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      circles.push(
        <FaCircle
          key={images[i].id}
          onClick={() => onCustomClick(i)}
          className="circle"
        />
      );
    } else {
      circles.push(
        <FaRegCircle
          key={images[i].id}
          onClick={() => onCustomClick(i)}
          className="circle"
        />
      );
    }
  }
  return <div>{circles}</div>;
}
