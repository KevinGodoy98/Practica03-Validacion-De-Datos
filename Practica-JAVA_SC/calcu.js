document.getElementById("btn1").addEventListener("click",btn1);
document.getElementById("btn2").addEventListener("click",btn2);
document.getElementById("btn3").addEventListener("click",btn3);
document.getElementById("btn4").addEventListener("click",btn4);
document.getElementById("btn5").addEventListener("click",btn5);
document.getElementById("btn6").addEventListener("click",btn6);
document.getElementById("btn7").addEventListener("click",btn7);
document.getElementById("btn8").addEventListener("click",btn8);
document.getElementById("btn9").addEventListener("click",btn9);
document.getElementById("btn0").addEventListener("click",btn0);
document.getElementById("suma").addEventListener("click",sum);
document.getElementById("resta").addEventListener("click",rest);
document.getElementById("division").addEventListener("click",divi);
document.getElementById("multiplicacion").addEventListener("click",mult);
document.getElementById("igual").addEventListener("click",igual1);
document.getElementById("btnp").addEventListener("click",punto);
document.getElementById("C").addEventListener("click",limpiarFormulario);

function btn1() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn1").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn2() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn2").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn3() {
    var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn3").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn4() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn4").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn5() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn5").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn6() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn6").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn7() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn7").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn8() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn8").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn9() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn9").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function btn0() {
	var v1 = document.getElementById('resultado').innerHTML;
	var v2 = document.getElementById("btn0").innerHTML;
	document.getElementById('resultado').innerHTML = v1 + v2
}
function punto(){
    var p= document.getElementById('resultado').innerHTML;
    var p1= document.getElementById('btnp').innerHTML;
    document.getElementById('resultado').innerHTML = p + p1
}

function sum() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("suma").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function rest() {
	var actual = document.getElementById('resultado').innerHTML;
	var restado = document.getElementById("resta").innerHTML;
	document.getElementById('resultado').innerHTML = actual + restado
}

function mult() {
	var actual = document.getElementById('resultado').innerHTML;
	var multiplicado= document.getElementById("multiplicacion").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  multiplicado
}
function divi() {
	var actual = document.getElementById('resultado').innerHTML;
	var dividido = document.getElementById("division").innerHTML;
	document.getElementById('resultado').innerHTML = actual + dividido
}

function limpiarFormulario() {
    document.getElementById('resultado').innerHTML = "";
}

function igual1() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumar = actual.indexOf("+");
	var restar = actual.indexOf("-");
    var dividir = actual.indexOf("÷");
    var multiplicar = actual.indexOf("x");
	if (sumar !== -1) {
		arr = actual.split("+",2);
		resp = parseFloat(arr[0]) + parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = resp;
	} else if (restar !== -1) {
		arr = actual.split("-",2);
		resp = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = resp;

	} else if (multiplicar !== -1) {
		arr = actual.split("x",2);
		resp = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = resp;

	} else if (dividir !== -1) {
		arr = actual.split("÷",2);
		resp = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = resp;

    }
    
}
  
