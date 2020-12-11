import Filler from './ProgBarFiller';
import BarItem from './ProgBarItem';

const routeData = [
  { to: '/', label: 'Home' },
  { to: '/jarrolds', label: 'Gin' },
  { to: '/booze', label: 'Booze' },
  { to: '/mixers', label: 'Mixers' },
  { to: '/garnish', label: 'Garnish' },
];

function ProgressBar() {
  const barItems = routeData.map((element) => {
    return <BarItem to={element.to} label={element.label} />;
  });
  return (
    <div className="bar-container">
      <div className="progress-bar">
        <Filler />
        <ul className="bar-list">{barItems}</ul>
      </div>
    </div>
  );
}

export default ProgressBar;
