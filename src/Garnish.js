import NavButton from './components/navButton';
import GarnishGrid from './components/GarnishGrid';
import garnish from './data/Garnish';
import SearchBar from './components/SearchBar';

function Garnish() {
  return (
    <section className="garnish">
      <h2 className="garnish__header">Choose your garnish</h2>
      <GarnishGrid />
      <SearchBar placeholder="Other" data={garnish} />
      <div className="button-container">
        <NavButton to="/mixers" label="Back" />
        <NavButton to="/garnish" label="Next" />
      </div>
    </section>
  );
}

export default Garnish;
