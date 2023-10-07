import { useState } from 'react'
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {

  const [nome, setNome] = useState('Labenu')

  function btnMudaNome (){
    setNome('Miguel')
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome= {nome} btnMudaNome={btnMudaNome}/>
    </div>
  )
}
