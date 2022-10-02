import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [pokeApiData, setPokeApiData ]= useState([]);
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      console.log(response.data.results);
      setPokeApiData(response.data.results);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <ol>
        {/* use ordered list to number the names/double checking */}
        {pokeApiData.map((pokemon, index) => (<li key={index}>{pokemon.name}</li>))}
      </ol>
    </div>
  );
}

export default App;