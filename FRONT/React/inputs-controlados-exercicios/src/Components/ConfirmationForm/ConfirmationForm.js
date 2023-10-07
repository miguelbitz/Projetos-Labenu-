import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {

  return (
    <Form>
      <input placeholder="Data de nascimento" value={props.dataNascimento} onChange={props.onChangeDataNascimento}/>
      <input placeholder="Telefone" value={props.telefone} onChange={props.onChangeTelefone}/>
      <input placeholder="Cidade" value={props.cidade} onChange={props.onChangeCidade}/>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;