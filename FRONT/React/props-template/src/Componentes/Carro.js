function Carro(props) {

  console.log(props)
  return (
    <div>
      <h2>{props.carro.nomeCarro}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>Flex: {props.carro.flex ? "Sim" : "Nao"}</li>
      </ul>
    </div>
  );
}

export default Carro;
