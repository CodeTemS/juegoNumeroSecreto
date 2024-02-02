let numeroSecreto = 0;
let numeroMaximo = 10;
let maximoIntentos = 3;
let numerosSorteados = [];
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

const limpiarCaja = () => document.querySelector("#numeroUsuario").value = "";

function validarIntento(){
    let numeroUsuario = parseInt(document.querySelector('#numeroUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('#textoPrincipal',`Excelente has acertado el numero secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if(numeroSecreto  > numeroUsuario){
        asignarTextoElemento('#textoPrincipal','El numero secreto es mayor, vuelve a intentarlo');
    }else if(numeroSecreto < numeroUsuario){
        asignarTextoElemento('#textoPrincipal','El numero secreto es menor, vuelve a intentarlo');
    }


    intentos++;
    limpiarCaja();
    document.querySelector('#numeroUsuario').focus();
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('#textoPrincipal', 'Se han sorteado todos los numeros  posibles');
    }else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {

    asignarTextoElemento('#textoPrincipal',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    document.querySelector('#numeroUsuario').focus();
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
       
}

function presionar(e){
    
        if (e.keyCode === 13) {
            e.preventDefault();
            validarIntento();
        }
    }

condicionesIniciales();