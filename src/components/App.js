
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
  },[])

 
  // Funciones handler
const handlerFilterName = (value) =>{
setFilterByName(value)
};
  // funciones render

  //return

  return(
   <>
   <header>
    <h1>Rick and Morty</h1>
   </header>
   <main>
    <Filters handlerFilterName={handlerFilterName}/>
    <CharacterList  characters={characterData} />
   

   </main>

  </>
  );

}

export default App;
