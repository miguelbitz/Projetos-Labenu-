const arrayPaises = ["Russia", "Canada", "China", "EUA", "Brasil"]

/* for(const ranking of arrayPaises){
    console.log(`${ranking}`)
} */
/* 
for(index = 0; index < arrayPaises.length; index ++){
    console.log(`${index + 1} - ${arrayPaises[index]}`)
}
 */

let posicao = 1

for (lista of maioresPaises){
    console.log(`${posicao} - ${lista}`)
    posicao++
}

// Código com o método entries()
// for([index, value] of maioresPaises.entries()) {
//     console.log(`${index + 1} - ${value}`)
// }