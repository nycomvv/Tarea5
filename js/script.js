
/// Fibonacci ///
const miArreglo = [];
for (let j = 0; j < 17; j++) {
	if (j === 0) miArreglo.push(0);
	else if (j === 1) miArreglo.push(1);
	else miArreglo.push(miArreglo[j - 1] + miArreglo[j - 2]);
}
document.write("<p class=\"card-container--title\"><strong>1. FIBONACCI</strong></p>");
document.write("<br><br>");
document.write("<p class=\"card-container--subtitle\">a. SECUENCIA DE NUMERO FIBONACCI ENTRE 0 Y 1000</p>");
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
document.write("<p class=\"card-container--subtitle\">b. NUMEROS PARES FIBONACCI ENTRE 0 Y 1000</p>");
document.write("<p class=\"card-container--text\">",Pares + "</p>");
document.write("<p class=\"card-container--subtitle\">c. NUMEROS IMPARES FIBONACCI ENTRE 0 Y 1000</p>");
document.write("<p class=\"card-container--text\">",Impares + "</p>");
/// Fin Pares e Impares de Fibonacci ///



/// ARREGLO EN MINUSCULAS ///
document.write("<p class=\"card-container--title\"><strong>2. ARREGLOS</strong></p>")
document.write("<p class=\"card-container--subtitle\">ARREGLO DE STRINGS ORIGINAL EN MINUSCULAS</p>");

const marvelCharactersNames = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Black Panter",
    "Wolverine",
    "Captain Marvel",
    "Doctor Strage"
];

document.write("<p class=\"card-container--text\">",marvelCharactersNames + "</p>")
/// FIN ARREGLO EN MINUSCULAS ///


/// ARREGLO EN MAYUSCULAS ///
document.write("<p class=\"card-container--subtitle\">NUEVO ARREGLO DE STRINGS EN MAYUSCULAS</p>");
let pokeonesMayu = marvelCharactersNames.map( (user) => { return user.toUpperCase(); });
document.write("<p class=\"card-container--text\">",pokeonesMayu + "</p>");
/// FIN ARREGLO EN MAYUSCULAS ///

document.write("<p class=\"card-container--title\"><strong>3. MARVEL</strong></p>")

// Array of Marvel Characters
const marvelCharacters = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain America",
      realName: "Steve Rogers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hulk",
      realName: "Bruce Banner",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hawkeye",
      realName: "Clint Barton",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Panther",
      realName: "T'Challa",
      height: 6.0,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Wolverine",
      realName: "James Howlett",
      height: 5.3,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain Marvel",
      realName: "Carol Danvers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Doctor Strange",
      realName: "Stephen Strange",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
  ];
  
/// Personajes Marvel
document.write("<p class=\"card-container--subtitle\">PERSONAJES MARVEL ALTURA 6.2</p>")
marvelCharacters 
    .filter((personaje) => personaje.height === 6.2).map((personaje) =>
        document.write("<p class=\"card-container--text\">" + "name: "+ personaje.name
					 + " --  height: " + personaje.height + "</p>")
    );


	