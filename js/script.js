
/// Fibonacci ///
const miArreglo = [];
for (let j = 0; j < 17; j++) {
	if (j === 0) miArreglo.push(0);
	else if (j === 1) miArreglo.push(1);
	else miArreglo.push(miArreglo[j - 1] + miArreglo[j - 2]);
}
document.write("<p class=\"card-container--title\"><strong>FIBONACCI</strong>")
document.write("<br><br>");
document.write("<li><strong>SECUENCIA DE NUMERO FIBONACCI ENTRE 0 Y 1000</strong></li>");
document.write("<p class=\"card-container--text\">",miArreglo + "</p>");
document.write("<br>");

/// FIn Fibonacci ///

/// Numeros pares e Impares ///
let Pares = [];
let Impares = [];
for (let k = 0; k < miArreglo.length; k++) {
	if ((miArreglo[k] % 2) == 0) Pares.push(miArreglo[k]);
	else Impares.push(miArreglo[k]);
}
document.write("<li><strong>NUMEROS PARES FIBONACCI ENTRE 0 Y 1000</strong></li>");
document.write("<p class=\"card-container--text\">",Pares + "</p>");
document.write("<li><strong>NUMEROS IMPARES FIBONACCI ENTRE 0 Y 1000</strong></li>");
document.write("<p class=\"card-container--text\">",Impares + "</p>");
/// Fin Pares e Impares de Fibonacci ///



/// ARREGLO EN MINUSCULAS ///
document.write("<p class=\"card-container--title\"><strong>ARREGLOS</strong>")
document.write("<li><strong>ARREGLO DE STRINGS ORIGINAL EN MINUSCULAS</strong></li>");
let pokeones = ["Pikachu","Charmander","Bulbasaur","Squirtle",]
document.write("<p class=\"card-container--text\">",pokeones + "</p>")
/// FIN ARREGLO EN MINUSCULAS ///


/// ARREGLO EN MAYUSCULAS ///
document.write("<li><strong>NUEVO ARREGLO DE STRINGS EN MAYUSCULAS</strong></li>");
let pokeonesMayu = pokeones.map( (user) => { return user.toUpperCase(); });
document.write("<p class=\"card-container--text\">",pokeonesMayu + "</p>");
/// FIN ARREGLO EN MAYUSCULAS ///
