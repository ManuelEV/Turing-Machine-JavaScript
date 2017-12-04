

window.onload=function(){
	var ctx=document.getElementById("panel").getContext("2d");

	var current=new Image;
	current.src="imagenes/suma_binaria/suma_binaria.png";
	



	current.onload=function(){	
        ctx.drawImage(current,0,0)//,state0.width/1.5,state0.height/1.5);
        ctx.stroke();
        
    }

	objCinta = document.getElementById("cinta");
    objPalabra = document.getElementById("word");
    objComp = document.getElementById("comp");
    objCurrEstado = document.getElementById("currEstado");
    objCurrLetra = document.getElementById("currLetra");
    objAccept = document.getElementById("accept");
    objPosCinta = document.getElementById("posi");
    



}


function mostrar_() {
        ////---------------------------------------Limpiar dibujo al iniciar transicion   
        var mt=new Image;
        mt.src="imagenes/suma_binaria/suma_binaria.png";
        var canvas=document.getElementById("panel");
        var ctx=canvas.getContext("2d"); 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mt,0,0);
        ////---------------------------------------
        //Se inicializan los valores de acuerdo a lo ingresado
			palabra=objPalabra.value;
			
			var c = "";
			for (var i=0;i<palabra.length;i++){
				c+="#";
			}
            var auxCinta = c+palabra+c;
            var cinta="";

            //Pinta el char correspondiente a la posicion actual de la cinta
            for (var i=0;i<auxCinta.length;i++){
                if(i==c.length){
                    cinta+= '<span class="clr2">'+ auxCinta[i] +'</span>';
                }else{
                    cinta+= '<span class="clr1">'+ auxCinta[i] +'</span>';
                }
            }

            objCinta.innerHTML=cinta;
            objCinta.style.fontSize=40;
            var pal=objPalabra.value;
            var cLet=""+pal.charAt(0);
            objCurrLetra.innerHTML=cLet;
            objComp.innerHTML="0";
			objCurrEstado.innerHTML="q0";
			//En este caso el tamaño de la cinta depende de la palabra ingresada,
			//por lo que su posicion depende igualmente de este
            objPosCinta.innerHTML=c.length;

            ////---------------------------------------Dibujo estado inicial
            var radius = 24;
            ctx.beginPath();
            ctx.arc(294, 107, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.font = "bold " + radius +"px serif";
            ctx.fillText(cLet, 294-8 ,107+8);
            ctx.stroke();
            ////---------------------------------------

	}

    

function avanzar() {

    //Se capturan los datos desde el HTML
    
    var palabra_=objPalabra.value;
    
    var _cinta_ = objCinta.textContent;
    
    var cont_=Number(objComp.textContent);
    
    var p =objCurrEstado.textContent;
    
    var proxEstado_=p.charAt(1);

    var letraActual_ = objCurrLetra.textContent;

    var posCinta_ = parseInt(objPosCinta.textContent);

	//Se ejecuta la transición que corresponda
	
        transicion(cont_,palabra_,_cinta_,proxEstado_,letraActual_,posCinta_);
    
}	

function transicion(cont,palabra,_cinta,proxEstado,letraActual,posCinta) {

    objAccept.innerHTML="";
    
    var mt=new Image;
	mt.src="imagenes/suma_binaria/suma_binaria.png";

    var canvas=document.getElementById("panel");
    var ctx=canvas.getContext("2d");

    
    var radius = 24;
    //---------------------------------------datos posiciones estados
    var posx0=294;
    var posy0=107;
    var posx1=102;
    var posy1=176;
    var posx2=296;
    var posy2=276;
    var posx3=101;
    var posy3=288;
    var posx4=429;
    var posy4=276;
    var posx5=560;
    var posy5=178;
    ////---------------------------------------

    ////---------------------------------------Limpiar canvas al iniciar transicion
        	
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mt,0,0);
        
    ////---------------------------------------

        var tamCinta=_cinta.length;
		var estadoInicial=0;
		var estadoFinal=3;

		var states=[];

		states.push("0");
		states.push("1");
		states.push("2");
		states.push("3");
		states.push("4");
		states.push("5");

        var t_0="0"+ "," +"0"+ "," +"1"+ "," +"1"+ "," +"D"+ "," +"0";
        var t_1="0"+ "," +"0"+ "," +"0"+ "," +"0"+ "," +"D"+ "," +"1";
		var t_2="0"+ "," +"1"+ "," +"+"+ "," +"+"+ "," +"D"+ "," +"2";
		
        var t_3="1"+ "," +"1"+ "," +"0"+ "," +"0"+ "," +"D"+ "," +"3";
        var t_4="1"+ "," + "1"+ "," +"1"+ "," +"1"+ "," +"D"+ "," +"4";
		var t_5="1"+ "," +"2"+ "," +"#"+ "," +"#"+ "," +"I"+ "," +"5";
		
        var t_6="2"+ "," +"2"+ "," +"0"+ "," +"1"+ "," +"I"+ "," +"6";
        var t_7="2"+ "," +"4"+ "," +"1"+ "," +"0"+ "," +"I"+ "," +"7";
		var t_8="2"+ "," +"3"+ "," +"+"+ "," +"#"+ "," +"D"+ "," +"8";
		
        var t_9="3"+ "," +"3"+ "," +"0"+ "," +"#"+ "," +"D"+ "," +"9";
		var t_10="3"+ "," +"3"+ "," +"1"+ "," +"#"+ "," +"D"+ "," +"10";
		
        var t_11="4"+ "," +"4"+ "," +"0"+ "," +"0"+ "," +"I"+ "," +"11";
        var t_12="4"+ "," +"4"+ "," +"1"+ "," +"1"+ "," +"I"+ "," +"12";
		var t_13="4"+ "," +"5"+ "," +"+"+ "," +"+"+ "," +"I"+ "," +"13";
		
        var t_14="5"+ "," +"5"+ "," +"1"+ "," +"0"+ "," +"I"+ "," +"14";
        var t_15="5"+ "," +"0"+ "," +"0"+ "," +"1"+ "," +"D"+ "," +"15";
        var t_16="5"+ "," +"0"+ "," +"#"+ "," +"1"+ "," +"D"+ "," +"16";
        

        var transiciones=[t_0,t_1,t_2,t_3,t_4,t_5,t_6,t_7,t_8,t_9,t_10,t_11,t_12,t_13,t_14,t_15,t_16];
	       

        objCinta.style.fontSize=40;
 
        objCurrEstado.innerHTML="q"+proxEstado;

        objCurrLetra.innerHTML=letraActual;

            //Transicion inicial - PRIMER CASO
            if (cont == 0) {
            	
                for (var i = 0; i < 17; i++){
                	
                    var trans = transiciones[i].split(",");

                    if (trans[0]==states[estadoInicial]
                            && trans[2]==letraActual) {
                                ////---------------------------------------Dibujo estado
                                
                                ctx.beginPath();
                                ctx.arc(posx0, posy0, radius, 0, 2 * Math.PI, false);
                                ctx.fillStyle = 'red';
                                ctx.fill();
                                ctx.fillStyle = 'white';
                                ctx.font = "bold " + radius +"px serif";
                                ctx.fillText(trans[3], posx0-8 ,posy0+8);
                                ctx.stroke();
                                ////---------------------------------------
                        if (trans[4]=="I") {
                            
                            proxEstado = trans[1];
                            
                            var charArray = _cinta.split("");
                            charArray[posCinta] = trans[3].charAt(0);
                            _cinta="";
                        
                            for (var i=0;i<tamCinta;i++){
                                if(i==posCinta){
                                    _cinta+= '<span class="clr2">'+ charArray[i] +'</span>';
                                   
                                }else{
                                    _cinta+='<span class="clr1">'+ charArray[i] +'</span>';
                                  
                                }
                                if(charArray[i+1]=='u'){
                                    break;
                                }
                            }
                            
                            objCinta.innerHTML=_cinta;
                            _cinta=objCinta.textContent;
                            
                            posCinta--;
                            break;
                        } else if (trans[4]=="D") {
                            
                            proxEstado = trans[1];

                           
                            var charArray = _cinta.split("");
                            charArray[posCinta] = trans[3].charAt(0);
                            _cinta="";
                        
                            
                                for (var i=0;i<tamCinta;i++){
                                    if(i==posCinta){
                                        _cinta+= '<span class="clr2">'+ charArray[i] +'</span>';
                                       
                                    }else{
                                        _cinta+='<span class="clr1">'+ charArray[i] +'</span>';
                                      
                                    }
                                    if(charArray[i+1]=='u'){
                                        break;
                                    }
                                }
                            
                                
                            objCinta.innerHTML=_cinta;
                            
                            _cinta=objCinta.textContent;

                            posCinta++;
                            break;
                        }
                    }
                    
                }

            //Todos los demás casos
            } else {
                
                
                for (var i = 0; i < 17; i++) {
                	
                    proxLetra = "" + _cinta.charAt(posCinta);
                    var pE = parseInt(proxEstado);
                    var trans = transiciones[i].split(",");
                    
                    
                    if (trans[0]==states[pE]
                            && trans[2]==proxLetra) {

                                if(proxEstado==0){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx0, posy0, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx0-8 ,posy0+8);
                                    ctx.stroke();
                                    ////---------------------------------------
                                }else if(proxEstado==1){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx1, posy1, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx1-8 ,posy1+8);
                                    ctx.stroke();
                                    ////---------------------------------------

                                }else if(proxEstado==2){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx2, posy2, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx2-8 ,posy2+8);
                                    ctx.stroke();
                                    ////---------------------------------------
                                }else if(proxEstado==3){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx3, posy3, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx3-8 ,posy3+8);
                                    ctx.stroke();
                                    ////---------------------------------------
                                }else if(proxEstado==4){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx4, posy4, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx4-8 ,posy4+8);
                                    ctx.stroke();
                                    ////---------------------------------------
                                }else if(proxEstado==5){
                                    ////---------------------------------------Dibujo estado
                                    ctx.beginPath();
                                    ctx.arc(posx5, posy5, radius, 0, 2 * Math.PI, false);
                                    ctx.fillStyle = 'red';
                                    ctx.fill();
                                    ctx.fillStyle = 'white';
                                    ctx.font = "bold " + radius +"px serif";
                                    ctx.fillText(trans[3], posx5-8 ,posy5+8);
                                    ctx.stroke();
                                    ////---------------------------------------
                                }
                                
                        if (trans[4]=="I") {
                            proxEstado = trans[1];
                            
                            var charArray = _cinta.split("");

                            charArray[posCinta] = trans[3].charAt(0);
                            
                            _cinta="";
                        //-----------------------------------------------Destaca el caracter actual en el cabezal
                                for (var i=0;i<tamCinta;i++){
                                    if(i==posCinta){
                                        _cinta+= '<span class="clr2">'+ charArray[i] +'</span>';
                                       
                                    }else{
                                        _cinta+='<span class="clr1">'+ charArray[i] +'</span>';
                                      
                                    }
                                    if(charArray[i+1]=='u'){
                                        break;
                                    }
                                }
                        //-----------------------------------------------
                            
                            objCinta.innerHTML=_cinta;

                            _cinta=objCinta.textContent;
                            
                            posCinta--;

                            break;
                        } else if (trans[4]=="D") {
                            
                            
                            proxEstado = trans[1];
                            
                            
                            var charArray = _cinta.split("");
                            charArray[posCinta] = trans[3].charAt(0);
                            
                            _cinta="";
                            objCinta.innerHTML="";
                            
                            //-----------------------------------------------Destaca el caracter actual en el cabezal

                            for (var i=0;i<tamCinta;i++){
                                if(i==posCinta){
                                    _cinta+= '<span class="clr2">'+ charArray[i] +'</span>';
                                   
                                }else{
                                    _cinta+='<span class="clr1">'+ charArray[i] +'</span>';
                                  
                                }
                                if(charArray[i+1]=='u'){
                                    break;
                                }
                            }  
                            //-----------------------------------------------
                            
                            objCinta.innerHTML=_cinta;

                            _cinta=objCinta.textContent;
                            
                            
                            posCinta++;
                            break;
                        }
                    }

                }
            }
                //-----------------------------------------------Comprueba si se detiene

                var aux = "" + _cinta.charAt(posCinta) +"";
                var f = parseInt(proxEstado);
                
                var stop = false;
                
                var contador = 0;
                
                for (var i = 0; i < 17; i++) {
                    trans = transiciones[i].split(",");
                    if (trans[0]==proxEstado) {
                        if (trans[2]==aux) {
                            stop = false;
                            contador++;
                        } else if (contador == 0) {
                            stop = true;
                        }
                    }
                }

                //-----------------------------------------------

                if(stop==true){
                    //SWEET ALERT (acepta/rechaza)
                    if (f==estadoFinal){
                        var resultado = "";
                        for(var i=0;i<_cinta.length;i++){
                            if(_cinta[i]!="#"){
                                resultado+=_cinta[i];
                            }
                        }
                        objAccept.innerHTML="La palabra \""+palabra+"\" ha sido aceptada";
                        //Muestra la operación completa => "n1+n2=resultado"
                        swal(
                            'La palabra \"'+palabra+'\" ha sido aceptada',
                            palabra+'='+resultado,
                            'success'
                          )
                    }else{
                        objAccept.innerHTML="La palabra \""+palabra+"\" ha sido rechazada";
                        swal(
                            'La palabra \"'+palabra+'\" ha sido rechazada',
                            ' ',
                            'error'
                          )
                    }
                    
                    
                }

                //-----------------------------------------------Actualiza los elementos html

                objCurrEstado.innerHTML="q"+proxEstado;

                objCurrLetra.innerHTML=_cinta.charAt(posCinta);

                objPosCinta.innerHTML=""+posCinta;

                //Agrega una comparación sólo si NO se detiene
                if(!stop){
                    cont++;
                }

                objComp.innerHTML=cont;

                //-----------------------------------------------
        
    }

    function sleep(miliseconds) {
        var currentTime = new Date().getTime();
     
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
     }