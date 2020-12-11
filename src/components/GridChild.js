function GridChild({ source, copy, alt }) {
  return (
    <div className="garnish-grid__item">
      <img className="garnish-grid__img" src={source} alt={alt} />
      <p className="garnish-grid__copy">{copy}</p>
    </div>
  );
}

export default GridChild;
