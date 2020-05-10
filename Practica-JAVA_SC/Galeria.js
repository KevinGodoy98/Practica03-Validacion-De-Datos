document.getElementById("btn1").addEventListener("click",btn1);
document.getElementById("btn2").addEventListener("click",btn2);
document.getElementById("btn3").addEventListener("click",btn3);

//guardas imagenes en el array
var img = new Array();
img[0] = "imagenes/2010.jpg";
img[1] = "imagenes/2011.jpg";
img[2] = "imagenes/2012.jpg";
img[3] = "imagenes/2013.jpg";
img[4] = "imagenes/2014.jpg";
img[5] = "imagenes/2015.jpg";
img[6] = "imagenes/2016.jpg";
img[7] = "imagenes/2017.jpg";
img[8] = "imagenes/2018.jpg";
img[9] = "imagenes/2019.jpg";


function nrand(n){
// creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
    return(Math.floor(Math.random() * n + 1 ));
}
function btn2(){
    for(i = 0; i<11; i++){
        document.getElementById("imgp").src = img[nrand(i)-1];
}
}

function btn3(){
    for(i = 0; i <5; i++){
     document.getElementById("imgp").src = img[nrand(i)];
    }
    if(n==img.length-5){
        document.getElementById('btn3').disabled = true;
    }
}
function btn1(){
    for(i = 0; i <5; i++){
        document.getElementById("imgp").src = img[nrand(i)];
      }
      if(n==img.length-5){
          document.getElementById('btn1').disabled = true;
      }
}
