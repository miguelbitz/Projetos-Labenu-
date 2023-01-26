let coxinhas = prompt('Deseja comer coxinhas:\nS - SIM\nN - NAO').toUpperCase()

let conta = 0

while(coxinhas === "S"){
    conta += 2.5
    coxinhas = prompt('Deseja comer mais coxinhas:\nS - SIM\nN - NAO').toUpperCase()
}

console.log(`Total da conta: ${conta}`)