# Practica03-Validacion-De-Datos
 	PRÁCTICA DE LABORATORIO 

CARRERA: Computación	ASIGNATURA: Programación Hipermedial
NRO. PRÁCTICA:	3	TÍTULO PRÁCTICA: Practica03-Validacion-De-Datos
OBJETIVO ALCANZADO: Entender y organizar de una mejor manera los sitios de web en Internet, Diseñar adecuadamente elementos gráficos en sitios web en Internet. Crear sitios web aplicando estándares actuales.
ACTIVIDADES DESARROLLADAS
1.	Crear un repositorio en GitHub con el nombre “Practica03 – Javascript”
 
2.	Realizar un commit y push por cada requerimiento de los puntos antes descritos.
 
3.Calculadora
• Calcu.html
 
•	En este pequeño fragmento podemos observar como procedemos a crear el documento html mediante el comando <!DOCYPE html>. 

•	Procedemos a crear la estructura básica de un documento html y mediante la etiqueta <html lang=”es” damos a entender que nuestra página será escrita en español.
•	Procedemos a crear nuestro encabezado mediante la etiqueta <head> dentro de ella vamos a colocar la estructura que va a tomar nuestra pagina html como lo harán las siguientes etiquetas: <title> la cual nos permitirá darle un título, en mi caso el nombre de calculadora.

•	Creamos la etiqueta meta que forma parte de nuestro encabezado de la página web, en donde indicamos que va a hacer referencia al formato de texto que va a tomar la web, en este caso utf-8. Finalmente, antes de cerrar la etiqueta head procedemos a referenciar nuestro archivo css en este caso “calculadora.css”.

•	Entramos al contenido de nuestra pagina html mediante la etiqueta <body>, en donde colocamos una etiqueta header, la cual va a contener a una etiqueta h1 para hacer referencia al título a colocar. Cerramos la etiqueta header.

•	Se procede a crear 5 secciones a través de una etiqueta div, estas clases van a representar los siguientes puntos: 

-	Calculadora: la cual va contener a todas las demás clases. En este caso las clases son las siguientes: Total y Botones.
-	Botones: Esta clase en si contendrá 2 subclases las cuales son: números, operación y finalmente la clase igual.

Es muy importante resaltar que todas estas clases van a estar representadas mediante la etiqueta <button> a excepción de la clase total.

•	Por último después de cerrar la etiqueta <body> procedemos a crear una etiqueta script en donde vamos a llamar a nuestro archivo de JavaScript(.js) ejecutando la siguiente línea: <script src="calcu.js"></script>. Finalmente cerramos las etiquetas sobrantes.
• Calculadora.CSS
   

•	Comenzamos con nuestra primera clase, en este caso .Calculadora la cual tiene las siguientes propiedades:

-	Background-color(color de fondo): el cual es un tono grisado , representado por:686965
-	Tenemos un alto(width) de 428px y un alto(height) de 500px.
-	Nuestro margen(margin) es auto , salvo por el margen superior(margin-top) el cual es de -35px;
•	Tenemos la propiedad de las h , en este caso la h1 en la cual estamos diciendo que todos los textos que lleven esta etiqueta van a estar centrados mediante text-align:center.

•	Procedemos a analizar las propiedades de la clase .igual, la cual solamente va a tener la propiedad de padding: 0px(izquierda) 18px(arriba) 18px(abajo) 18px(derecha).

•	Con el .igual button estamos analizando en especifico el boton igual , el cual contiene las siguientes propiedades:

-	Tenemos un alto(width) de 80%.
-	Un background-color el cual es un derivado del color naranja , ocupado por fe9e07
-	Mediante color vamos a darle un color blanco(fff) al contenido textual del boton con un tamaño de letra de 50px mediante font-size , un espaciado(padding) de 0px  y un margen superior(margin-top) de -30 px.

•	Dentro de la clase .numeros vamos a definir unicamente la propiedad de padding en la cual tenemos: 0px(izquierda) 9px(arriba) 18px(abajo) 90px(derecha).

•	En el caso de la clase .operacion tenemos las siguientes propiedades: 

-	Padding: 0px(izquierda) 9px(arriba) 18px(abajo) 90px(derecha).
-	Float : En este caso vamos a colocar nuestras operaciones en la parte derecha(right)
-	Margin-top: nuestro margen superior en este caso sera de -324px
•	Procedemos a utilizar un selector (#resultado) en este caso, el cual va a tener la siguientes propiedades:

-	Background-color : en este caso va a ser parecido al de la clase calculadora el cual tenia un color gris 
-	Color : va a dar el color del contenido textual en este caso un color parecido al blanco con un tamaño de texto de 20px mediante la propiedad (font-size) y ademas una fuente sans-seif la cual fue asignada mediante (font-family)
-	Padding: el espaciado va a ser de 26 px 
-	Height: la altura de la caja de resultado va a ser de 30px

•	Mediante la clase .operacion button vamos a darle estilos a todos los operadores que tiene nuestra calculadora, en este caso: la suma, la resta, la multiplicacion, la division, y el C , el cual nos va a borrar los registgros de los calculos realizados.Las propiedades son las siguientes:

-	Mediante la propiedad display:block lo que le estamos diciendo es que el elemento actue como bloque.
-	Tenemos un alto(width) de 54px y un alto(height) de 54px.
-	Padding: 9px(izquierda) 0px(arriba) 0px(abajo) 15px(derecha).
-	Un background-color el cual es un derivado del color naranja , ocupado por fe9e07
-	Mediante color vamos a darle un color blanco(fff) al contenido textual del boton, el cual no va a tener nigun borde debido a que la propiedad de borde esta en none

•	En la clase .numeros div solamente vamos a tener una propiedad la cual es la de float, la cual nos va a permitir ubicar en el lugar donde se escoja, en este caso en ninguno debido a que esta en none.
•	Por medio de la clase .numeros button las propiedades son las siguientes:

-	Un borde de 0px y un background con tono medio gris representado por 868483
-	Ademas de esto se uso tambien la propiedad hover para darle un estilo al momento en el que el usuario pase el raton por el boton en nuestro caso a sido para permitir proyectar una sombra difuminada desde el marco del elemento en este caso el boton.

•	A la etiqueta button se le ha dado determinadas propiedades , las cuales son:

-	Margin: 2px 0px -> margen de 2px hacia la izquierda y 0px a la derecha
-	Padding: 15px 24px -> espaciado de 15 px a la izquierda y 24px a la derecha
-	Font-size: 19px  -> tamaño de letra del contenido del boton
-	Color: e9e9e9 -> color que va a tomar el texto del boton

•	Tanto el selector del boton 1 y 2 van tener su ancho el cual es:

-	129 px para el btn0 
-	60px btn1

•	Por ultimo, para finalizar el background del html va a ser representado por el color floralWhite.
• Calcu.js
  
            
•	Dentro del archivo de javascript nos encontramos con la línea document.getElementByID(“btn1”).addEventListener(“click”,btn1);

En esta parte lo que se está haciendo es obtener el elemento dado por el id btn1 que en este caso es el botón del numero 1 y con él. addEventListener click lo que se esta diciendo es que cuando yo pulse click se va a cumplir el método btn1.Este paso se va a dar desde el botón 0 al 9 incluido el punto y el C para borrar registros.

•	Mediante las funciones(function) que va desde la btn1 a la divi lo que se esta haciendo es mostrar el valor que el usuario este clickeando. La variable v1 lo que está haciendo es obteniendo el elemento resultado, mientras que la variable v2 lo que esta haciendo es obteniendo el valor del botón clickeado, el cual va a ser mostrado en la pantalla de resultado mediante la propiedad innerHTML y la concatenación entre sus 2 variables.

•	En la parte de limpiar formulario lo que se esta haciendo es mandar el valor de vacío mediante la propiedad innerHTML con el fin de que cuando el usuario clickee el botón C, el resultado desaparezca.

•	Por ultimo ya en la funcion igual1 lo que se esta haciendo ya es aplicar los metodos necesarios para calcular las 4 operaciones aritmeticas , para lo cual se crearon 5 variables actual que actua como nuestro acumulador para las distintas operaciones, la suma,la resta, la multiplicacion y la division.Dentro de estas variables guardamos su simbolo mediante el indexOf con el fin de poder utilizarlo sin ocacinar problemas con las operaciones y ya despues con el .split separamos nuestros numeros y caracteres y procedemos a realizar las operaciones artimeticas a los arreglos.
4.Galeria
 
•	En este pequeño fragmento podemos observar como procedemos a crear el documento html mediante el comando <!DOCYPE html>. 

•	Procedemos a crear la estructura básica de un documento html y mediante la etiqueta <html lang=”es” damos a entender que nuestra página será escrita en español.
•	Procedemos a crear nuestro encabezado mediante la etiqueta <head> dentro de ella vamos a colocar la estructura que va a tomar nuestra página html como lo harán las siguientes etiquetas: <title> la cual nos permitirá darle un título, en mi caso el nombre de Galería.

•	Creamos la etiqueta meta que forma parte de nuestro encabezado de la página web, en donde indicamos que va a hacer referencia al formato de texto que va a tomar la web, en este caso utf-8. Finalmente, antes de cerrar la etiqueta head procedemos a referenciar nuestro archivo css en este caso “Galeria.css”.

•	Entramos al contenido de nuestra página html mediante la etiqueta <body>, en donde colocamos una etiqueta h1 para hacer referencia al título a colocar. Cerramos la etiqueta

•	Metemos un div principal que va a contener a todas las imágenes de nuestra galería. Dentro de nuestras imágenes el source va a estar vacío debido a que va a ser asignado de manera aleatoria, además de contar con un width y height en cada etiqueta img con el fin de que todas las imágenes tengan el mismo tamaño.

•	También tenemos una clase botones que como su nombre lo dice va a contener a todos los botones los cuales van a estar determinados por un id y la propiedad onclick la cual conecta el método plusDivs con el archivo de JavaScript(js).

•	Ya por último procedemos a llamar a nuestro archivo de JavaScript mediante la etiqueta script.

• Galeria.CSS
  
•	Con la Propiedad h1 lo que vamos a decir es que todas las etiquetas h1 van a tener su texto centrado, esto lo determina el atributo text-align:center
•	La clase .mySlides no va tener ningun display(none) , va a tener un tamaño del 100% y va a tener un margen de 99px a la izquierda y 0px a la derecha.

•	El background del html va a ser representado por el color darkgoldenrod.

•	El selector imgp va a contar con las siguientes propiedades:

-	Un alto(height) de 310px y un ancho(width) de 400px
-	Un margin de 1px(izquierda) 0px(arriba) 0px(abajo) 445px(derecha)

•	La clase botones solamente va a tener un margin de 46px(izquierda) 0px(arriba) 0px(abajo) 323px(derecha)

•	Por Ultimo el selector btn1 que tambien va a ser usado para btn2 y btn3, el cual cuenta con las siguientes propiedades:

-	Display(inline-block) -> 
-	Backgound-color-> color de fondo el cual tendra un tono verde claro
-	Border-> el borde estara en cero 
-	Color->  para las letras de los botones sera un color blanco 
-	Text-align-> el texto sera centrado
-	Font size-> determina el tamaño de la letra el cual en este caso sera de 28px
-	Padding-> Tendra un espaciado de 20 px
-	Width-> tendra un tamaño de 200px 
-	Cursor->pointer lo cual hace referencia a que cuando mueva el raton por el boton me saldra una mano
-	Margin -> margen de 5px
-	Position-> relativa debido a que los botones alternan según la foto.

• Galeria.JS

  
•	Creamos una variable slideIndex que comienza en 1 a la cual procedemos a insertarla al método showDivs con el fin de darle ese valor.
•	Con el comando window.onload=function(), lo que hace referencia es a que cada ves que el usuario cargue la pagina este va a ser igual a una función la cual en este caso es iniciar, que esta llamada de manera recursiva.
•	La función iniciar iniciamos el index en 1 y al método showDivs también lo iniciamos en 1
•	Procedemos a crear el array [0] a [9] de nuestras imágenes, dentro del cual va a ir el nombre de cada imagen.
•	Inicializamos un for con una variable i en la posición 0 hasta valores menores a 5 en este caso llegaría solamente al 4 con un incremento de 1 mediante i++. Dentro del for colocamos nuestra función ramdomica en este caso se lo ha hecho 2 veces debido a que en el for se dividió el lenght del vector debido a que son 10 imágenes globales de las cuales solo van a ser presentadas 5, entonces para asegurarme de que se escojan de ambos grupos he decidido en colocar 2 veces la función ramdom, el ,0 hace referencia desde la posición a iniciar. Por último, llamamos a la función suffle a la cual le daremos el valor de nuestro array con el fin de que tenga las imágenes dentro de la función.
•	Colocamos un último for dentro de la función iniciar con el fin de que obtenga las imágenes con la posición ramdomica dentro del path donde se encuentren, esto se lo hizo mediante document.getElementById(i).src = “imágenes/+array[i]+.jpg” 
•	En la función plusDivs() procedemos a colocar  el parámetro n el cual va a ser ocupado como un acumulador que será llamado por la función showDivs
•	Nos Encontramos con el ultimo metodo el cual es showDivs mediante el cual vamos a poder bloquear a nuestros botones cuando lleguen a su tope, pero para conocer el tope necesitamos llamar a la clase mySlide la cual obtiene el lenght.
•	Comenzamos con un if x.lenght justamente para bloquear el botón o activarlo dependiendo de donde haya clickeado el usuario es decir, cuando el usuario llegue al lenght de un botón  siguiente se le bloquee debido a que no se encuentran mas elementos en ese botón , al realizar esto también me permite habilitarle el botón atrás ya que podrá regresar pero no adelantar. Todo esto se lo realiza mediante el atributo disable y un for el cual también interviene con la propiedad display block.
•	Después de haber realizado las validaciones anteriormente mencionadas.
5.Formulario
 
 
 
 •	En este pequeño fragmento podemos observar como procedemos a crear el documento html mediante el comando <!DOCYPE html>. 
•	Procedemos a crear la estructura básica de un documento html y mediante la etiqueta <html lang=”es” damos a entender que nuestra página será escrita en español.
•	Procedemos a crear nuestro encabezado mediante la etiqueta <head> dentro de ella vamos a colocar la estructura que va a tomar nuestra página html como lo harán las siguientes etiquetas: <title> la cual nos permitirá darle un título, en mi caso el nombre de Formulario.
•	Creamos la etiqueta meta que forma parte de nuestro encabezado de la página web, en donde indicamos que va a hacer referencia al formato de texto que va a tomar la web, en este caso utf-8. Finalmente, antes de cerrar la etiqueta head procedemos a referenciar nuestro archivo css en este caso “Form.css”.
- Se ocupo la etiqueta <h> para secciones o titulos.
- En el encabezado (header) se ocupo la etiqueta <nav> y <a href> para poder navergar clickeando en la imagen.

En este aside insertamos el segundo formulario. Para la elaboración del formulario vamos a neceseitar de las siguientes etiquetas:

- Form para especificar que es un formulario, dentro de esta etiqueta vamos a ocupar 1 propiedad denominada onsubmit la cual nos servira para llamar al metodo validar() este metodo me validad los campos obligatorios , mientras que el otro metodo EntrarPHP() , lo que me va a permitir es Entrar a la pagina PHP cuando este validado todo los campos del formulario.Para poder acceder al formulario tambien vamos a ocupar action=”Registro.php” , como su nombre lo dice es una accion que va a tomar cuando se lo requira.

- Fieldset para el contorno del formulario
- Legend para el título del formulario
- P para el texto
- Div para los labels
- Input para ingresar valores en las cajas de texto.Dentro de este input usamos type=”text” y un type=”password” para hacer las cajas de texto, mientras que en name colocamos los nombres de cada caja a los cuales se les da dimensiones mediante style=width,height.El último input que falta por mencionar es el button el cual me permite crear botones en el formulario el cual tiene un id=”btnValidar”.

- Dentro de las cajas de texto de cedula y telefono , se agrego el evento de onkeypress lo cual hace referencia a que si tecleamos letras dentro de estos campos, pues simplemente el teclado se va a bloquear y no va a dejarle ingresar nada al usuario hasta que no coloque solamente numeros.Para esto usamos una etiqueta script donde creamos una funcion llamada num a la cual se le mando un parametro n , una ves creada la funcion con su parametro se procede a crear una variable key en la cual vamos a guardar el carácter que el usuario teclee y para guardarla se uso .fromCharCode a la cual le mandamos el parametro key.Procedemos a crear una variable de numeros que va a obtenerme los valores numericos del 0 al 9 y ademas tambien creamos una variable de especiales el cual va a contener los caracteres como el espacio o las teclas de izquierda y derecha , ademas de tambien la tecla de suprimir.

-Creamos una bandera la cual se va a llamar teclado_especial y va a iniciar en false , pero en el caso de que el usuario pulse una de estas teclas se va activar y su estado va a pasar de false a true.Al igual que al final validamos que el usuario no ingrese numeros negativos para lo cual en el caso de que lo intente la bandera no lo permita poniendose su estado en false. 

-En las cajas de texto de los campos de nombres y apellidos es todo lo contrario solamente le permitira ingresar letras al usuario 

-Ya despues de haber cerrado la mayoria de etiquetas , se procede a llamar al archivo.js , el cual lleva el nombre de “Form.js”

- Ya en el footer solamente esta dado estilos lo cual se procedera a explicar en el archivo “Form.CSS”
• Form.CSS
  

•	En la clase logo simplemente lo que decimos es que va a estar ubicada en la parte izquierda del encabezado mediante la propiedad float:left
•	Avanzamos a la etiqueta header donde se definen las siguientes propiedades:

-	Baground-color: Definimos que nuestro fondo va a tener un tono grisado representado por afbdb363.
-	Height: le estamos diciendo que va a tener una altura de 100px 
-	Margin-top : el borde superior va a ser de -6px .

•	Procedemos a darle propiedades a las etiquetas input y label a las cuales no les vamos a dar una ublicacion exacta debido a que la propiedad float esta en none , para estas etiquetas se va a ocupar un tamaño de 100px 
•	Al body solamente le vamos a dar un color de fondo mediante background-color el cual tendra un color tono café claro , representado por bd9764c2.
•	El selector button tendra solamente un padding de cero.
•	La clase img1 tendra las siguientes propiedades:

-	Un alto(height) de 458px y un ancho(width) de 426px
-	Va a estar ubicado en la parte derecha mediante la propiedad float:right
-	Tiene un margen a la derecha(margin-right) de -422px
-	Un margen superior(margin-top) de 28px

•	Las etiqueta del borde del formulario fieldset va a tener las siguientes propiedades:
-	 Un tamaño(width) de un 12%
-	El margen superior(margin-top) sera de -468px
-	Va a estar ubicado en la parte derecha mediante la propiedad float:right
-	Su margen en el lado izquierdo(margin-left) va a ser de -265px

•	La etiqueta sola de input va a tener un tamaño(width) de 700px
•	Todas las etiquetas aside van a colocarse en la parte izquierda mediante float:left y van a tener un espaciado(padding) de 62px
•	El footer va a tener el mismo color del encabezado o de la etiqueta header , un espaciado de 67px y un margen superior de 491px
•	Habra una clase error la cual sera representado para los campos que no se han llenado los cuales son obligatorios .Esta clase tiene las siguientes propiedades:

-	Color : red -> hace referencia al color que va a tomar en este caso rojo
-	Font-size:8px -> Es el tamaño que tomara la fuente. 

•	Por ultimo tenemos la etiqueta h2 la cual simplemente va as tener un margen izquierdo de -251px y un margen superior de -37px

• Form.JS

 
•	Dentro del archivo de javascript nos encontramos con la línea document. getElementByID(“btnValidar”). addEventListener(“click”,Validar);

En esta parte lo que se está haciendo es obtener el elemento dado por el id btnValidar con él. addEventListener click lo que se está diciendo es que cuando yo pulse click se va a cumplir el método Validar y Todos los métodos de la imagen los cuales son: ValidarCedula, ValidarNombre, ValidarApellido, ValidarTelefono, ValidarFechaNacimiento,ValidarCorreo,ValidarContrasena y por ultimo EntrarPHP.

•	La primera Funcion es validar() , dentro de esta vamos a validar que todos los campos esten llenos o caso contrario el borde de las cajas de texto se apareceran en rojo y un mensaje de alerta sera visualizado para informarle al usuario que el formulario contiene errores.
•	Para poder validar tanto esta función como las demás del formulario vamos a ocupar una bandera que va a estar iniciada en true, en caso de que alguna función contenga un error se lo colocara en false.

 




•	Para validar solo el ingreso de letras creamos una funcion validarletras a la cual le mandamos un unico parametro elemento.Procedemos a crear un if en el cual vamos a tomar el  tamaño del valor del parametro elemento y le vamos a indicar que tiene que ser mayor a 0 , despues creamos una variable miAscci donde vamos a guardar los valores permitidos por asi decirlo.Creamos un if en el cual damos los rangos de las letras mayusculas y minusculas en formato ascii y el ==32 el cual hace referencia al espacio el cua sera la excepcion debido a que si puede ser utilizado,en el caso que sea verdadero , la bandera pasa a un estado de true caso contrario se queda en false.

 
•	Vamos a crear la funcion de ValidarCedula en la cual vamos a crear una variable ced en donde vamos a obtener el valor del elemento cedula mediante document.getElementById(“cedula”).value  creamos una variable que va a contener un arreglo con 2 variables las cuales van a ser suma,mul,chars de las cuales se van a iniciar con el patron 0,1 y despues tomaran el tamaño de la variable ced.Dentro de un for procedemos a crear una variable index, la cual va a iniciarse en 0 y se va ejecutar hasta  que el index sea menor a chars y con un incremento de 1 , procedera al calculo de la validacion ecuatoriana de la cedula bajo el ultimo digito.Por ultimp se procede a comprobar el tamaño del arreglo el cual debe ser igual a 10 ,en caso de serlo manda un mensaje de alerta diciendo que la cedula es valida o invalida según el calculo obtenido.

•	Creamos una funcion Validar nombre , dentro de ella procedemos a crear 2 variables , la primera para el primer nombre en este caso nombre1 y nombre2 para el caso del segundo nombre.En el nombre dos utilizamos un replace para los espacios mediante “”.Finalmente procedemos a realizar un if en donde preguntamos priemeramente si nuestro primer nombre es diferente de vacio y si es diferente de nombre 2 y aparte tambien si es que es diferente de vacio , entonces nos diga que nuestros nombres son validos y retornamos un true a nuestra bandera, caso contario nos manda un mensaje de alerta diciendo que nuestro nombre es invalido y nuestra bandera nos retorna un valor falso.

 
•	Creamos una funcion Validar apellido , dentro de ella procedemos a crear 2 variables , la primera para el primer nombre en este caso apellido1y apellido2 para el caso del segundo apellido.En el apellido dos utilizamos un replace para los espacios mediante “”.Finalmente procedemos a realizar un if en donde preguntamos priemeramente si nuestro primer apellido es diferente de vacio y si es diferente de apellido 2 y aparte tambien si es que es diferente de vacio , entonces nos diga que nuestros apellido son validos y retornamos un true a nuestra bandera, caso contario nos manda un mensaje de alerta diciendo que nuestro apellido es invalido y nuestra bandera nos retorna un valor falso.
•	Procedemos a crear una funcion de ValidarTelefono en donde creamos una variable ndigitos en este caso con el fin de capturar su valor mediante el document.getElementById(“telefono”).value
Y por ultimo preguntamos si el tamaño de telefono es igual a 10 , en caso de serlo nos devuelve que el telefono es valido con una bandera en true , caso contrario nos devuelve que es invalido y por supuesto la bandera toma un valor de falso.


 

•	Creamos una funcion ValidarFechaNacimiento donde ingresamos 2 variables la primera que va a ser utilizada como vector la cual lleva nombre de vFechaNac la cual va a ser llamda por el codigo o instancia document.getElementById(“fechaNacimmiento”).value , pero aquí vamos a aumentar un .split(/) , lo cual quiere decir que va a tomar / como texto con el fin de que no altere la validacion.Se procede a crear una nueva variable llamada fechaNac en la cual se va a instanciar un nuevo arreglo donde se mandaran los parametros de dia,mes,año. Dentro de un if con dia en la posicion 0 , mes en la posicion 1 y año en la 2.Finalmente mediante los gets obtenemos los valores de dia,mes y año y ya solamente se los iguala, si la sentencia es verdadera nos muestra un mensaje de alerta diciendo que es valida y ademas nuestra bandera cambia a true , mientras caso contrario muestra un mensaje de alerta diciendo que es invalido y el estado de la bandera pasa a false.

 

•	Procedemos a crear la funcion ValidarCorreo,primeramente creamos una variable vcorreo para capturar el valor de el correo obtenido mediante document.getElementById(“correo”).value.split(@) , con el punto split hacemos que el arroba forme parte de la cadena de texto y evitamos que el programa lo tome como un simbolo.En un if comparamos que sea mayor a 3 caracteres en caso de serlo pasa a otro if , sino simplemente me manda un alert indicando que el correo ingresado es invalido, si llegamos al siguiente if le exijimos que contenga alguno de los siguientes dominios “ups.edu.ec” o “est.ups.edu.ec”, si esto se cumple me manda un mensaje de alerta indicando que el correo es valido al igual que la bandera se pone en true , mientras que si no cumple con la condicion establecida , simplemente me manda un mensaje de alerta indicando que el correo es invalido y me pone la bandera en false.


 

 

•	Por ultimo creamos nuestra ultima funcion la cual es validar contraseña en donde creamos una variable pass en referencia a la password y la captutamos con document.getElementById(“pass”).value.
•	Primeramente comprobamos que la password tenga mas de 8 caracteres ya en este if introducimos nuestras banderas de mayuscula,minuscula,numero y simbolo en un valor de false.
•	Procedemos a anilizar cada una de estas posibilidades en donde dentro del lenght de la contraseña se analiza lo siguiente mediante ifs:
-	Las mayusculas en ascii que van desde 65 hasta 90 
-	Las minusculas en ascii que van desde 97 hasta 122
-	Las numeros en ascii que van desde 48 hasta 57
-	Y el resto de caracteres ascii corresponden a simbolos

Cabe recalcar que cada carácter es obtenido mediante charCodeAt.

•	Ya para finalizar se comparan todas las banderas con un igual a true , en caso de serlo pues la contraseña es valida , sin embrago si alguna bandera esta en false , pues significa que la contraseña es invalida, estos mensajes son mostrados mediante alerts.

• Registro.PHP

 
 

•	Creamos la etiqueta html a la cual le damos un background tono café claro mediante la propiedad style
•	Creamos nuestro encabezado con el tieulo Prueba de PHP y dentro del body colocamos nuestro contenido php el cual esta declarado solo con 2 etiquetas h1 para el titulo , al cual se le aplicaron propiedades css mediante style, mientras que la otra etiqueta se la ocupo para el boton el cual lleva las mismas propiedades que el de la galeria.
•	Por ultimo en la parte de javaScript lo unico que se hizo fue validar las banderas de los metodos de validacion , una vez cumplido se va a la etiqueta form donde se ejecuta el php , para verlo se tiene que revisar la pagina “Form.html”

Link Github: https://github.com/KevinGodoy98/Practica03-Validacion-De-Datos.git

RESULTADO(S) OBTENIDO(S):
Validaciones Archivos:

CALCULADORA:

 

 
GALERIA:
 
 
FORMULARIO:
 

 
Ventanas:

 

 


 

 
Validaciones JavaScript:
CALCULADORA (OPERACIONES ARITMETICAS):
 
RESPUESTA SUMA:
 
RESTA:

 
RESPUESTA RESTA:
 
MULTIPLICACION:

 
RESPUESTA MULTIPLICACION:
 
DIVISION:

 
RESPUESTA DIVISION:
 

VALIDACION FORMULARIO:

CedulaValida:


 
Nombre Valido:

 
Apellido Valido:

 
Telefono Valido:
 
Fecha de Nacimiento Valida:

 
Correo Valido:
 
Contraseña Valida:


 
Click Aceptar y me manda al php
 
Cedula Invalida:

 
Nombre Invalido:
 
Apellido Invalido:

 
Telefono Invalido:
 
Fecha de Nacimiento:

 
Correo Invalido:
 
Contraseña Invalida:

 
VALIDACION FORMULARIO (Campos Obligatorios):

CONCLUSIONES: Se logro comprender la manera de organizar sitios web basados en el lenguaje de etiquetado HTML, CSS y JavaScrip.
RECOMENDACIONES: Probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari.

Nombre de estudiante:                     Kevin Godoy


Firma de estudiante:                      Kevin Godoy           

 

 
