let paragrafo = document.getElementById('paragrafo')

console.log(paragrafo.innerHTML)

const exibirTexto = () =>{
    console.log(document.getElementById('texto').value)

    document.getElementById('texto').value = ""
}

const alterarParagrafo = () =>{
    console.log(paragrafo.innerHTML = document.getElementById('texto').value)
}