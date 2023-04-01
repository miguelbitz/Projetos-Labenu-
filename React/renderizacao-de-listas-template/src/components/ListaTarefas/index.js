import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Estudar", "Trabalhar", "Jogar"])

  const tarefas = lista.map((tarefa, indice) => {
    return (
      <Tarefa key={indice}>
        <p>{tarefa}</p>
        <RemoveButton onClick={()=>removerTarefa(tarefa)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    )
  })


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionarTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")
  }


  const removerTarefa = (tarefa) => {
    const filtrarLista = lista.filter((item)=> item !== tarefa)
    setLista(filtrarLista)

  };

  
  

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionarTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {tarefas}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
