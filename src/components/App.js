
import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";


function App() {
  // variables estado
const [characterData, setCharacterData] = useState([]);
const [filterByName, setFilterByName] = useState('');

  // useEffect

  useEffect(() => {
 getDataFromApi().then((data) => {
  setCharacterData(data);
 });
  },[]);

 
  // Funciones handler

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

const handleFilterName = (event) =>{
 
setFilterByName(event.target.value);
};



  // funciones render

  //return

  return(
   <>
   <header>
    <h1>Rick and Morty</h1>
   </header>
   <main>
    {/* <Filters handleFilterName={handleFilterName} filterByName={filterByName}/> */}
    <form onSubmit={handleSubmit}> 
     <input
   onInput={handleFilterName}
   value={filterByName}
  type="text"
   name="name"
   id="name"
    placeholder="Ej: Rick"
    ></input>
   </form>
    <CharacterList  characters={characterData} />
   

   </main>

  </>
  );

}

export default App;
