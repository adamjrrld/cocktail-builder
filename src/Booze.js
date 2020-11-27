import NavButton from './components/navButton';

function Booze() {
  return (
    <section className="Booze">
      <div className="Booze__input-wrap">
        <input className="Booze__input" type="text" />
        <label htmlFor="Booze__input"> Find your Booze</label>
      </div>
      <ul className="Booze__list">
        <li className="Booze__list-item">
          <p className="Booze__list-copy"></p>
          <img className="Booze__list-cross" src="" alt="" />
        </li>
      </ul>
      <div className="button-container">
        <NavButton to="/jarrolds" label="Back" />
        <NavButton to="/mixers" label="Next" />
      </div>
    </section>
  );
}

export default Booze;
