import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, filterByName, filterBySpecies}) => {

  if (characters.length === 0 ){
    return (
    <p>No hay ningún personaje que coincida con la palabra "{filterByName}"</p>);
  } else {
  const characterElement = characters
  .filter((character) =>{ return filterBySpecies=== '' || character.species === filterBySpecies})
  
  .map((character) => {
    return <CharacterCard  key={character.id} character={character} />;
  });
  

  return (
    <section>
      <ul className="characterList">{characterElement}</ul>
    </section>
  );
  }
};


export default CharacterList;
