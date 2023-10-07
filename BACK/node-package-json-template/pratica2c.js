import { countries } from "./countries.js";

const primeiraLetraMaiuscula = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const nomePais = process.argv[2];
const codigoPais = process.argv[3].toUpperCase();

const paisMaiusculo = primeiraLetraMaiuscula(nomePais)

if (!nomePais) {
  console.log('Falta passar o país desejado.');
} else {
  const paisExistente = countries.find(
    (country) => country.name.toLowerCase() === nomePais.toLowerCase()
  );

  const codigoExistente = countries.find(
    (country) => country.code === codigoPais.toUpperCase()
  );

  if (paisExistente && codigoExistente) {
    console.log("O país e o código já existem.");
  } else if (paisExistente) {
    console.log("O país já existe.");
  } else if (codigoExistente) {
    console.log("O código do país já existe.");
  } else {
    const novoPais = {
      name: paisMaiusculo,
      code: codigoPais,
    };

    countries.push(novoPais);
    countries.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    console.log(novoPais);
    console.log(countries.includes(novoPais));
    console.log(countries);
  }
}
