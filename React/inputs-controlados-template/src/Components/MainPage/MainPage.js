import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const mudarNome = (event) =>{
    setNome(event.target.value)
  }

  const mudarIdade = (event) =>{
    setIdade(event.target.value)
  }

  const mudarEmail = (event) =>{
    setEmail(event.target.value)
  }

  const btnEnviar = () =>{
    console.log(nome)
    console.log(idade)
    console.log(email)
    console.log(senha)

    setNome('')
    setIdade('')
    setEmail('')
    setSenha('')
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={mudarNome}/>
        </label>
        <label>
          Idade:
          <Input type={'email'} value={idade} onChange={mudarIdade}/>
        </label>
        <label>
          Email:
          <Input value={email} onChange={mudarEmail}/>
        </label> 
        <label>
          Senha:
          <Input type={'password'} value={senha} onChange={(event) => setSenha(event.target.value)}/>
        </label> 
        <button onClick={btnEnviar}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
