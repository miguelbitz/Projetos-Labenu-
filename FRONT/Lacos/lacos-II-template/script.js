/*
//descontar compras do saldo total
const contas=[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

for (let c of contas) {
    let valorParaDebitar = 0;

    for (let item of c.compras) {
      valorParaDebitar += item;
    }

    c.saldoTotal -= valorParaDebitar;
    c.compras = [];
  }

  console.log(contas) 
 */

/* 
  //selecionando clientes que nao compraram nada na loja
  const clientes =[
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
  ]
  
  
  const clienteSemCompras = []
  
    for(let i = 0; i < clientes.length; i++){
      if(clientes[i].compras.length === 0){
          clienteSemCompras.push(clientes[i])
      }
    }
  
    //console.log(clienteSemCompras)
  
  
  //acessando array dentro do array com for
 
      for (let i = 0; i< clientes.length;i++){
        for(let j = 0; j < clientes[i].compras.length; j++)
          console.log(clientes[i].compras[j])
    } 

   
  //acessando array dentro do array com for...of
    for(const cliente of clientes){
      for(const compra of cliente.compras)
        console.log(compra)
    }
*/


//-----------------------------------AULA----------------------------------
/* 

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for(let i = 0; i< filmes.length; i++){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  for(let j = 0; j < filmes[i].elenco.length; j++){
    console.log(`Tem no elenco: ${filmes[i].elenco}`)
    }
  }


for(let i in filmes){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  for(let elenco of filmes[i].elenco){
    console.log(`Tem no elenco: ${elenco}`)
  }
}
 */




//---------------------------------------------------------------
/* 
const resultado1 = [2, 4, 6, 8]
const resultado2 = [1, 3, 5, 7]
const resultado3 = [0, 8, 10, 12]
const resultado4 = [9, 11, 13, 15]

const megaSena = [resultado1, resultado2, resultado3, resultado4]
 */
//lacos + lacos e lacos + condicoes
/* if(megaSena.length === 4){
  for(let i = 0; i < megaSena.length; i++){
    for(let j = 0; j < megaSena[i].length; j++){
      console.log(`Sorteio ${i + 1}: ${megaSena[i]}`)
    }
  }
}else{
  console.log('eh necessario alterar o numero de itens do array')
} */


//usando for....in
/* 
for(let prop in megaSena){
  console.log(prop) // RETORNA AS PROPRIEDADES (INDICE) DO ARRAY
}
 */

//usando for....of
/* 
for(let j of megaSena){
  console.log(j) //RETORNA OS VALORES DO ARRAY
}
 */

//usando for..in + for..of + condicoes
/* 
if(megaSena.length === 4){
    for(let i in megaSena){
      for(let j of megaSena){
        console.log(`Sorteio ${Number(i) + 1}: ${megaSena[i]}`)
      }
    }
  }else{
    console.log('eh necessario alterar o numero de itens do array')
  }
  */


// Vamos criar um jogo de adivinhar
// ao iniciar a rodada o jogo deve perguntar se o usuário deseja iniciar uma rodada
// o jogo deve conter um numero e o usuário deve adivinhar esse número, 
//se o número do usuário for menor o jogo deve perguntar se desejar somar 5
// se for maior o jogo deve perguntar se desejar subtrair 2
// se o usuário não acertar o número, o sistema deve perguntar se ele deseja continuar
// quando o usuário acertar informar que acertou e sair do jogo

  const novaRodada = confirm('Deseja iniciar uma nova rodada?')



  if(novaRodada){

    let sair = 'c'
    const numeroSorteado = 50
    let numeroDaSorte = Number(prompt('Informe um numero'))

    while(sair !== 's'){

      if(numeroDaSorte < numeroSorteado){
       const maisCinco = confirm('Seu numero eh menor, deseja somar 5 ?')

       if(maisCinco){
        numeroDaSorte += 5
        console.log(`Seu numero eh:`, numeroDaSorte)
       }

      }else if(numeroDaSorte > numeroSorteado){
        const menosDois = confirm('Seu numero eh maior, deseja subtrair 2 ?')

        if(menosDois){
        numeroDaSorte -= 2
        console.log(`Seu numero eh: ${numeroDaSorte}`)
        }
      }

      if(numeroDaSorte !== numeroSorteado){
        console.log('Infelizmente voce nao acertou. Tente Novamente')
        sair = prompt(`Seu numero eh ${numeroDaSorte}. Digite S para sair e C para continuar`).toLowerCase()
      }else{
        console.log('PARABENS VOCE ACERTOU\nFim do Jogo')
        sair = 's'
      }

      
    }
  }else{
    console.log('Jogo encerrado!')
  }


//numero randomico
/* 
function numeroRandom(a) {
  return Math.floor(Math.random() * a) + 1;
}

let valor = numeroRandom(10) //entre parenteses voce coloca a quantidade de numeros

console.log(valor)
 */