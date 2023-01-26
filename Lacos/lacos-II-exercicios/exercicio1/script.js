const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

/* for(i in array){
    console.log(`Jogador ${Number(i) + 1}: ${array[i]}`)
    for(const jogador of array){
        console.log(`Jogador ${Number(i) + 1}: ${jogador[i]} gols`)
    }
} */

/* if(array.length === 5){
    for(let i = 0; i <array.length; i++){
        for(let j = 0; j < array[i].length; j++)
        console.log(`Jogador ${i + 1}: ${array[i]}`)
    }
} */
/* 
for(i=0;i<array.length;i++){
    console.log(`Jogador ${i+1}: ${array[i]}`);
}
 */
for(let i in array){
    console.log(`Jogador ${Number(i) + 1}: ${array[i]}`)  
}