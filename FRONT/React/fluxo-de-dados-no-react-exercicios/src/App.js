import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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
  const [pageFlow, setPageFlow] = useState(1);

  const [inputName, setInputName] = useState('')
  const [inputProfilePic, setInputProfilePic] = useState('')
  const [newLogin, setNewLogin] = useState({})

  const [inputImage, setInputImage] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [inputTitle, setInputTitle] = useState('')
  const [newPost, setNewPost] = useState({})

  const checkLogin = () => {
    if ((inputName && inputProfilePic) === ('')) {
      setPageFlow(1)
      alert('Faça login!')
    } else
      setPageFlow(2)
    setNewLogin({
      name: inputName,
      image: inputProfilePic
    })
  }

  const post = () => {
    setPageFlow(3)
    setNewPost({
      imagePost: inputImage,
      description: inputDescription,
      title: inputTitle
    })
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
            newLogin={newLogin}
            pageFlow={pageFlow}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
              checkLogin={checkLogin}
              setPageFlow={setPageFlow}
              inputName={inputName}
              inputProfilePic={inputProfilePic} onChangeInputName={(e) => setInputName(e.target.value)}
              onChangeInputProfilePic={(e) => setInputProfilePic(e.target.value)} />
          ) : (
            <FormularioPostagem
              newPost={newPost}
              post={post}
              onChangeInputImage={(e) => setInputImage(e.target.value)}
              onChangeInputDescription={(e) => setInputDescription(e.target.value)}
              onChangeInputTitle={(e) => setInputTitle(e.target.value)} />
          )}
        </aside>
        <TelaDaPostagem 
        newPost={newPost}
        pageFlow={pageFlow}/>
      </Container>
    </>
  );
}

export default App;
