let palabras = ["autos", "libros","computadora", "alura","html", "one", "css", "oracle"];
let tablero = document.querySelector("#horca").getContext("2d");
let palabraSecreta = "";
let palabraSecretaSeparada = "";
let letraEscrita = "";
let letrasAcertadas = [];
let intentosFallidos = 0;

document.querySelector("#iniciar-juego").onclick = function(){
    ocultarFrente();
    escogerPalabraSecreta();
    DibujarBaseAhorcado();
    dibujarGuiones();
    console.log(palabras);
    console.log(palabraSecreta);

    letraEscrita = document.querySelector("#teclado").value;
    

    document.onkeydown = function letrasIngresadas(e){

        letraEscrita = e.key.toUpperCase();

        if(/^[A-Z]$/.test(letraEscrita)){

        dibujarLetrasCorrectas();
        dibujarPersona();
        console.log(letraEscrita)
        }
    }
}

document.querySelector("#boton-agregar-palabra").onclick = function(){
    agregarPalabra()
}

document.querySelector("#boton-jugar-nuevamente").onclick = function(){
    location.reload();
}

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    palabraSecreta = palabra;
    palabraSecretaSeparada = palabra.split("");
}

function ocultarFrente(){
    document.querySelector("#frente-pagina").style.display = "none";
}

function dibujarLetrasCorrectas(){
    tablero.font = "bold 45px 'Montserrat', sans-serif";
    tablero.fillStyle = "black";
    tablero.textAlign = "center";

    let anchura = 700/palabraSecretaSeparada.length;
    
    for (let i = 0; i <palabraSecretaSeparada.length; i++){
        
        if (letraEscrita == palabraSecretaSeparada[i] ){
            tablero.fillText(letraEscrita, 325 + (anchura * i), 630);
            letrasAcertadas.push(letraEscrita);
        }
    }
    victoria();
}

function dibujarPersona(){

    if(!palabraSecretaSeparada.includes(letraEscrita) && (!letraEscrita == "")){

        letrasErradas();
        dibujarTroncoPrincipal();
 
            if(intentosFallidos == 2 ){
                dibujarTronco2();
            }

            if(intentosFallidos == 3){
                dibujarTronco3();
            }
            
            if(intentosFallidos == 4){
                dibujarCabeza();
            }

            if(intentosFallidos == 5){
                dibujaTorso();
            }

            if(intentosFallidos == 6){
                dibujarBrazoIz()
            }

            if(intentosFallidos == 7){
                dibujarBrazoDerech()
            }

            if(intentosFallidos == 8){
                dibujarPiernaIz();
            }

            if(intentosFallidos == 9){
                dibujarPiernaDerch();
                mensajeDerrota();
                document.querySelector("#boton-jugar-nuevamente").style.display="block"
            }   
    }
}

function letrasErradas(){

    tablero.font = "bold 30px 'Montserrat', sans-serif";
    tablero.fillStyle = "black";
    tablero.fillText(letraEscrita, 325 + (30 * intentosFallidos) , 550);
    intentosFallidos++;   
}


function agregarPalabra(){
    let agregaPalabra = document.querySelector("#campo-agregar-palabra");
    if(agregaPalabra.value == ""){
        agregaPalabra.placeholder = "No se agregaron palabras";
    }else{
        palabras.push(agregaPalabra.value);
        agregaPalabra.value = "";
        agregaPalabra.placeholder = "Palabra agregada";
    }
}

function victoria(){
    const arraySinRepetidos = [...new Set(palabraSecretaSeparada)];
    const arraySinRepetidos2 = [...new Set(letrasAcertadas)];

    if(arraySinRepetidos.length == arraySinRepetidos2.length){
        mensajeVictoria();
        document.querySelector("#boton-jugar-nuevamente").style.display="block";
    }
}
