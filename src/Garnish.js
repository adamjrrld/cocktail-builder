import NavButton from './components/navButton';

function Garnish() {
  return (
    <section className="garnish">
      <h2 className="garnish__header">Choose your garnish</h2>
      <div className="garnish__grid">
        <div className="garinsh__grid__item">
          <div className="grid__item__imgwrap">
            <img className="grid__item__img" src="" alt="" />
          </div>
          <p className="grid__item__copy"></p>
        </div>
      </div>
      <div className="garnish__search">
        <input className="garnish__input" type="text" />
        <label htmlFor="garnish__input">Other</label>
      </div>
      <div className="button-container">
        <NavButton to="/mixers" label="Back" />
        <NavButton to="/garnish" label="Next" />
      </div>
    </section>
  );
}

export default Garnish;
