const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

function insert( valor ){
    resultado.innerHTML += valor;
}


function clean() {
    resultado.innerHTML = ' ';
}





function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}// JavaScript Document