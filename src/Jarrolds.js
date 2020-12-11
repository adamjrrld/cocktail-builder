import NavButton from './components/navButton';
import bottles from './images/bottle-banner.png';

function Jarrolds() {
  return (
    <section className="jarrolds">
      <div className="jarrolds__imgwrap">
        <img className="jarrolds__artwork" src={bottles} alt="" />
      </div>
      <p className="jarrolds__copy">Choose your base</p>
      <div className="button-container">
        <NavButton to="/" label="Back" />
        <NavButton to="/booze" label="Next" />
      </div>
    </section>
  );
}

export default Jarrolds;
