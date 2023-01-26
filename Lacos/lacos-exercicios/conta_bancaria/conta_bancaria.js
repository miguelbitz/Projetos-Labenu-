//Você abriu conta-poupança Labebank e quer guardar valores nessa conta.

//Utilize o While para fazer o programa abaixo!

//Crie uma variavel saldo com o valor de R$ 10, 00 e mostre no console
//Pergunte ao usuário quanto ele(a) quer depositar na conta.
// Mostre no console o valor depositado
// Mostre no console o valor a soma total - saldo + deposito

//Pergunte ao usuário se ele quer depositar mais algum valor, se sim, digitar o valor, se não, clique em cancelar no próprio prompt
//mostre fora do escopo o novo extrado com o saldo total

let saldo = 10
console.log("Saldo", + saldo)

let deposito = Number(prompt('Quanto você deseja depositar?'))

while(deposito){      
    saldo = saldo + deposito
    console.log('depositado R$', + deposito)
    console.log('Saldo Total', + saldo)
    deposito = Number(prompt('Quer depositar mais'))
    }
   
    

console.log("Extrato Labebank R$", saldo)

