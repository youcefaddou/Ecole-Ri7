const prompt = require("prompt-sync")()
// Exercice 1
/*
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
*/

// Exercice 2 
// let result = 0
// for (let i = 1; i < 100; i++) {
//     result += i
// }



/* let time = prompt("Entrez un nombre pour déclencher un compte à rebours:")
for (let i = time; i >= 0; i--) {
    console.log(i);  
}
*/

// Exercice 3
/*
const choice = Number(prompt("entrez un nombre"))


for (let i = 1; i <= 10; i++) {
    const produit = i * choice;
console.log(`${choice} x ${i} = ${produit}`);
}
*/

// Exercice 4 

// let espace = "" 

// for (let i = 0; i < 5; i++) {
//     espace +=  "1"
//     console.log(espace);
// }


/*TD 2 Algo Exercice 1 Lors d’un événement sportif, on souhaite saisir par ordre d’arrivée le numéro de chaque
concurrent, ainsi que son temps. Le processus doit continuer jusqu’à ce que l’on saisisse le
numéro de dossard -1. */


// let arrival = 1
// let numdossard = 0
//const stop = -1
// while (numdossard != -1) {
//     numdossard = Number(prompt("entrez un numéro de dossard :"))
//     if (numdossard == stop) {
//         break;
//     }
//     time = Number(prompt("Entrez le temps en secondes "))
//     console.log("Le concurrent numéro " + numdossard + " a terminé en " + time + " secondes.");
// }


/* Exercice 2 Écrire un algorithme qui permet de simuler les affichages d’un compte à rebours à partir d’un
temps (minutes, secondes) donné. */

// let minute = parseFloat(prompt('Entrez le nombre de minutes: '))
// let seconde = parseFloat(prompt('Entrez le nombre de secondes: '))
// for (let i = minute * 60 + seconde; i>= 0 ; i--) {
//     let minutes = i / 60;
//     let secondes = i % 60;

//     if (minutes < 0) {
//         minutes = 0
        
//     }
//     console.log(minutes + " min" + parseFloat(secondes) + " sec")
// }

// Correction

// let minute = Number(prompt('Entrez le nombre de minutes: '))
// let seconde = Number(prompt('Entrez le nombre de secondes: '))
// for (let i = minute; i >= 0; i--) {
//     for (let j = seconde; j >= 0; j--) {
//         console.log(`${i}min : ${j}s`)
//     }
//     seconde = 59
// }

/*Exercice 3 A la naissance de Paul, son père lui ouvre un compte bancaire. Ensuite, à chaque anniversaire,
il verse sur son compte 150 euros, auxquels il ajoute le triple de l’âge de Paul. Par exemple,
lorsqu’il a un an, il lui verse 153 euros, 2 ans, il lui verse 156 euros. Écrire un algorithme qui
permet de déterminer quelle somme aura Paul lors de son nième anniversaire.*/

/*
const annee = Number(prompt("Entrez l'age de Paul: "))
let capital = 0

for (i = 1; i <= annee; i ++ ) {
    capital += 150 + 3 * i
}
console.log("Montant total d'argent après " + annee + " années:" + capital + " euros");
*/

/* Exercice 4 Écrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres.
Modifiez ensuite l’algorithme pour que le programme affiche en quelle position avait été saisi
ce nombre.*/


// let numberMax = 0
// let pos = 0
// for (let i = 0; i < 5; i ++ ) {
//     let numbers = parseInt(prompt("Entrez 5 nombres aléatoires consécutivement: "))
//     if (numbers > numberMax) {
//         numberMax = numbers
//         pos = i + 1
//     }
// }
// console.log(`Le plus grand nombre est ${numberMax} à la ${pos} position`)


/* Exercice 5 Écrire un algorithme qui demande de saisir au clavier la taille de 6 personnes et qui calcule le
nombre de personnes dont la taille est plus petite que 2,10 m. */
/*
let oversize = 210
let count = 0
for (let i = 0; i <= 6; i++) {
    let size = parseInt(prompt("Entrez la taille en cm de 6 personnes: ")) 
        if (size < oversize) {
        count ++
    }
}
console.log(`Il y a ${count} personne(s) plus petite que 2m10`);
*/

/* Exercice 6 Un vote électronique est organisé, un ordinateur permet de saisir chaque vote et le
comptabilise. Les électeurs peuvent répondre par O(oui), N(non) ou B(blanc). Écrire un
algorithme qui demande à n électeurs leur vote et écrit à la fin du vote le pourcentage de Oui,
Non et de votes blancs. */

/*
let O = 0
let N = 0
let B = 0
let nbVote = parseInt(prompt("Combien de personnes vont voter ? "));
for (let i = 1; i < nbVote; i++) {
    let vote = prompt("Entrez votre vote: O(oui), N(non) ou B(blanc): ");
    if (vote === "O") {
        O++
    } else if (vote === "N") {
        N++
    } else if (vote === "B") {
        B++
    } else {
        console.log("Votre vote est invalide: veuillez taper o(oui), n(non) ou b(blanc): (en lettre majuscule) ");
        i--
    }
}
let totalVotes = O + N + B
let resultYes = (O / totalVotes) * 100
let resultNo = (N / totalVotes) * 100
let resultNeutral = (B / totalVotes) * 100
console.log(`Voici le décompte des votes: ${resultYes}% de votes Oui, ${resultNo}% de votes Non et ${resultNeutral}% de votes Blanc `);
*/

/* Exercice 7 Écrire un programme qui lit un entier n puis affiche les nombres premiers. On appelle un
nombre premier tout nombre qui ne peut être divisé que par 1 ou par lui-même. */
/*
let prime = parseInt(prompt("Entrez un nombre entier: "))
for (i = 1; i <= prime; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false
            break
        }
    } if (isPrime) {
        console.log(i);
    }
}
*/


/* Exercice 8 Écrire un algorithme qui demande un nombre de départ et qui ensuite affiche les six nombres
suivants en utilisant la boucle Répéter jusqu’à (for) et Tant que. (while) */
/*
let startNum = parseInt(prompt("entrez un numéro: "))
console.log(startNum);

while (isNaN(startNum)) {
    startNum = parseInt(prompt("entrez un numéro valide: "))
}
for (let i = startNum + 1; i <= startNum + 6; i++) {
    console.log(i)
}
*/

/* Exercice 9 Un garage à Paris contient 50 voitures, ce nombre augmente chaque année de 100 voitures.
Un autre à Nantes possède 200 voitures qui augmentent de 12% par an.
Écrire un algorithme qui permet de déterminer dans combien d’années le nombre de voitures
dans le garage à Paris dépassera celles du garage à Nantes. */
/*
let Paris = 50
let Nantes = 200
let years = 0

while (Paris <= Nantes) {
    Paris += 100
    Nantes += (Nantes * 12) / 100
    years ++
}
console.log(`Le nombre de voitures à Paris a depassé celui de Nantes en ${years} ans.`);
*/

/* Exercice 10 Écrire un algorithme permettant de taper un entier n, puis qui calcule le produit des carrés
des n premiers entiers pairs.
Par exemple : si n= 4, on affichera : 2² x 4² x 6² x 8² = 147456  */


// let n = parseInt(prompt("Tapez un nombre entier: "))
// let prod = 1
// for (let i = 0; i < n; i++) {
//     let nbPair= 2 * (i + 1)
//     prod *= nbPair * nbPair
// }
// console.log(`${prod}`)



