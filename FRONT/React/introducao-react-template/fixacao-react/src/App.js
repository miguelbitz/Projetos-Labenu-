import logo from './img/logo.png';
import './App.css';

function App() {

  const onClickBotao = () => {
    alert("Botão foi clicado!");
  }

  return (
    <div className="container">
      <h1>Aprenda React na Labenu!</h1>
      <div >
        <img className="logo" src={logo} />
      </div>
      <div>
        <p><a href="https://labenu.com.br">Site da Labenu</a></p>
      </div>
      <div>
        <button className="botao" onClick={onClickBotao}> Clique aqui! </button>
      </div>
    </div>
  );
}

export default App;
