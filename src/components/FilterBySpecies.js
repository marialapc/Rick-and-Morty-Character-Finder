const FilterBySpecies =  (props) => {

    const handleSpecies = (ev) =>{
        props.handleFilterSpecies(ev.target.value);
    }
return(
    <>
<label htmlFor="Human">Human</label>
<input type="radio" value="Human" name="Species" id="Human" onChange={handleSpecies} checked={props.filterBySpecies === 'Human'}></input>
<label htmlFor="Alien">Alien</label>
<input type="radio" value="Alien" name="Species" id="Alien" onChange={handleSpecies} checked={props.filterBySpecies === 'Alien'}></input>
</>
);
};

export default FilterBySpecies;