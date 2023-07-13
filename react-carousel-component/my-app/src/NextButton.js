import { FaChevronRight } from 'react-icons/fa';

export default function NextButton({ onNext }) {
  return <FaChevronRight onClick={onNext} />;
}
