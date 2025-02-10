// Exercice 1 :
// Créez une fonction appelée saluer qui prend un nom en paramètre et retourne un message de
// salutation personnalisé. Par exemple, si le nom est "Alice", la fonction doit retourner "Bonjour,
// Alice!"

// function saluer(nom) {
//     return "Bonjour " + String(nom) + " !"
// }
// console.log(saluer("Alice"))

// Exercice 2 :
// Créez une fonction appelée estAdulte qui prend un âge en paramètre et retourne true si la personne
// est majeure (18 ans ou plus), sinon false.

// function estAdulte(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(estAdulte(19));

// Exercice 3 :
// Créez une fonction appelée inverserMot qui prend un mot en paramètre et retourne ce mot à
// l'envers.

// function inverserMot(mot) {
//     for (let i = mot.length - 1; i >= 0; i--) {
//         console.log(mot[i])
//     }
// }
// console.log(inverserMot("Salut"));

// Exercice 4 :
// Créez une fonction appelée genererNombreAleatoire qui génère et retourne un nombre aléatoire
// entre 1 et 100 à chaque appel de la fonction.

// function genererNombreAleatoire(random) {
//     return Math.random() * random
// }
// console.log(genererNombreAleatoire(100));

// Algorithmie 

// Exercice 1 : 1. Compteur de Lettres
//Créez une fonction countLetters qui prend une chaîne de caractères et retourne le nombre de lettres dans  cette chaîne.

// function countLetters(letters) {
//     return letters.length
// }
// console.log(countLetters('Hello'))

// Exercice 2. Répétiteur de Mots
// Créez une fonction repeatWord qui prend un mot et un nombre en paramètres, et retourne le mot répété ce nombre de fois.

// function repeatWord(word, n) {
//     if (n < 0) {
//         return "";
//     }
//     return word.repeat(n);
// }    
// console.log(repeatWord("Hello",3));

// Exercice 3. Inverser une Chaîne
// Créez une fonction reverseString qui prend une chaîne et retourne cette chaîne inversée.

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("Bonjour"))

// Exercice 4. Inverser une Chaîne
// Créez une fonction calculIMC qui prend le poids (en kg) et la taille (en m) d'une personne et retourne son IMC.

// function calculIMC(weight, size) {
//     return Number(((weight / (size * size)) * 100))
// }
// console.log(`Votre IMC est de: ` + calculIMC(80, 180) * 100)

// Exercice 5. Générateur de Pseudo
// Créez une fonction genererPseudo qui prend le prénom et l'année de naissance d'une personne et retourne un pseudo.
// exemple Nom = "Merveille", Prenom = "Alice" AnneeDeNaissance = 1989, la fonction retournera "MerveilleAlice1989"

function genererPseudo(surname, year) {
    let words = ['Merveille', 'Super', 'TopGun', 'Wonder']
    let word = words[Math.floor(Math.random() * words.length)]
    return word + surname + year
}
console.log("Votre pseudo est: " + genererPseudo('Marion', 1990));

// Exercice 6. Générateur de Salutations Personnalisées
// Créez une fonction saluerPersonne qui prend un nom et une heure en paramètres et retourne une salutation appropriée selon l'heure de la journée.
// exemple : Nom = toto, heure = 9, la fonction retournera // Salut toto ! Bon debut de journée. 

function saluerPersonne(name, hour) {
    let greeting
    if (hour >= 5 && hour < 12) {
        greeting = "Salut " + name + ", bonne journée !"
    } else if (hour >= 12 && hour < 18) {
        greeting = "Salut " + name + ", bon après-midi !"
    } else if (hour >= 18 && hour < 24) {
        greeting = "Salut " + name + ", bonne soirée !"
    }
    return greeting
}
console.log(saluerPersonne("Tom", 21))

// Exercice 7. Compteur de Voyelles
// Créez une fonction compterVoyelles qui prend une chaîne de caractères et retourne le nombre de voyelles.

function compterVoyelles(mot) {
    let vowels = "aeiouyAEIOUY"
    let count = 0
    for (let i = 0; i < mot.length; i++) {
        if (vowels.indexOf(mot[i]) != -1) {
            count++
        }
    }
    return count
}

let text = "Salut les gars!"
let nbrvowels = compterVoyelles(text)
console.log("Le nombre de voyelles dans la phrase est: " + nbrvowels);
