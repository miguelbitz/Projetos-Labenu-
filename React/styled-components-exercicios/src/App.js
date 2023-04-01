import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { GlobalStyled } from "./GlobalStyled";
import { TelaInteira, Footer, Main, Header, MenuPrincipal } from "../src/styled"

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
    <GlobalStyled />
    <div>
      <TelaInteira>
        
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuPrincipal>
            <ul>
              <li>
                Início
              </li>

              <li>
                Em alta
              </li>

              <li
              >Inscrições
              </li>

              <li>
                Originais
              </li>

              <li>
                Histórico
              </li>
            </ul>
          </MenuPrincipal>

          <section>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </TelaInteira>
    </div>
    </>
  );
}
