import FilterByName from "./FilterByName";

const Filters = (props) =>{

    const handleSubmit = (ev) =>{
        ev.preventDefault();
    };

return (
<form onSubmit={handleSubmit}> 
<FilterByName FilterByName={props.FilterByName} handleFilterName={props.handleFilterName} />
</form>
);
};
 export default Filters;