import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input value={props.newPost.title} onChange={props.onChangeInputTitle} id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input value={props.newPost.image} onChange={props.onChangeInputImage} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input value={props.newPost.description} onChange={props.onChangeInputDescription} id="descricao" />
        </StyledLabel>
        <SendButton onClick={props.post}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
