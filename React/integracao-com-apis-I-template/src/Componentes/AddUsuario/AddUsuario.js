import React, { useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const createUser = (name, email) => {
    const headers = {
      headers: {
        Authorization: 'miguel-alves-ozemela'
      }
    }
    const body = {
      name,
      email
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers)
      .then((response) => {
        console.log(response)
        setNome('')
        setEmail('')
        props.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={()=>{createUser(nome, email)}}>Enviar</button>
    </>
  );
}

export default AddUsuario;
