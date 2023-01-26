/* # Exercício 1

Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
saída esperada:

`{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

2. A segunda deve retornar os valores do objeto como texto corrido.

3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2
 */

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
/* const mudarLetrasMaiusculas = (objeto) => {
    const novoObjeto = {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        usarname: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
    
    return novoObjeto
} */

//usando for in
const mudarLetrasMaiusculas = (objeto) => {

    const novoObjeto = { ...objeto }

    for (let index in objeto) {
        novoObjeto[index] = novoObjeto[index].toUpperCase()
    }

    return novoObjeto
}

//console.log(mudarLetrasMaiusculas(objeto))

//2
const mudarParaTextoCrrido = (objeto) => {
    return `Oi, meu nome eh ${objeto.nome}, minha profissao eh ${objeto.profissao}, meu username eh${objeto.username} e minha senha eh ${objeto.senha}`
}

//console.log(mudarParaTextoCrrido(objeto))

//3

const imprimir = (funcao, objeto) => {
    console.log(funcao(objeto))
}

imprimir(mudarLetrasMaiusculas, objeto)
imprimir(mudarParaTextoCrrido, objeto)