import React from "react";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarNome } from "./hooks/useCapturarNome";
import { useCapturarPostagem } from "./hooks/useCapturarPostagem";
import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL, BASE_URL_harry } from "./constants/constants";

function App() {

  /* const nomeUsuarios =  useCapturarNome()
  const postagens = useCapturarPostagem() */

  const [nomeUsuarios, isLoadingNomes, errorNomes] = useRequestData(`${BASE_URL}users`, [])
  const [postagens, isLoadingPost, errorPost] = useRequestData(`${BASE_URL}comments`, [])
  const [personagensHarry, isLoadingHarry, errorHarry] = useRequestData(`${BASE_URL_harry}characters/students`, [])

  /* const renderizarUsuarios = nomeUsuarios.map((usuario) => {
    return (
      <Card
        key={usuario.id}
        text={usuario.name}
        backgroudColor={'nome'}
        textColor={'nome'}
      />)
  }) */

  const renderizarPostagens = postagens.map((post) => {
    return (
      <Card
        key={post.id}
        text={post.body}
        backgroudColor={'#1dc690'}
        textColor={'#ffffff'}
      />)
  })

  const renderizarHarryChar = personagensHarry.map((char, index) => {
    console.log(char.name)
    return (
      <Card
        key={index}
        text={char.name}
        textColor={'black'}
      />)
  })

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes Harry</Title>
      <NameContainer>
        <div>
          {isLoadingHarry && <p>Carregando</p>}
          {!isLoadingHarry && errorHarry && <p>Ocorreu um erro</p>}
          {!isLoadingHarry && personagensHarry && personagensHarry.length > 0 && renderizarHarryChar}
          {!isLoadingHarry && personagensHarry && personagensHarry.length === 0 && <p>Lista vazia</p>}
        </div>
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        <div>
          {isLoadingPost && <p>Carregando</p>}
          {!isLoadingPost && errorPost && <p>Ocorreu um erro</p>}
          {!isLoadingPost && postagens && postagens.length > 0 && renderizarPostagens}
          {!isLoadingPost && postagens && postagens.length === 0 && <p>Lista vazia</p>}
        </div>
      </PostContainer>
    </div>
  );
}

export default App;



