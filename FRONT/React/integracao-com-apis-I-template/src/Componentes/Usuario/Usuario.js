import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const getUsersById = () =>{
    const headers = {
      headers: {
        Authorization: 'miguel-alves-ozemela'
      }
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.usuario.id}`, headers)

    .then((response)=>{
      setNome(response.data.name)
      setEmail(response.data.email)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }

  const editUser = (name, email) => {
    const headers = {
      headers: {
        Authorization: 'miguel-alves-ozemela'
      }
    }
    const body = {
      name,
      email
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.usuario.id}`, body, headers)
      .then((response) => {
        console.log(response)
        props.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
  
  const deleteUser = () => {
    const headers = {
      headers: {
        Authorization: 'miguel-alves-ozemela'
      }
    }
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.usuario.id}`, headers)
      .then((response) => {
        props.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(()=>{
    getUsersById()
  }, [])

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome: {nome}</p>
          <p>E-mail: {email}</p>
          <input value={nome} onChange={(e)=>{setNome(e.target.value)}} />
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <button onClick={()=>{editUser(nome, email)}}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>E-mail:</strong> {email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={deleteUser}>Excluir</button>
    </User>
  );
}

export default Usuario;
