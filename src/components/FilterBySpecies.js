const FilterBySpecies =  () => {
return(
    <>
<label htmlFor="Human">Human</label>
<input type="radio" value="Human" name="Human" id="Human" onChange={handleSpecies}></input>
<label htmlFor="Alien">Alien</label>
<input type="radio" value="Alien" name="Alien" id="Alien" onChange={handleSpecies}></input>
</>
);
};

export default FilterBySpecies;