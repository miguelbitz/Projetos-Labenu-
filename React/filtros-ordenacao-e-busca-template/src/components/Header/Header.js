import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input value={props.searchId} onChange={(e)=>props.setSearchId(e.target.value)} type="number" placeholder="Buscar por id" />
      <input value={props.searchName} onChange={(e)=>props.setSearchName(e.target.value)} type="text" placeholder="Buscar por nome" />
      <select onChange={(e)=>props.setOrder(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
