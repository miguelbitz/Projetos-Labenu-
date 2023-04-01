import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;



function App() {

  const [searchId, setSearchId] = useState("")
  const [searchName, setSearchName] = useState("")
  const [order, setOrder] = useState("")

  /* const filteredPokemonsId = pokemons.filter((pokemon) => {
    return searchId ? pokemon.id === searchId : pokemons
  }) */

  /* const filteredPokemonsName = pokemons.filter((pokemon) => {
    return searchName ? pokemon.name[0] === searchName : pokemons
  }) */


  //console.log(pokemons.name)
  return (
    <>
      <GlobalStyle />
      <Header
        searchId={searchId}
        setSearchId={setSearchId}
        searchName={searchName}
        setSearchName={setSearchName}
        order={order}
        setOrder={setOrder} />

      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            if (searchId) {
              return pokemon.id.includes(searchId)
            } else {
              return pokemon
            }
          })
          .filter((pokemon) => {
            if (searchName) {
              return pokemon.name.english.toLowerCase().includes(searchName.toLowerCase())
            } else {
              return pokemon
            }
          })
          .sort((a, b) => {
            if (order === "crescente") {
              return a.id - b.id
            }
            if (order === "decrescente") {
              return b.id - a.id
            }
          })
          .map((pokemon) => (
            <PokemonCard
              cardColor={getColors(pokemon.type[0])}
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))}
      </CardsContainer>
    </>
  );
}

export default App;
