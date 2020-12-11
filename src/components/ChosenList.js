function ChosenList({ chosenItems, IngredientName }) {
  return (
    <div className="chosen-ingredients">
      <h2 className="chosen-ingredients__header">{IngredientName}</h2>
      <ul className="chosen-ingredients__list" id="chosen_list">
        {chosenItems}
      </ul>
    </div>
  );
}

export default ChosenList;
