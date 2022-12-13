import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, filterByName}) => {

  if (characters.length === 0 ){
    return (
    <p>No hay ningún personaje que coincida con la palabra "{filterByName}"</p>);
  } else {
  const characterElement = characters.map((character) => {
    return <CharacterCard  key={character.id} character={character} />;
  });
  
  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
  }
};


export default CharacterList;
