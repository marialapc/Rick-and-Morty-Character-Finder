
import '../styles/components/FilterBySpecies.scss';
import  human from "../images/human.png";
import  ovni from "../images/ovni.png";

const FilterBySpecies =  (props) => {

    const handleSpecies = (ev) =>{
        props.handleFilterSpecies(ev.target.value);
    }
return(
    <>
<img src={human} alt="human" title="human" className="human"></img>
<input type="radio" value="Human" name="Species" id="Human" className='inputHuman' onChange={handleSpecies} checked={props.filterBySpecies === 'Human'}></input>
<img src={ovni} alt="alien" title="alien" className="ovni"></img>
<input type="radio" value="Alien" name="Species" id="Alien" className='inputAlien'onChange={handleSpecies} checked={props.filterBySpecies === 'Alien'}></input>
</>
);
};

export default FilterBySpecies;