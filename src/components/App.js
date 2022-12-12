
import { useEffect } from "react";
import "../styles/App.scss";
import getDataFromApi from "../services/api";


function App() {
  // variables estado


  // useEffect

  useEffect(() => {
 getDataFromApi().then((data) => {
  console.log(data);
 });
  },[])

 
  // Funciones handler

  // funciones render

  //return

  return(
   <>
 <h1>hi world</h1>

  </>
  );
}

export default App;
