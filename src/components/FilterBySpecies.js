const FilterBySpecies =  (props) => {

    const handleSpecies = (ev) =>{
        props.handleFilterSpecies(ev.target.value);
    }
return(
    <>
<label htmlFor="Human">Human</label>
<input type="radio" value="Human" name="Species" id="Human" onChange={handleSpecies}></input>
<label htmlFor="Alien">Alien</label>
<input type="radio" value="Alien" name="Species" id="Alien" onChange={handleSpecies}  ></input>
</>
);
};

export default FilterBySpecies;