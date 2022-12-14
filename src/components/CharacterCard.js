import '../styles/components/CharacterCard.scss';
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (

        <li className='characterCard'>
        <Link to={`character/${props.character.id}`}className="characterCard__link">
      <img className='characterCard__img'
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4 className='characterCard__name'>{props.character.name}</h4>
      <p className='characterCard__species'>{props.character.species}</p>
      </Link>
    </li>

  );
};

export default CharacterCard;
