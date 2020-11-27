import NavButton from './components/navButton';

function Entry() {
  return (
    <section className="entry">
      <div className="entry__imgwrap">
        <img className="entry__img" src="" alt="" />
        <p className="entry__copy"></p>
      </div>
      <div className="button-container">
        <NavButton to="/" label="No" />
        <NavButton to="/jarrolds" label="Yes" />
      </div>
    </section>
  );
}

export default Entry;
