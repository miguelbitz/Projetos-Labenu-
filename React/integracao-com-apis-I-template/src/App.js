import React, { useState, useEffect } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from "axios";


function App() {
  const [usuarios, setUsuarios] = useState([])

  const getAllUsers = () => {
    const headers = {
      headers: {
        Authorization: 'miguel-alves-ozemela'
      }
    }
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', headers)
      .then((response) => {
        setUsuarios(response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <p>Para esta aula usaremos a <a href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro" target="_blank" rel="noreferrer">API Labenusers</a></p>
      <AddUsuario
        getAllUsers={getAllUsers}
      />
      <hr />
      {usuarios.map((usuario) => {
        return <Usuario 
        getAllUsers={getAllUsers} 
        key={usuario.id} 
        usuario={usuario} />
      })}
    </>
  )
}

export default App;
