import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        handleFilterName={props.handleFilterName}
      />
    </form>
  );
};
export default Filters;
