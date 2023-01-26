//pegar a lista
const lista = document.getElementById("lista")

//criar elemento
const primeiroItem = document.createElement("li")

//criar texto
const texto0 = document.createTextNode("Item 0")

//colocar texto no li
primeiroItem.appendChild(texto0)

//mostrar na tela
lista.insertAdjacentElement('afterbegin',  primeiroItem)


const ultimoItem = document.createElement("li")

const texto5 = document.createTextNode("Item 5")

ultimoItem.appendChild(texto5)

lista.insertAdjacentElement('beforeend',  ultimoItem)

//-----------------
//item 0 - outra forma de fazer usando innerHTML

/* const lista = document.getElementById("lista")

const primeiroItem = document.createElement("li")

primeiroItem.innerHTML = "Item 0"

lista.insertAdjacentElement('afterbegin', primeiroItem)


const ultimoItem = document.createElement("li")

ultimoItem.innerHTML = "Item 5"

lista.insertAdjacentElement('beforeend', ultimoItem) */