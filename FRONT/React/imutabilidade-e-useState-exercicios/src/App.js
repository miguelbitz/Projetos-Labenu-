import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  

  const [pokemon, setPokemon] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 2,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png',
    id: 0
  })
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon} setPokemon={setPokemon}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
