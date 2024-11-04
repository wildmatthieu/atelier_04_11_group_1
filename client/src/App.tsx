// import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [resultApiPokemon, setResultApiPokemon] = useState(0);

  // au premier montage / render de mon composant
  // va choper les données dans le serveur qui gere les datas des pokemons
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setResultApiPokemon(result);
      });
  }, []);

  return (
    // Afficher le nbr de pokemon total
    <>
      <h1>count {resultApiPokemon.count}</h1>
      {resultApiPokemon !== 0 &&
        resultApiPokemon.results.map((pokemon) => {
          return (
            <section key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <a href={pokemon.url}>Lien vers le pokemon</a>
            </section>
          );
        })}
    </>
  );
}

export default App;
