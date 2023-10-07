/* const nome = process.argv[2]
const sobrenome = process.argv[3]

console.log(`o primeiro nome eh ${nome} e o sobrenome eh ${sobrenome} `) */

// pratica guiada

import { countries } from "./countries.js";

const paisBuscado = process.argv[2]

if (!paisBuscado){
    console.log('falta passar o pais desejado')
}else{
    const resultadoBusca = countries.filter((country)=>{
        return country.name.toLowerCase().includes(paisBuscado.toLowerCase())
    })

    console.log(resultadoBusca)
}