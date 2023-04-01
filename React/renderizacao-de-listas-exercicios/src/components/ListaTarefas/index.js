import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaExcluida,
  ResetarButton,
  Imagem
} from "./styled";
import bin from "../../assets/bin.png";
import restart from "../../assets/restart.png"
import check from "../../assets/check.jpg"

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaExcluida, setListaExcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa !== "") {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    } else {
      alert("Campo vazio, insira uma tarefa.")
    }

  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);

    setListaExcluida([...listaExcluida, tarefa])
  };

  const resetarTarefa = (tarefa) => {
    const listaExluidaFiltrada = listaExcluida.filter((item) => item !== tarefa)
    setListaExcluida(listaExluidaFiltrada)

    setLista([...lista, tarefa])
  }

  const apertarEnter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={apertarEnter}
        />
        <AddTaskButton
          onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton
                  onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <ul>
          {listaExcluida.map((tarefa, index) => {
            return (
              <TarefaExcluida key={index}>
                <p>{tarefa}</p>
                <ResetarButton
                  onClick={() => resetarTarefa(tarefa)}>
                  <Imagem src={restart} alt="" width="16px" />
                </ResetarButton>
              </TarefaExcluida>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
