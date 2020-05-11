var slideIndex = 1;
showDivs(slideIndex);

window.onload = function() {
	iniciar();
}

function iniciar() {
	slideIndex = 1;
	showDivs(1);
	array = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
	var val;
	for(i = 0; i < 5; i++) 
		array.splice(Math.floor(Math.random() * array.length), 0);
		array.splice(Math.floor(Math.random() * array.length), 0);
	shuffle(array);

	for(i = 0; i < 5; i++) 
		document.getElementById(i).src = "imagenes/"+ array[i] +".jpg";
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n == x.length)
		document.getElementById('btn3').disabled = true;
	else
		document.getElementById('btn3').disabled = false;

	if (n == 1) 
		document.getElementById('btn1').disabled = true;
	else
		document.getElementById('btn1').disabled = false

	for (i = 0; i < x.length; i++)
		x[i].style.display = "none";

	x[slideIndex-1].style.display = "block"; 
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}