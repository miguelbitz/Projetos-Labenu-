import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.inputImage} onChange={props.onChangeInputImage} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Titulo:
          <Input id="titulo" value={props.inputTitulo} onChange={props.onChangeInputTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.inputDescription} onChange={props.onChangeInputDescription} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro