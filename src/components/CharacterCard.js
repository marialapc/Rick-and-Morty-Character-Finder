const CharacterCard = (props) => {
  return (
    <li>
      <a href={props.character.id}></a>
      <img
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
    </li>
  );
};

export default CharacterCard;
