import { useState } from 'react';
import { nanoid } from 'nanoid';
import NavButton from './components/navButton';
import mixers from './data/Mixers';
import SearchBar from './components/SearchBar';
import ChosenList from './components/ChosenList';
import ChosenIngredient from './components/ChosenList';

function Mixers() {
  const [list, setList] = useState([]);
  function addIngredient(name) {
    const newListItem = {
      name: name,
      id: 'ingredient' + nanoid(),
      added: false,
    };
    setList([...list, newListItem]);
  }
  const chosenItem = list.map((ingredient) => (
    <ChosenIngredient
      id={ingredient.id}
      name={ingredient.name}
      added={ingredient.completed}
      key={ingredient.id}
    />
  ));
  return (
    <section className="mixers">
      <ChosenList chosenItems={chosenItem} IngredientName="Drinks List" />
      <SearchBar
        placeholder={'Find your mixers'}
        data={mixers}
        addIngredient={addIngredient}
      />
      <div className="button-container">
        <NavButton to="/booze" label="Back" />
        <NavButton to="/garnish" label="Next" />
      </div>
    </section>
  );
}

export default Mixers;
