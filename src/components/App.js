
import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";


function App() {
  // variables estado
const [characterData, setCharacterData] = useState([])

  // useEffect

  useEffect(() => {
 getDataFromApi().then((data) => {
  setCharacterData(data);
 });
  },[])

 
  // Funciones handler

  // funciones render

  //return

  return(
   <>
   <header>
    <h1>Rick and Morty</h1>
   </header>
   <main>
    <CharacterList  characters={characterData} />
   

   </main>

  </>
  );

}

export default App;
