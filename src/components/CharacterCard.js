import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (

        <li>
        <Link to={`character/${props.character.id}`}>
      <img
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
      </Link>
    </li>

  );
};

export default CharacterCard;
