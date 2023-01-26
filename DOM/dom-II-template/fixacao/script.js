const input = document.getElementById('meu-input')

const lista = document.getElementById("lista")

function insereItem(event){
    let adicionarItem = document.createElement('li')

    adicionarItem.innerHTML = input.value

    lista.insertAdjacentElement('beforeend', adicionarItem)

    document.getElementById('meu-input').value = ""
}