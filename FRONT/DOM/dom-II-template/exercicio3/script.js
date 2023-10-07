const paragrafo = document.getElementById("mensagem")

function checaCaps(event){
    /* if(event.key === "Shift"){
        paragrafo.innerHTML = 'SEGUROU O SHIFT'
    }else{
        paragrafo.innerHTML = ''
    } */

    //if ternario
    event.shiftKey ? paragrafo.innerHTML = 'SEGUROU O SHIFT' : paragrafo.innerHTML = ''
}

function checaCapsFree(event){
    if(event.key === "Shift"){
        paragrafo.innerHTML = ''
    }
}