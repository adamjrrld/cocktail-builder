import NavButton from './components/navButton';

function Jarrolds() {
  return (
    <section className="Jarrolds">
      <div className="Jarrolds__imgwrap">
        <img className="Jarrolds__artwork" src="" alt="" />
        <p className="Jarrolds__copy"></p>
      </div>
      <div className="button-container">
        <NavButton to="/" label="Back" />
        <NavButton to="/booze" label="Next" />
      </div>
    </section>
  );
}

export default Jarrolds;
