import styled from "styled-components";

export const Main = styled.main`
  min-height: 80%;
  display: flex;
`
export const PainelVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`

export const TelaInteira = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`


