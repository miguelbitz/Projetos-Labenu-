import React, { useEffect, useState } from "react";
import FormLocal from "./Components/FormLocal";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  // exemplo useEffect
  // const [contador, setContador] = useState(0);
  // const [contador2, setContador2] = useState(0);

  // console.log("Olares Ozemela!");

  // useEffect(() => {
  //   console.log("Estou dentro do useEffect");
  // }, [contador2]);

  return (
    <div className="App">
      <GlobalStyles />
      {/* exemplo useEffect */}
      {/* <h1>Aula de Local Storage</h1>
      <button onClick={() => setContador(contador + 1)}>Contador</button>
      {contador}
      <br />
      <button onClick={() => setContador2(contador2 + 1)}>Contador 2</button>
      {contador2} */}
      <FormLocal />
    </div>
  );
}

export default App;
