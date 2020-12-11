import GridChild from './GridChild';
import lemon from '../images/fruit-icons/Lemon2.png';

const FRUIT = [
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
  { source: lemon, copy: 'lemon', alt: 'a lemon' },
];

function GarnishGrid() {
  const fruitSquares = FRUIT.map((ele) => {
    return <GridChild source={ele.source} copy={ele.copy} alt={ele.alt} />;
  });
  return <div className="garnish-grid">{fruitSquares}</div>;
}

export default GarnishGrid;
