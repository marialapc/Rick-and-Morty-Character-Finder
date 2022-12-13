import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  // variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  // useEffect

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  // Funciones handler

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  // funciones render

  const filteredCharacters = characterData.filter((character) =>
    character.name. toLowerCase().includes(filterByName.toLowerCase())
  );
  //return

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Filters
          filterByName={filterByName}
          handleFilterName={handleFilterName}
        />
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
