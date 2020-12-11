import NavButton from './components/navButton';
import glass from './images/glass-trans.png';

function Entry() {
  return (
    <section className="entry">
      <div className="entry__imgwrap">
        <img className="entry__img" src={glass} alt="" />
      </div>
      <p className="entry__copy">Are you over 18?</p>
      <div className="button-container">
        <NavButton to="/" label="No" />
        <NavButton to="/jarrolds" label="Yes" />
      </div>
    </section>
  );
}

export default Entry;
