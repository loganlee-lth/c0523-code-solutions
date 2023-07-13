import { useEffect, useCallback, useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Content from './Content';
import Indicators from './Indicators';
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = useCallback(() => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  }, [currentIndex, images]);

  function handleClickPrev() {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(handleClickNext, 3000);
    return () => clearInterval(interval);
  }, [handleClickNext]);

  return (
    <div className="container">
      <div className="image-container">
        <div className="row">
          <div className="column-full justify-center align-center">
            <PrevButton onPrev={handleClickPrev} />
            <Content image={images[currentIndex]} />
            <NextButton onNext={handleClickNext} />
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <div className="column-full justify-center align-center">
            <Indicators
              images={images}
              currentIndex={currentIndex}
              onCustomClick={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
