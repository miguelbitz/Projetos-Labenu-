import { CarroContainer } from './styles'

//USANDO PROPS
/* export function Carro(props) {
  return (
    <CarroContainer>
      <h2>{props.modelo}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}
 */

//USANDO DESESTRUTURAÇÃO
export function Carro({modelo, cor, ano, flex, adicionadoPor}) {
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}
