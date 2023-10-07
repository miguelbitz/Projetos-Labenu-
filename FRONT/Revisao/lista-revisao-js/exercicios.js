// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanhoArray = array.length
    return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    array.reverse()
    return array
}



// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //usando sort() - metodo com variavel
    /*const compararNumeros = (a, b) =>{
        return a - b
    }
    array.sort(compararNumeros)
    return array */

    //usando sort() - metodo reduzido
    array.sort((a, b) => a - b)
    console.log(array)
    return array

    //usando sort() e map() - metodo mais comprido
    /*     const organizarNumeros = array.map(function (elem, i) {
            return { index: i, value: elem }
        })
    
        organizarNumeros.sort(function (a, b) {
            return +(a.value > b.value) || +(a.value === b.value) - 1
        })
    
        const resultado = organizarNumeros.map(function (elem) {
            return array[elem.index]
    
        })
        return resultado */
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numeroPares = array.filter(filtrar => filtrar % 2 === 0)

    return numeroPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const multiplicado = array[i] ** 2
            novoArray.push(multiplicado)
        }
    }

    return novoArray

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    //usando IF

    /* for (i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            i++
        } else {
            return array[i]
        }
    } */

    //usando funcao de array reduce()

    /* let maiorNumero = array.reduce(function(a, b){
        return Math.max(a, b)
    }, -Infinity)

    return maiorNumero */

    //usando spread

    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 < num2) {
        const maiorNumero = num2
        const maiorDivisivelPorMenor = num2 % num1 === 0
        const diferenca = num2 - num1

        return {
            maiorNumero: maiorNumero,
            maiorDivisivelPorMenor: maiorDivisivelPorMenor,
            diferenca: diferenca
        }
    } else {
        const maiorNumero = num1
        const maiorDivisivelPorMenor = num1 % num2 === 0
        const diferenca = num1 - num2

        return {
            maiorNumero: maiorNumero,
            maiorDivisivelPorMenor: maiorDivisivelPorMenor,
            diferenca: diferenca
        }
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPares = []
    for (i = 0; i < n * 2; i++) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    //GAMBIARRA
    /* const novoArray = []
    if (array.length <= 2) {
        let menor = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i]
            }
        }

        novoArray.push(menor)
        
        let maior = array[0]

        for (let i = 0; i < array.length; i++) {
            if (array[i] > maior) {
                maior = array[i]
            }
        }
        novoArray.push(maior)

        return novoArray

    } else {
        const novoArray = []
        let maior = array[0]
        let index = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maior) {
                maior = array[i]
                index = i
            }
        }
        array.splice(index, 1)

        let segundoMaior = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] > segundoMaior) {
                segundoMaior = array[i]
            }
        }
        let menor = array[0]
        let indexMenor = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i]
                indexMenor = i
            }
        }
        array.splice(indexMenor, 1)

        let segundoMenor = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] < segundoMenor) {
                segundoMenor = array[i]
            }
        }

        novoArray.push(segundoMaior)
        novoArray.push(segundoMenor)

        return novoArray
    } */

    const novoArray = []
    array.sort((a, b) => a - b)

    for (i = 0; i < array.length; i++) {
        if (i = array.length - 1) {
            novoArray.push(array[i - 1])
            novoArray.push(array[1])
        }
    }
    return novoArray
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atores = filme.atores.join(', ')
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }

    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const novaPessoa = []
    for (i = 0; i < pessoas.length; i++)
        if ((pessoas[i].altura >= 1.5) && (pessoas[i].idade > 14 && pessoas[i].idade < 60)) {
            novaPessoa.push(pessoas[i])
        }
    return novaPessoa
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const novaPessoa = []
    for (i = 0; i < pessoas.length; i++)
        if (!(pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60)) {
            novaPessoa.push(pessoas[i])
        }
    return novaPessoa
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (i = 0; i < contas.length; i++) {
        let comprasTotal = contas[i].compras.reduce((soma, i) => soma + i)
        let saldoAtual = contas[i].saldoTotal - comprasTotal
        contas[i].saldoTotal = saldoAtual
        contas[i].compras = []
        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    })

    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {


    let datas = []

    for(i=0;i<consultas.length;i++){
      datas.push({
        nome: consultas[i].nome,
        dataDaConsulta: consultas[i].dataDaConsulta
      })
    }
  
    resultado = datas.sort(function (a, b) {
      const da = a.dataDaConsulta
      const db = b.dataDaConsulta
  
      a = da[6] + da[7] + da[8] + da[9] + da[3] + da[4] + da[0] + da[1]
      b = db[6] + db[7] + db[8] + db[9] + db[3] + db[4] + db[0] + db[1]
  
      console.log(a)
      if (a > b) return 1
      if (a < b) return -1
      if (a === b) return 0
  
  
    })
  
    return resultado
  
  }
