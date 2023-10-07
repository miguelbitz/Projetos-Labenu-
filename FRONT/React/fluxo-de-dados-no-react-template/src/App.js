import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [inputImage, setInputImage] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [inputTitulo, setInputTitulo] = useState('')

  const onChangeInputImage = (event)=>{
    setInputImage(event.target.value)
  }

  const onChangeInputDescription = (event)=>{
    setInputDescription(event.target.value)
  } 

  const onChangeInputTitulo = (event)=>{
    setInputTitulo(event.target.value)
  } 
  
  //console.log(inputImage, inputDescription)
 
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
          inputImage={inputImage}
          inputDescription={inputDescription}
          inputTitulo={inputTitulo}
          onChangeInputImage={onChangeInputImage}
          onChangeInputTitulo={onChangeInputTitulo}onChangeInputDescription={onChangeInputDescription}
          />
        </aside>
        <TelaDaPostagem inputImage={inputImage} inputDescription={inputDescription} inputTitulo={inputTitulo}/>
      </Container>
    </>
  );
}

export default App;
