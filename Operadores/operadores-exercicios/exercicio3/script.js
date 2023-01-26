//Parte 1

let op1 = 5 > 20 && 5 < 2
console.log(op1)

op1 = 5 === 5 || 5 === "5"
console.log(op1)

op1 = !(20 > 50)
console.log(op1)

op1 = !(20 > 50 || 50 > 60)
console.log(op1)

//Parte 2

let filhos = 2
let auxCreche = (45.50 * filhos)
let salario = 2000
let porcComissao = 0.1
let inss = 0.05
let comissaoJan = 5784.50 * porcComissao
let comissaoFev = 3418.41 * porcComissao
let comissaoMar = 4124.10 * porcComissao
let comissaoAbr = 1874.00 * porcComissao
let comissaoMaio = 7000.00 * porcComissao
let comissaoJun = 9450.00 * porcComissao
 
let calcSalarioAux = salario + auxCreche

//janeiro
let calcDescInssJan = (salario + comissaoJan) * inss
let salarioTotalJan = calcSalarioAux  + comissaoJan - calcDescInssJan

console.log("Salario Total Janeiro:", salarioTotalJan )

//fevereiro
let calcDescInssFev = (salario + comissaoFev) * inss
let salarioTotalFev = calcSalarioAux  + comissaoFev- calcDescInssFev

console.log("Salario Total Fevereiro:", salarioTotalFev)

//março
let calcDescInssMar = (salario + comissaoMar) * inss
let salarioTotalMar = calcSalarioAux  + comissaoMar - calcDescInssMar

console.log("Salario Total Março:", salarioTotalMar)

//abril
let calcDescInssAbr = (salario + comissaoAbr) * inss
let salarioTotalAbr = calcSalarioAux  + comissaoAbr - calcDescInssAbr

console.log("Salario Total Abril:", salarioTotalAbr)

//maio
let calcDescInssMaio = (salario + comissaoMaio) * inss
let salarioTotalMaio = calcSalarioAux + comissaoMaio - calcDescInssMaio

console.log("Salario Total Maio:", salarioTotalMaio)

//junho
let calcDescInssJun = (salario + comissaoJun) * inss
let salarioTotalJun = calcSalarioAux  + comissaoJun - calcDescInssJun

console.log("Salario Total Junho:", salarioTotalJun)

//media salario 6 meses
let mediaSalarioSeisMeses = (salarioTotalJan + salarioTotalFev + salarioTotalMar + salarioTotalAbr + salarioTotalMaio + salarioTotalJun) / 6

console.log("Media Salário 6 meses:",mediaSalarioSeisMeses)







