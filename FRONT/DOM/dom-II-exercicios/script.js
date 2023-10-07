/* let contador = 0

function adicionaItem(event){
    const novoItem = document.createElement('p')

    //const texto = document.createTextNode(`Item 0`)

    //novoItem.appendChild(texto)

    novoItem.innerHTML = `Item ${contador += 1}`

    container.insertAdjacentElement('beforeend', novoItem)

} */

const container = document.getElementById('container')


function adicionaItem(event){
    const novoItem = document.createElement('article')

    novoItem.classList.add("item")

    novoItem.onclick = removeItem

    console.log(novoItem)

    container.insertAdjacentElement('beforeend', novoItem)

}

function removeItem(event){
    const removedor = event.target

    removedor.remove()
}