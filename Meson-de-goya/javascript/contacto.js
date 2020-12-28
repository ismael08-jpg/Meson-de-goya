//Validacion de formulario contacto

function soloLetras(e){
 	key=e.KeyCode || e.which;
 	teclado=String.fromCharCode(key).toLowerCase();
 	letras=" áéíóúabcdefghijklmnñopqrstuvwxyz";
 	especiales="8-37-38-46-164";//array
 	teclado_especial=false;
 	for(var i in especiales	){
 		if(key==especiales[i]){
 			teclado_especial=true;break;
 		}
 	}
 	if (letras.indexOf(teclado)==-1 &&  !teclado_especial){
 		return false;
 	}
 } 

 function solonumeros(e){
      key=e.KeyCode || e.which;
      teclado=String.fromCharCode(key);
      numero="0123456789";
      especiales="8-37-38-46";//array
      teclado_especial=false;

      for(var i in especiales){
      	if (key==especiales[i]){
      		teclado_especial=true;
      	}
      }
      if (numero.indexOf(teclado)==-1 && !teclado_especial){
      	return false;
      }
}

function validaremailyformulario()
{
	var filtro =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!filtro.test(email.value))
    {
    	alert("POR FAVOR, DIGÍTE UN CORREO ELECTRÓNICO VÁLIDO");
    	email.focus();
    	return false;
    }
    else
    {
    	alert("Mensaje Enviado Correctamecte");
    	return true;
    }
}


//Calculadora insertada en contacto

function principal()
{
  var result = document.getElementById("pantalla");
  pantalla.innerHTML="";
  var show=" ";
  var operacion1;
  var operacion2;
  var simbol;
  var bandera=0;
  
  
  var ac = document.getElementById("ac");
  var divi = document.getElementById("divi");
  var multi = document.getElementById("multi");
  var mas = document.getElementById("mas");

  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var igual = document.getElementById("igual");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var menos = document.getElementById("menos");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cero = document.getElementById("cero");

  uno.onclick = function()
  {
    show = show + "1";
    pantalla.innerHTML=show;
  }
  dos.onclick = function()
  {
    show = show + "2";
    pantalla.innerHTML=show;
  }
  tres.onclick = function()
  {
    show = show + "3";
    pantalla.innerHTML=show;
  }
  cuatro.onclick = function()
  {
    show = show + "4";
    pantalla.innerHTML=show;
  }
  cinco.onclick = function()
  {
    show = show + "5";
    pantalla.innerHTML=show;
  }

  seis.onclick = function()
  {
    show = show + "6";
    pantalla.innerHTML=show;
  }

  siete.onclick = function()
  {
    show = show + "7";
    pantalla.innerHTML=show;
  }

  ocho.onclick = function()
  {
    show = show + "8";
    pantalla.innerHTML=show;
  }
  nueve.onclick = function()
  {
    show = show + "9";
    pantalla.innerHTML=show;
  }
  cero.onclick = function()
  {
    show = show + "0";
    pantalla.innerHTML=show;

  }
   //operaciones------------------------
  ac.onclick = function()
  {
    clean();
  }





  
  divi.onclick = function()
  {
    if(bandera==0)
    {
      operacion1=show;
      simbol="/";
      limpiar();
      bandera=1;
    }
  }
  


  
  multi.onclick = function()
  {
    if (bandera==0) 
    {
      operacion1=show;
      simbol="*";
      limpiar();
      bandera=1;
    }
  }

  mas.onclick = function()//suma
  {
    if(bandera==0)
    {
      operacion1=show;
      simbol="+";
      limpiar();
      bandera=1;
    }
  }
  



  
  menos.onclick = function()
  {
    if(bandera==0)
    {
      operacion1=show;
      simbol="-";
      limpiar();
      bandera=1;      
    }
  }
  

  //Operaciòn de obtencion de respuesta

  igual.onclick = function()
  {
    operacion2=show;
    operacionfinal();
  }

  function limpiar()
  {
    pantalla.innerHTML="";
    show="";
    
  }

  function clean()
  {
    pantalla.innerHTML="";
    operacion1=0;
    operacion2=0;
    simbol="";
    show="";
    
  }

  function operacionfinal(){
    var answ = 0;
    operacion1=parseInt(operacion1)
    operacion2=parseInt(operacion2)
    switch(simbol){
      case "+":
        answ = operacion1 + operacion2;
        break;
      case "-":
          answ = operacion1 - operacion2;
          break;
      case "*":
        answ = operacion1 * operacion2;
        break;
      case "/":
        

        if(operacion2!=0){
          answ = operacion1 / operacion2;
        }
        else
        {
          clean();
          alert("Error matemático");

        }

        break;
        default:
        alert("Ingrese una operación valida");
        break;
    }
    clean();
    pantalla.innerHTML = answ;
    bandera=0;
  }



}
