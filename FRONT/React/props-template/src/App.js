import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome = 'Miguel'

  const nome2 = "Gica"

  const apresentaGaragem = (nomeDaGaragem) => {
    alert(`Boas vindas a garagem de ${nomeDaGaragem}`)
  }

  const carro1 = {
    nomeCarro: "Jeep",
    cor: "Preto",
    ano: 2020,
    flex: true
  }

  const carro2 = {
    nomeCarro: "BMW",
    cor: "Preto",
    ano: 2016,
    flex: true
  }

  const carro3 = {
    nomeCarro: "Audi",
    cor: "Preto",
    ano: 2017,
    flex: true
  }

  const carro4 = {
    nomeCarro: "Volks",
    cor: "Preto",
    ano: 2019,
    flex: false
  }

  const carroNovo1 = {
    nomeCarro: "Etios",
    cor: "Prata",
    ano: 2016,
    flex: true
  }

  const carroNovo2 = {
    nomeCarro: "Capture",
    cor: "Bege",
    ano: 2017,
    flex: true
  }

  const carroNovo3 = {
    nomeCarro: "Ferrari",
    cor: "Vermelha",
    ano: 2023,
    flex: true
  }

  const carroNovo4 = {
    nomeCarro: "Fiat",
    cor: "Branco",
    ano: 2019,
    flex: false
  }


  return (
    <div>
      <Garagem nome={nome} apresentaGaragem={apresentaGaragem} carro1 = {carro1} carro2 = {carro2} carro3 = {carro3} carro4 = {carro4} />

      <Garagem nome={nome2} apresentaGaragem={apresentaGaragem} carro1 = {carroNovo1} carro2 = {carroNovo2} carro3 = {carroNovo3} carro4 = {carroNovo4} />
    </div>
  );
}
