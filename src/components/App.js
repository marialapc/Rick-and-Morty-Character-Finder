import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import logo from "../images/logo2.png";
import FilterBySpecies from "./FilterBySpecies";
import ResetButton from "./ResetButton";

function App() {
  // variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterByName, setFilterByName] = useState(ls.get("filterByName", ""));
  const [filterBySpecies, setFilterBySpecies] = useState(ls.get("filterBySpecies", ""));

  // useEffect

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  // Funciones handler

  const handleFilterName = (value) => {
    setFilterByName(value);
    ls.set("filterByName", value);
  };

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
    ls.set("filterBySpecies", value);
  };

  // funciones render

  const filteredCharacters = characterData.filter((character) =>
    character.name.toLowerCase().includes(filterByName.toLowerCase())
  );


   const characterFound = (id) => {
   return characterData.find((character) => character.id === parseInt(id));
  };

  const selectedSpecies = characterData.filter((character) =>
    character.species.includes(FilterBySpecies)
  );

  //return

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" title="logo" className="header__logo"></img>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                  <ResetButton
                  setFilterByName={setFilterByName}
                  setFilterBySpecies={setFilterBySpecies}
                />
                <Filters
                  filterByName={filterByName}
                  handleFilterName={handleFilterName}
                  filterBySpecies={filterBySpecies}
                  handleFilterSpecies={handleFilterSpecies}
                />
                <CharacterList
                  characters={filteredCharacters}
                  filterByName={filterByName}
                  species={selectedSpecies}
                  filterBySpecies={filterBySpecies}
                />
              </>
            }
          ></Route>

          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterFound={characterFound} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
