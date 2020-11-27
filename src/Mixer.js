import NavButton from './components/navButton';

function Mixers() {
  return (
    <section className="mixers">
      <div className="mixers__input-wrap">
        <input className="mixers__input" type="text" />
        <label htmlFor="mixers__input"> Find your mixers</label>
      </div>
      <ul className="mixers__list">
        <li className="mixers__list-item">
          <p className="mixers__list-copy"></p>
          <img className="mixers__list-cross" src="" alt="" />
        </li>
      </ul>
      <div className="button-container">
        <NavButton to="/booze" label="Back" />
        <NavButton to="/garnish" label="Next" />
      </div>
    </section>
  );
}

export default Mixers;
