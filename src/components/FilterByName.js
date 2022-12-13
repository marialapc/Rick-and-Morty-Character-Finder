const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  
  };

  return (
    <input
      onInput={handleInput}
      value={props.filterByName}
      type="text"
      name="name"
      id="name"
      placeholder="Ej: Rick"
    ></input>
  );
};
export default FilterByName;
