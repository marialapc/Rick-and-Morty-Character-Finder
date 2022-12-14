import '../styles/components/CharacterCard.scss';
import { Link } from "react-router-dom";
import  human from "../images/human.png";
import  ovni from "../images/ovni.png";

const CharacterCard = (props) => {
  
  const species = () =>{
    if (props.character.species === "Human"){
      return human;
    }else{
      return ovni;
    }
  }
  
  return (

        <li className='characterCard'>
        <Link to={`character/${props.character.id}`}className="characterCard__link">
      <img className='characterCard__img'
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4 className='characterCard__name'>{props.character.name}</h4>
      <img src={`${species()}`} alt="species" className='icon'></img>
      </Link>
    </li>

  );
};

export default CharacterCard;
