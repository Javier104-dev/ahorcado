function DibujarBaseAhorcado(){
    tablero.lineWidth = 8; //ancho de la linea
    tablero.lineCap = "round"; //los extremos de la linea son redondeados
    tablero.lineJoin = "round"; //las uniones con otra linea se hacen redondeadas 
    tablero.fillStyle = "rgba(180,155,125,0)"; //color del relleno del talbero
    tablero.strokeStyle = "#DB146C"; //color de la linea
    
    tablero.fillRect(0,0,1200,860); //define donde usar el area del relleno blanco que elegimos antes
    tablero.beginPath(); //le indica que moveremos a un lugar el pincel
    tablero.moveTo(500, 500); //las coordenadas donde apoyamos y comenzamos el pincel
    tablero.lineTo(650, 500); //coordenadas donde queremos que vaya el pincel
    tablero.stroke(); //dibuja la linea que definimos con las coordenadas anteriores
    tablero.closePath(); //une las puntas que se hicieron con moveTo lineTo, ejemplo cerraria L y la convertiria en rectangulo
}

function dibujarGuiones(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round"; 
    tablero.fillStyle = "#F3F5F6";  
    tablero.strokeStyle = "#DB146C";

    let anchura = 700/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.beginPath();
        tablero.moveTo(300 + (anchura * i), 640);
        tablero.lineTo(350 + (anchura * i), 640);
        tablero.stroke();
        tablero.closePath();
    }
}

function dibujarTroncoPrincipal(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round"; 
    tablero.lineJoin = "round"; 
    tablero.strokeStyle = "#DB146C"; 

    tablero.beginPath();
    tablero.moveTo(525, 500);
    tablero.lineTo(525, 200);
    tablero.stroke();
    tablero.closePath();
}

function dibujarTronco2(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round"; 
    tablero.lineJoin = "round"; 
    tablero.strokeStyle = "#DB146C"; 

    tablero.beginPath();
    tablero.moveTo(525, 200);
    tablero.lineTo(600, 200);
    tablero.stroke();
    tablero.closePath();
}

function dibujarTronco3(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round"; 
    tablero.lineJoin = "round"; 
    tablero.strokeStyle = "#DB146C"; 

    tablero.beginPath();
    tablero.moveTo(600, 200);
    tablero.lineTo(600, 250);
    tablero.stroke();
    tablero.closePath();
}

function dibujarCabeza(){
    tablero.lineWidth = 5;
    tablero.strokeStyle = "#DB146C"; 
    tablero.beginPath();
    tablero.arc(600, 285, 30, 0, 2 * Math.PI);
    tablero.stroke();
}

function dibujaTorso(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#DB146C";

    tablero.beginPath();
    tablero.moveTo(600, 315);
    tablero.lineTo(600, 400);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoIz(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#DB146C";

    tablero.beginPath();
    tablero.moveTo(600, 335);
    tablero.lineTo(580, 395);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoDerech(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#DB146C";

    tablero.beginPath();
    tablero.moveTo(600, 335);
    tablero.lineTo(620, 395);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaIz(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#DB146C";

    tablero.beginPath();
    tablero.moveTo(600, 400);
    tablero.lineTo(580, 460);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaDerch(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#DB146C";

    tablero.beginPath();
    tablero.moveTo(600, 400);
    tablero.lineTo(620, 460);
    tablero.stroke();
    tablero.closePath();
}


function mensajeVictoria(){
    tablero.font = "bold 45px 'Montserrat', sans-serif";
    tablero.fillStyle = "#800000";
    tablero.textAlign = "center";

    tablero.fillText("Felicidades", 600, 350);
    tablero.fillText("Adivinaste la palabra!", 600, 400);
}

function mensajeDerrota(){
    tablero.font = "bold 45px 'Montserrat', sans-serif";
    tablero.fillStyle = "red";
    tablero.textAlign = "center";

    tablero.fillText("Fin de juego, lo siento perdiste!", 600, 350);
    tablero.fillText(`La palabra secreta era ${palabraSecreta}`, 600, 400);
}
