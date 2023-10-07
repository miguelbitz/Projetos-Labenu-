import { countries } from "./countries.js";

const paisBuscado = process.argv[2]

if (!paisBuscado){
    console.log('falta passar o pais desejado')
}else{
    const resultadoBusca = countries.filter((country)=>{
        return country.name.toLowerCase()[0].includes(paisBuscado.toLowerCase())
    })

    console.log(resultadoBusca)
}