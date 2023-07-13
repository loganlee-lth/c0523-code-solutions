import { FaChevronLeft } from 'react-icons/fa';

export default function PrevButton({ onPrev }) {
  return <FaChevronLeft onClick={onPrev} />;
}
