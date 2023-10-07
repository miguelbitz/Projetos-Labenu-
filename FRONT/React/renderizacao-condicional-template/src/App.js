import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [screen, setScreen] = useState("login")

  const changeScreen = (screen) =>{
    setScreen(screen)
  }

  if (screen === "login") {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaLogin changeScreen={changeScreen}/>
      </MainContainer>
    );
  }

  if (screen === "register") {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro 
        changeScreen={changeScreen}/>
      </MainContainer>
    );
  }

  if (screen === "registered") {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado />
      </MainContainer>
    );
  }



  /* return (
    <MainContainer >
      <GlobalStyled />
      {screen === "login" ? <TelaLogin /> : <TelaCadastro /> }
      <TelaCadastro />
    </MainContainer>
  ); */
}

export default App;