console.log("teste 1")

const num = Number(prompt('Digite um numero:'))
/* 
if(num % 2 !== 0){
    if(num % 3 == 0){
        console.log(`o numero ${num} eh divisivel por 3`)
    }else{
        console.log(`o numero nao eh divisivel nem por 2 e nem por 3`)
    }
}else{
    console.log(`o numero eh divisivel por 2`)
}
 */


if(num % 2 == 0 && num % 3 == 0){
    console.log(`numero divisivel por 2 e por 3`)
}else if(num % 3 == 0){
    console.log(`numero divisivel por 3`)
}else if(num % 2 == 0){
    console.log(`numero divisivel por 2`)
}else{
    console.log(`numero nao eh divisivel nem por 2 e nem por 3`)
}
