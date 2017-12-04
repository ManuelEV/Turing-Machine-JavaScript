window.onload = function () {
    var ctx = document.getElementById("panel").getContext("2d");

    var current = new Image;
    current.src = "imagenes/a_igual_b/a=b.png";

    current.onload = function () {
        ctx.drawImage(current, 0, 0)//,state0.width/1.5,state0.height/1.5);
        ctx.stroke();

    }

    //Se obtienen todos los objetos del html que se ocuparán
    objCinta = document.getElementById("cinta");
    objPalabra = document.getElementById("word");
    objComp = document.getElementById("comp");
    objCurrEstado = document.getElementById("currEstado");
    objCurrLetra = document.getElementById("currLetra");
    objAccept = document.getElementById("accept");
    objPosCinta = document.getElementById("posi");

}

//funcion que se ejecuta al momento de ingresar la palabra (boton ingresar)
function mostrar_() {
    ////---------------------------------------Limpiar dibujo al iniciar transicion   
    var mt = new Image;
    mt.src = "imagenes/a_igual_b/a=b.png";
    var canvas = document.getElementById("panel");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mt, 0, 0);
    ////---------------------------------------
    //Se inicializan los valores de acuerdo a lo ingresado
    palabra = objPalabra.value;

    var auxCinta = "######" + palabra + "######";
    var cinta = "";
    //Se inicializa la cinta marcando con rojo el caracter actual
    for (var i = 0; i < auxCinta.length; i++) {
        if (i == 6) {
            cinta += '<span class="clr2">' + auxCinta[i] + '</span>';
        } else {
            cinta += '<span class="clr1">' + auxCinta[i] + '</span>';
        }
    }
    //Se inicializan todos los valores
    objCinta.innerHTML = cinta;
    objCinta.style.fontSize = 40;
    var pal = objPalabra.value;
    var cLet = "" + pal.charAt(0);
    objCurrLetra.innerHTML = cLet;
    objComp.innerHTML = "0";
    objCurrEstado.innerHTML = "q0";
    objPosCinta.innerHTML = "6";

    ////---------------------------------------Dibujo estado inicial
    var radius = 24;
    ctx.beginPath();
    ctx.arc(70, 110, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = "bold " + radius + "px serif";
    ctx.fillText(cLet, 70 - 8, 110 + 8);
    ctx.stroke();
    ////---------------------------------------
}


//Boton "ejecutar paso a paso"
function avanzar() {

    //Se capturan los datos desde el HTML

    var palabra_ = objPalabra.value;

    var _cinta_ = objCinta.textContent;

    var cont_ = Number(objComp.textContent);

    var p = objCurrEstado.textContent;

    var proxEstado_ = p.charAt(1);

    var letraActual_ = objCurrLetra.textContent;

    var posCinta_ = parseInt(objPosCinta.textContent);

    //Se ejecuta la transición que corresponda
    transicion(cont_, palabra_, _cinta_, proxEstado_, letraActual_, posCinta_);

}

function transicion(cont, palabra, _cinta, proxEstado, letraActual, posCinta) {

    objAccept.innerHTML = "";

    var mt = new Image;
    mt.src = "imagenes/a_igual_b/a=b.png";

    var canvas = document.getElementById("panel");
    var ctx = canvas.getContext("2d");



    //---------------------------------------datos de las posiciones estados dentro del canvas
    var posx0 = 70;
    var posy0 = 110;
    var posx1 = 370;
    var posy1 = 105;
    var posx2 = 555;
    var posy2 = 310;
    var posx3 = 220;
    var posy3 = 305;
    ////---------------------------------------

    ////---------------------------------------Limpiar dibujo al iniciar transicion

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mt, 0, 0);

    ////---------------------------------------



    var tamCinta = _cinta.length;
    var estadoInicial = 0;
    var estadoFinal = 0;

    var states = [];

    states.push("0");
    states.push("1");
    states.push("2");
    states.push("3");

    var t_0 = "0" + "," + "0" + "," + "A" + "," + "A" + "," + "D" + "," + "0";
    var t_1 = "0" + "," + "0" + "," + "B" + "," + "B" + "," + "D" + "," + "1";
    var t_2 = "0" + "," + "1" + "," + "a" + "," + "A" + "," + "D" + "," + "2";
    var t_3 = "0" + "," + "3" + "," + "b" + "," + "B" + "," + "D" + "," + "3";
    var t_4 = "1" + "," + "1" + "," + "a" + "," + "a" + "," + "D" + "," + "4";
    var t_5 = "1" + "," + "1" + "," + "A" + "," + "A" + "," + "D" + "," + "5";
    var t_6 = "1" + "," + "1" + "," + "B" + "," + "B" + "," + "D" + "," + "6";
    var t_7 = "1" + "," + "2" + "," + "b" + "," + "B" + "," + "I" + "," + "7";
    var t_8 = "2" + "," + "2" + "," + "A" + "," + "A" + "," + "I" + "," + "8";
    var t_9 = "2" + "," + "2" + "," + "B" + "," + "B" + "," + "I" + "," + "9";
    var t_10 = "2" + "," + "2" + "," + "a" + "," + "a" + "," + "I" + "," + "10";
    var t_11 = "2" + "," + "2" + "," + "b" + "," + "b" + "," + "I" + "," + "11";
    var t_12 = "2" + "," + "0" + "," + "#" + "," + "#" + "," + "D" + "," + "12";
    var t_13 = "3" + "," + "3" + "," + "A" + "," + "A" + "," + "D" + "," + "13";
    var t_14 = "3" + "," + "3" + "," + "B" + "," + "B" + "," + "D" + "," + "14";
    var t_15 = "3" + "," + "3" + "," + "b" + "," + "b" + "," + "D" + "," + "15";
    var t_16 = "3" + "," + "2" + "," + "a" + "," + "A" + "," + "I" + "," + "16";


    var transiciones = [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13, t_14, t_15, t_16];


    objCinta.style.fontSize = 40;

    objCurrEstado.innerHTML = "q" + proxEstado;

    objCurrLetra.innerHTML = letraActual;

    //Se ejecuta la transicion que corresponda, segun el estado actual y la proxima letra
        //Luego ve si se va hacia la izquierda o hacia la derecha
    for (var i = 0; i < 17; i++) {

        proxLetra = "" + _cinta.charAt(posCinta);
        var pE = parseInt(proxEstado);
        var trans = transiciones[i].split(",");


        if (trans[0] == states[pE]
            && trans[2] == proxLetra) {

            if (proxEstado == 0) {
                ////---------------------------------------Dibujo estado
                var radius = 24;
                ctx.beginPath();
                ctx.arc(posx0, posy0, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = "bold " + radius + "px serif";
                ctx.fillText(trans[3], posx0 - 8, posy0 + 8);
                ctx.stroke();
                ////---------------------------------------
            } else if (proxEstado == 1) {
                ////---------------------------------------Dibujo estado
                var radius = 24;
                ctx.beginPath();
                ctx.arc(posx1, posy1, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = "bold " + radius + "px serif";
                ctx.fillText(trans[3], posx1 - 8, posy1 + 8);
                ctx.stroke();
                ////---------------------------------------

            } else if (proxEstado == 2) {
                ////---------------------------------------Dibujo estado
                var radius = 24;
                ctx.beginPath();
                ctx.arc(posx2, posy2, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = "bold " + radius + "px serif";
                ctx.fillText(trans[3], posx2 - 8, posy2 + 8);
                ctx.stroke();
                ////---------------------------------------
            } else if (proxEstado == 3) {
                ////---------------------------------------Dibujo estado
                var radius = 24;
                ctx.beginPath();
                ctx.arc(posx3, posy3, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = "bold " + radius + "px serif";
                ctx.fillText(trans[3], posx3 - 8, posy3 + 8);
                ctx.stroke();
                ////---------------------------------------
            }

            if (trans[4] == "I") {
                proxEstado = trans[1];

                var charArray = _cinta.split("");

                charArray[posCinta] = trans[3].charAt(0);

                _cinta = "";

                for (var i = 0; i < tamCinta; i++) {
                    if (i == posCinta) {
                        _cinta += '<span class="clr2">' + charArray[i] + '</span>';

                    } else {
                        _cinta += '<span class="clr1">' + charArray[i] + '</span>';

                    }
                    if (charArray[i + 1] == 'u') {
                        break;
                    }
                }


                objCinta.innerHTML = _cinta;

                _cinta = objCinta.textContent;

                posCinta--;

                break;
            } else if (trans[4] == "D") {


                proxEstado = trans[1];


                var charArray = _cinta.split("");
                charArray[posCinta] = trans[3].charAt(0);

                _cinta = "";
                objCinta.innerHTML = "";

                for (var i = 0; i < tamCinta; i++) {
                    if (i == posCinta) {
                        _cinta += '<span class="clr2">' + charArray[i] + '</span>';

                    } else {
                        _cinta += '<span class="clr1">' + charArray[i] + '</span>';

                    }
                    if (charArray[i + 1] == 'u') {
                        break;
                    }
                }

                objCinta.innerHTML = _cinta;

                _cinta = objCinta.textContent;


                posCinta++;
                break;
            }
        }

    }

    var aux = "" + _cinta.charAt(posCinta) + "";
    var f = parseInt(proxEstado);

    var stop = false;

    var contador = 0;

    for (var i = 0; i < 17; i++) {
        trans = transiciones[i].split(",");
        if (trans[0] == proxEstado) {
            if (trans[2] == aux) {
                stop = false;
                contador++;
            } else if (contador == 0) {
                stop = true;
            }
        }
    }
    if (stop == true) {
        //SWEET ALERT (acepta/rechaza)
        if (f == estadoFinal) {
            objAccept.innerHTML = "La palabra \"" + palabra + "\" ha sido aceptada";
            swal(
                'La palabra \"' + palabra + '\" ha sido aceptada',
                ' ',
                'success'
            )
        } else {
            objAccept.innerHTML = "La palabra \"" + palabra + "\" ha sido rechazada";
            swal(
                'La palabra \"' + palabra + '\" ha sido rechazada',
                ' ',
                'error'
            )
        }


    }



    objCurrEstado.innerHTML = "q" + proxEstado;

    objCurrLetra.innerHTML = _cinta.charAt(posCinta);

    objPosCinta.innerHTML = "" + posCinta;

    //Agrega una comparación sólo si NO se detiene
    if (!stop) {
        cont++;
    }

    objComp.innerHTML = cont;


}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}