import './RotatingBanner.css';
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  return (
    <div>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators items={items} />
      <NextButton />
    </div>
  );
}
