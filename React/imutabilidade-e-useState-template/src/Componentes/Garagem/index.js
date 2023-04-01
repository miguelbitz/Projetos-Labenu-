import { useState } from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem(props) {

  /* const [automovel, setAutomovel] = useState({
    modelo: "Jeep",
    cor: "Preto",
    ano: 2022,
    adicionadoPor: "Miguel",
    flex: true
  }, {
    modelo: "BMW",
    cor: "Preto",
    ano: 2016,
    adicionadoPor: "Miguel",
    flex: true
  }, {
    modelo: "Hyundai",
    cor: "Preto",
    ano: 2023,
    adicionadoPor: "Miguel",
    flex: true
  }) */

  const [btnMudar, setBtnMudar] = useState(true)

  const [automovel, setAutomovel] = useState({
    modelo: "Jeep",
    cor: "Preto",
    ano: 2022,
    adicionadoPor: "Miguel",
    flex: true
  })

  const automoveis = [{
    modelo: "BMW",
    cor: "Preto",
    ano: 2017,
    adicionadoPor: "Miguel",
    flex: true
  }, {
    modelo: "Hyundai",
    cor: "Preto",
    ano: 2023,
    adicionadoPor: "Miguel",
    flex: true
  }]


  function btnMudarAutomovel() {
    if (btnMudar) {
      setAutomovel(automoveis[0])
      setBtnMudar(false)
    } else {
      setAutomovel(automoveis[1])
      setBtnMudar(true)
    }

  }

  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <Botao onClick={props.btnMudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />

        <b></b>
        <Botao onClick={btnMudarAutomovel}>Mudar Automovel</Botao>
      </Estacionamento>
    </GaragemContainer>
  )
}
