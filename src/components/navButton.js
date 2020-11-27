import { NavLink } from 'react-router-dom';

function NavButton({ to, label }) {
  return (
    <div className="link-container">
      <NavLink className="link-container__link" to={to}>
        {label}
      </NavLink>
    </div>
  );
}

export default NavButton;
