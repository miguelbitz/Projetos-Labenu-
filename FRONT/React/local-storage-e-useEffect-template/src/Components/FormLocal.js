import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);
  const [contador, setContador] = useState(0)

  //guardar coisas no localStorage => localStorage.setItem("chave", valor)
  const guardarNome = (nomeRecebido) => {
    localStorage.setItem("nome", nomeRecebido);
    setNome("");
    alert("Nome guardado com sucesso!");
  };

  //pegar coisas no localStorage => localStorage.getItem("chave")
  const pegarNome = () => {
    const nomeDoLocalStorage = localStorage.getItem("nome");
    alert(nomeDoLocalStorage);
  };

  //JSON.stringify => para transformar objetos ou array em string
  const guardarTarefas = () => {
    const listaTarefasString = JSON.stringify(listaTarefas);
    localStorage.setItem("tarefas", listaTarefasString);
    setTarefa("");
  };

  //JSON.parse => transforma no valor original
  const pegarTarefas = () => {
    const tarefasLocalStorage = localStorage.getItem("tarefas");
    if (tarefasLocalStorage !== null) {
      const listaTarefasArray = JSON.parse(tarefasLocalStorage);
      setListaTarefas(listaTarefasArray);
    }
  };

  //quando atualizar a pagina, a lista mostra automaticamente
  useEffect(() => {pegarTarefas()}, [])

  useEffect(() => {
    document.title = contador
    localStorage.setItem("contador", contador)
  }, [contador])

  return (
    <Form>
      <label htmlFor="nome">
        nome:
        <input
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <div>
        <button onClick={() => guardarNome(nome)}>Salvar dados</button>
        <button onClick={pegarNome}>Pegar dados</button>
      </div>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
      </label>
      <button onClick={() => setListaTarefas([...listaTarefas, tarefa])}>Salvar tarefa
      </button>
      <ol>
        {listaTarefas.map((afazer, indice) => {
          return <li key={indice}>{afazer}</li>;
        })}
      </ol>
      <div>
        <button onClick={guardarTarefas}>Salvar no localStorage</button>
        <button onClick={pegarTarefas}>Resgatar tarefas</button>
        <br/>
        <button onClick={()=>setContador(contador + 1)}>+</button>
        <p>{contador}</p>
      </div>
    </Form>
  );
}
