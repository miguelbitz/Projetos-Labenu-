const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(idade) + 7

if (!nome){
    console.log('error')
}else{
    console.log(`Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${novaIdade}`)
}