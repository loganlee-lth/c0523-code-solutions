import './RotatingBanner.css';
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrev() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleClickNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handleClickPrev}/>
      <Indicators count={items.length} currentIndex={currentIndex} onCustomClick={handleSelect}/>
      <NextButton onNext={handleClickNext}/>
    </div>
  );
}
