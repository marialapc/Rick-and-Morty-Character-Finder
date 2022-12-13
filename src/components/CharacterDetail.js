import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CharacterDetail = (props) =>{
    const params = useParams();
    const character = props.characterFound(params.characterId);
    return(
        <article>
            <img
        src={character.image}
        alt={`Imagen de ${character.name}`}
        title={`Imagen de ${character.name}`}
      />
      <h4>{character.name}</h4>
      <p>Status: {character.status}</p>
      <p> Species: {character.species}</p>
      <p> Origin: {character.planet}</p>
      <p> Episodes: {character.episodes.length}</p>
     
      <Link to ={"/"}> Volver </Link>
        </article>
    )

}

export default CharacterDetail;