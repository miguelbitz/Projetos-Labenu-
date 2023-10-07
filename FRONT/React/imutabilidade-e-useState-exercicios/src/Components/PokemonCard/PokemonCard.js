import React, { useState } from 'react'
import { Card, PokemonName, PokemonType, EvolveButton, Image} from './styles'



const PokemonCard = (props) => {

  const [btnEvoluir, setBtnEvoluir] = useState(true)

  const pokemon = {
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 20,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png',
    id: 0
  }

  const pokemonEvolucao = {
    name: "Charmeleon",
    type: "Fire",
    evolved: true,
    weight: 35,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png',
    id: 1
  }

  const pokemonEvolucao2 = {
    name: "Mega Charizard",
    type: "Fire",
    evolved: true,
    weight: 350,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/a/a0/0006Charizard-Mega_Y.png',
    id: 2
  }

  const evoluirPokemon = () => {
    if(btnEvoluir){
      props.setPokemon(pokemonEvolucao)
      setBtnEvoluir(false)
    }else{
      props.setPokemon(pokemonEvolucao2)
    }
    
  }

  const voltarPokemon = () => {
    props.setPokemon(pokemon)
    setBtnEvoluir(true)
  }


  return (
    <Card color={props.pokemon.color}>
      <Image src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
      <EvolveButton onClick={() => voltarPokemon()}>Voltar a forma original</EvolveButton>
    </Card>
  )
}

export default PokemonCard