import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input 
          value={props.inputName} onChange={props.onChangeInputName}
          type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
          value={props.inputProfilePic} onChange={props.onChangeInputProfilePic}
          type={"text"} />
        </StyledLabel>
        <SendButton onClick={props.checkLogin}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
