
/// Fibonacci ///
const miArreglo = [];
for (let j = 0; j < 17; j++) {
	if (j === 0) miArreglo.push(0);
	else if (j === 1) miArreglo.push(1);
	else miArreglo.push(miArreglo[j - 1] + miArreglo[j - 2]);
}
document.write("Numeros entre 0 y 1000 <br>");
document.write(miArreglo);
document.write("<br><br>");

/// FIn Fibonacci ///

/// Numeros pares e Impares ///
let Pares = [];
let Impares = [];
for (let k = 0; k < miArreglo.length; k++) {
	if ((miArreglo[k] % 2) == 0) Pares.push(miArreglo[k]);
	else Impares.push(miArreglo[k]);
}
document.write("Numeros pares entre 0 y 1000 <br>");
document.write(Pares);
document.write("<br><br>Numeros Impares entre 0 y 1000 <br>");
document.write(Impares);
/// Fin Pares e Impares de Fibonacci ///



/// Arreglo todo a Mayusculas ///

document.write("<br><br>");
document.write("Arreglo  Original todo en minusculas");

let pokeones = [
	"Pikachu",
	"Charmander",
	"Bulbasaur",
	"Squirtle",
]

document.write("<br><br>");
document.write(pokeones)
document.write("<br><br>");
document.write("Arreglo Nuevo todo en Mayusculas");
document.write("<br><br>");

let pokeonesMayu = pokeones.map( (user) => {
	return user.toUpperCase();
});
document.write(pokeonesMayu);

