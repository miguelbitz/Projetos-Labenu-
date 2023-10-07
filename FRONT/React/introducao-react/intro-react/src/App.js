import logo from './logo.svg';
import './App.css';

function App() {

  const nome = "Miguel"

  const olaMundo = () =>{
    alert("Ola Mundo!")
  }

  return (
    <div className="App">
        <button
        onClick={olaMundo}
        className='botao'
        ><b>
          Clique em mim, {nome}</b>
        </button>
    </div>
  );
}

export default App;
