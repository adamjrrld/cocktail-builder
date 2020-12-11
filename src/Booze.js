import { useState } from 'react';
import ChosenIngredient from './components/ChosenIngredient';
import ChosenList from './components/ChosenList';
import NavButton from './components/navButton';
import SearchBar from './components/SearchBar';
import booze from './data/Alcohol';
import { nanoid } from 'nanoid';

function Booze() {
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
    <section className="booze">
      <ChosenList chosenItems={chosenItem} IngredientName="Drinks List" />
      <SearchBar
        placeholder={'More Booze'}
        data={booze}
        addIngredient={addIngredient}
      />
      <div className="button-container">
        <NavButton to="/jarrolds" label="Back" />
        <NavButton to="/mixers" label="Next" />
      </div>
    </section>
  );
}

export default Booze;
