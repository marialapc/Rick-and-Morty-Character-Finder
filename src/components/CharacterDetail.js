import { Link } from "react-router-dom";

const CharacterDetail = (props) =>{
    console.log(props)
    return(
        <article>
            <img
        src={props.characterFound.image}
        alt={`Imagen de ${props.characterFound.name}`}
        title={`Imagen de ${props.characterFound.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
      <Link to ={"/"}> Volver </Link>
        </article>
    )

}

export default CharacterDetail;