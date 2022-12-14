import '../styles/components/FilterByName.scss';

const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <input className="FilterByName"
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
