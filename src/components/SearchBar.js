import search from '../images/search.png';
import { useEffect, useState } from 'react';
import plus from '../images/plus.png';

function SearchBar({ placeholder, data, addIngredient }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = data.filter((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  function handleClick(e) {
    e.preventDefault();
    addIngredient(e.target.textContent);
  }

  const ingredientResults = searchResults.map((item) => (
    <li className="searchBar__list-item" onClick={handleClick}>
      <img src={plus} alt="plus icon" className="searchBar__plus-icon" />
      {item}
    </li>
  ));

  return (
    <div className="searchBar">
      <img src={search} alt="search icon" className="searchBar__img" />
      <form onSubmit={handleClick}>
        <label htmlFor="spirit">
          <input
            id="spirit"
            className="searchBar__input"
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
          />
        </label>
      </form>
      <ul className="searchBar__list">
        {searchTerm === '' ? null : ingredientResults}
      </ul>
    </div>
  );
}

export default SearchBar;
