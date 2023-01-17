import '../styles/components/CharacterDetail.scss';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const CharacterDetail = (props) =>{
    const params = useParams();
    const character = props.characterFound(params.characterId);
    if (character === undefined) {
        return <NotFound />
    } else {
    return(
        <>
        <Link to ={"/"} className="returnBtN"> Return </Link>
        <article className="detail-article">
            <img className='detail-article__img'
        src={character.image}
        alt={`Imagen de ${character.name}`}
        title={`Imagen de ${character.name}`}
      />
       <section className='detail-article__info'>
       <h4 className='detail-article__info--name'>{character.name}</h4>
      <p className='detail-article__info--name'>Status: {character.status}</p>
      <p className='detail-article__info--name'> Species: {character.species}</p>
      <p className='detail-article__info--name'> Origin: {character.planet}</p>
      <p className='detail-article__info--name'> Episodes: {character.episodes.length}</p>
      </section>
     
        </article>
         </>
    )
    };
}

export default CharacterDetail;