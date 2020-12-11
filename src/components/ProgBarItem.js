import { NavLink } from 'react-router-dom';

function BarItem({ to, label }) {
  return (
    <div className="bar-list__item">
      <NavLink to={to}>{label}</NavLink>
    </div>
  );
}

export default BarItem;
