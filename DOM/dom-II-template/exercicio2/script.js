let input = document.getElementById("password")

const escondeSenha = () =>{
    event.preventDefault()
    input.setAttribute("type", "password")
}



//usando querySelector

//selecionando classe para alterar
//const changeStyle = document.querySelector(".light")

//removendo
//changeStyle.classList.remove("light")

//adicionando nova classe
//changeStyle.classList.add("dark")


//usando getElementByTagName

//selecionando classe para alterar
const form = document.getElementsByTagName('form')

console.log(form)

form[0].setAttribute('class', 'dark')

