import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from "../../hooks/useForm"

function MainPage() {

  const {form, onChange} = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: ""
  })

  const handleClick = (e) =>{
    e.preventDefault()

    console.log(form)
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          pattern=".{5,}"
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChange}
          type="number"
          pattern="[1-9][0-9]"
          min="2"
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChange}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChange}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
