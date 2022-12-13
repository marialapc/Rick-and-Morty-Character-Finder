import { useEffect, useState } from "react";
import {Route, Routes , matchPath, useLocation} from 'react-router-dom';
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

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
    character.name.toLowerCase().includes(filterByName.toLowerCase())
  );


   const {pathname} = useLocation();
   const dataUrl = matchPath("/character/:characterId", pathname);
   const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
   
   const characterFound = characterData.find((character) => character.id === characterId)
   
  

  //return

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <>
             <Filters filterByName={filterByName} handleFilterName={handleFilterName} />
             <CharacterList characters={filteredCharacters} />
            </>
          }>
         </Route>
         
         <Route path="/character/:characterId" element={<CharacterDetail character={characterFound}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
