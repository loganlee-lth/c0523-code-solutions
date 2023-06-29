import './RotatingBanner.css';
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} current={currentIndex}/>
      <NextButton />
    </div>
  );
}
