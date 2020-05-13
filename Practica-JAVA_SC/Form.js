document.getElementById("btnValidar").addEventListener("click",validar);
document.getElementById("btnValidar").addEventListener("click",ValidarCedula);
document.getElementById("btnValidar").addEventListener("click",ValidarNombre);
document.getElementById("btnValidar").addEventListener("click",ValidarApellido);
document.getElementById("btnValidar").addEventListener("click",ValidarTelefono);
document.getElementById("btnValidar").addEventListener("click",ValidarFechaNacimiento);
document.getElementById("btnValidar").addEventListener("click",ValidarCorreo);
document.getElementById("btnValidar").addEventListener("click",ValidarContrasena);
document.getElementById("btnValidar").addEventListener("click",EntrarPHP);

function validar() {
    var bandera = true

    for(var i = 0; i < document.forms[0].elements.length; i++){
    var elemento = document.forms[0].elements[i]
    if(elemento.value == '' && elemento.type == 'text'){
    if(elemento.id == 'cedula'){
        document.getElementById('cedula').innerHTML = '<br>La cedula esta vacia'
    }
    elemento.style.border = '1px red solid'
    elemento.className = 'error'
    bandera = false
    }
    }
   
    if(!bandera){
    alert('Error: revisar los campos, alguno esta vacio')
    }
    return bandera
   }
   function validarLetras(elemento){
    if(elemento.value.length > 0){
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
   
    if(miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90|| miAscii==32){
    return true
    }else {
    elemento.value = elemento.value.substring(0, elemento.value.length-1)
    return false
   }
   }else{
   return true
   
   }

  }

  function ValidarCedula() {
     var ced = document.getElementById("cedula").value;
   
    var [suma, mul, chars] = [0, 1, ced.length];
    for (var index = 0; index < chars; index += 1) {
    var num = ced[index] * mul;
    suma += num - (num > 9) * 9; 
      mul = 1 << index % 2;
}
if ((suma % 10 === 0) && (suma > 0)) {
  alert('Cedula Valida.');
  return true
} else {
  alert('revisar el campo cedula:invalida.');
  return false
}
}
function ValidarNombre(){
    nombre1 = document.getElementById("nombre").value;
    nombre2 = nombre1.replace(/ /g, ""); 

    if (isNaN(nombre1) && (nombre1 != nombre2) && (nombre1.slice(-1) != " ")) {
        
        alert('Nombre valido')
        cont = 1;
        return true
    }else{
        
        alert('revisar el campo nombre:invalido')
        return false
    }
}

function ValidarApellido(){
    apellido1 = document.getElementById("apellido").value;
    apellido2 = apellido1.replace(/ /g, ""); 

    if (isNaN(apellido1) && (apellido1 != apellido2) && (apellido1.slice(-1) != " ")) {
        
        alert('apellido valido')
        cont = 1;
        return true

    }else{
        
        alert('revisar el campo apellido:invalido')
        return false
    }
}
function ValidarTelefono(){
    ndigitos = document.getElementById("telefono").value;
     if(ndigitos.length==10){
        alert('Telefono Valido')
        return true
    }else{
        alert('Telefono Invalido')
        return false
     }
}
function ValidarFechaNacimiento(){
    var vFechanac = document.getElementById("fechaNacimiento").value.split('/');
    var fechaNac = new Date(vFechanac[2], vFechanac[1], vFechanac[0]);
    if (vFechanac.length == 3 && fechaNac
        && vFechanac[0] == fechaNac.getDate()
        && vFechanac[1] == fechaNac.getMonth()
        && vFechanac[2] == fechaNac.getFullYear()) {
        alert('Fecha Valida')
        return true;
    } else {
        alert('Fecha mal ingresada, Revisar Formato')
        return false;
    }
    
}
function ValidarCorreo(){
    vcorreo = document.getElementById('Correo').value.split('@');

    if (vcorreo[0].length < 3) {
        alert('Correo Invalido')
        contC = 0;
    } else {
        if (!(vcorreo[1] == 'ups.edu.ec') && !(vcorreo[1] == 'est.ups.edu.ec')) {
            
            alert('Correo Invalido')
            contC = 0;
            return true
        } else {
            
            alert('Correo Valido')
            contC = 1;
            return false
        }
    }
}
function ValidarContrasena(){
    pass = document.getElementById('pass').value;
    if(pass.length >= 8)
    {		
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var simbolo = false;
        
        for(var i = 0;i<pass.length;i++)
        {
            if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90)
            {
                mayuscula = true;
            }
            else if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122)
            {
                minuscula = true;
            }
            else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)
            {
                numero = true;
            }
            else
            {
                simbolo = true;
            }
        }
        if(mayuscula == true && minuscula == true && simbolo == true && numero == true)
        {
            alert('Password Valido')
            return true;
            
        }
    }
    alert('Password Invalido')
    return false;
  
}
function EntrarPHP(){
   if(Validar()==true && ValidarCedula()==true && ValidarNombre()==true && ValidarApellido()==true && ValidarTelefono()==true && ValidarFechaNacimiento()==true && ValidarCorreo()==true && ValidarContrasena()==true){
      
}
} 
