const prompt = require("prompt-sync")()

/* Exercice 1 

number = prompt("Taper un nombre: (il peut etre positif ou négatif)")
if (number > 0) {
    console.log('Ce nombre est positif');
    
}else {
    console.log('Ce nombre est négatif');
    
}
*/

/* Exercice 2

password = prompt("Entrez votre mot de passe: ")
if (password === "12345") {
    console.log("Accès autorisé");
}
else {
    console.log("Accès refusé");
}
*/

// Exercice 3

/* 
numberOne = prompt("Taper un premier nombre: ")
numberTwo = prompt("Taper un second nombre: ")
numberThree = prompt("Taper un dernier nombre: ")
if (numberOne > numberTwo && numberOne > numberThree) {
    console.log("Le plus grand nombre est " + numberOne)
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log("Le plus grand nombre est " + numberTwo);
} else {
    console.log("Le plus grand nombre est " + numberThree);
}
*/

// Exercice 4

/*
daynum = prompt("Taper un nombre compris entre 1 et 7: ")
if (daynum == 1) {
    console.log("Nous sommes lundi");
} else if (daynum == 2) {
    console.log("Nous sommes mardi");
    
} else if (daynum == 3) {
    console.log("Nous sommes mercredi");
    
} else if (daynum == 4) {
    console.log("Nous sommes jeudi");
    
} else if (daynum == 5) {
    console.log("Nous sommes vendredi");
        
} else if (daynum == 6) {
    console.log("Nous sommes samedi");
    
} else if (daynum == 7) {
    console.log("Nous sommes dimanche");
    
} else {
    console.log("Nombre invalide");
    
}
*/

// Exercice 1 
/*
valueOne = prompt("Tapez un nombre: ")
valueTwo = prompt("Tapez un second nombre: ")
if (valueOne < valueTwo) {
    console.log(valueOne + " est la plus petite des deux valeurs");
    
} else {
    console.log(valueTwo + " est la plus petite des deux valeurs");
}
*/
// Exercice 2
/*
valueOne = prompt("Tapez un nombre positif ou négatif: ")
valueTwo = prompt("Tapez un second nombre positif ou négatif: ")
result = valueOne * valueTwo
if (result < 0) {
    console.log(result + " est une valeur négative");
    
} else if (result > 0) {
    console.log(result + " est une valeur positive");
}
*/
// Exercice 3
/*
valueUser = prompt("Entrez un chiffre qui représente une température (chiffre négatif ou positif): ")
if (valueUser <= 0) {
    console.log("L'eau est à l'état de glace");
} else if (valueUser >= 100) {
    console.log("L'eau est à l'état gazeux");
} else {
    console.log("L'eau est à l'état liquide");
}
*/
// Exercice 4
/*
frameval = prompt("Entrez le nombre de cadres commandés: ")
if (frameval <= 10) {
    console.log("Le prix total est de: " + frameval*20);
    
} else if (frameval >= 11 && frameval <= 30)  {
    let temp = frameval - 10
    console.log("Le prix total est de: " + 200 + frameval*15);
    
} else {
    let temp = frameval - 30
    console.log("Le prix total est de: " + 500 + frameval*5);
    
}
*/
// Exercice 5
/*
valueAge = prompt("Entrez votre age: ")
valueGender = prompt("Quel est votre genre? (homme ou femme?)")
if (valueAge >= 20 && valueGender === "homme") {
    console.log("Vous etes imposable");
} else if (valueGender === "femme" && valueAge >= 18 && valueAge <= 35) {
    console.log("Vous etes imposable");
} else {
    console.log("Vous n'etes pas imposable");
    
}
*/

