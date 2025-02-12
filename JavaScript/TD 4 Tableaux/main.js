const prompt = require("prompt-sync")()

// Exercice 1 :
// Créez une fonction appelée sommeTableau qui prend un tableau d'entiers en paramètre et retourne
// la somme de tous les éléments du tableau.

// let tab = [1, 2, 3, 4]

// function sommeTableau(tab) {
//     let sum = 0
//     for (let i = 0; i < tab.length; i++) {
//         sum += tab[i]
//     } 
//     return sum
// }

// console.log(sommeTableau(tab));

// Exercice 2 :
// Créez une fonction appelée filtrerPairs qui prend un tableau d'entiers en paramètre et retourne un
// nouveau tableau contenant uniquement les nombres pairs du tableau d'origine.



// function filtrerPairs(num) {
//     let table = []
//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0) {
//             table.push(num[i])
//         } 
//     }
//     return table
// }
// console.log(filtrerPairs([1,2,3,4,5,6,7,8,9]));

// Exercice 3 :
// Créez une fonction appelée trouverMaximum qui prend un tableau d'entiers en paramètre et
// retourne le nombre maximum dans le tableau.

// function trouverMaximum(table) {
//     let maxi = table[0]
//     for (let i = 0; i < table.length; i++) {
//         if (table[i] > maxi) {
//             maxi = table[i]
//         }
//     }
//     return maxi
// }
// let table = [12, 13, 14, 16, 18, 1520, 10]
// console.log(`Le nombre maximum du tableau est: ${trouverMaximum(table)}`);

// Exercice 4 :
// Créez une fonction appelée inverserTableau qui prend un tableau en paramètre et retourne un
// nouveau tableau contenant les éléments du tableau d'origine inversés.

// function inverserTableau(tableau) {
//     let invert = []
//     for (let i = tableau.length - 1; i >= 0; i--) {
//          invert.push(tableau[i])

//     } return invert
// }

// let tableau = [12, 13, 14, 15]
// console.log(inverserTableau(tableau)); 

//  Algo TD 4 Exercice 1 :
// Écrire un algorithme permettant de saisir 5 réels au clavier, les stocker dans un tableau,
// calculer leur somme et les afficher avec leur somme à l’écran.
// function calcSum() {
//     let tableau = []
//     for (let i = 0; i < 5; i++) {
//         let number = parseFloat(prompt("Entrez un nombre réel: "))
//         tableau.push(number)
//     }
//     let sum = 0
//     for (let i = 0; i < tableau.length; i++) {
//         sum += tableau[i]
//     }
//     console.log("Les nombres tapés sont: " + tableau);
//     console.log("La somme totale des nombre est: " + sum);
// }

// calcSum()

// Exercice 2 :
// Écrire un algorithme permettant de calculer la somme, produit et moyenne des éléments d’un
// tableau.

// function calc() {
//     let sum = 0
//     let product = 1
//     for (let i = 0; i < tableau.length; i++) {
//         sum += tableau[i]
//         product *= tableau[i]
//     }
//     let mean = sum / tableau.length
//     console.log("La somme totale des nombres est: " + sum);
//     console.log("Le produit total des nombres est: " + product);
//     console.log("La moyenne des nombres est: " + mean);
// }
// tableau = [1, 2, 3, 4, 5, 6, 7, 8]
// calc(tableau)

// Exercice 3 :
// Écrire un algorithme permettant de calculer le nombre de fois pour lesquelles un élément
// apparaît dans un tableau.

// function appear(element, table) {
//     let count = 0
//     for (let i = 0; i < table.length; i++) {
//         if (element == table[i]) {
//             count ++
//         }
//     } 
//     console.log(`L'élément ${element} est apparu ${count} fois`)
// }

// let table = [1,2,3,4,1,1]
// appear(1, table)

// Exercice 4 :
// Écrire un algorithme permettant d’insérer un élément dans un tableau (au début, au milieu
// ou à la fin).

// function insert(table, newElement, position) {
//     if (position === "start") {
//         for (let i = table.length; i > 0; i--) {
//             table[i] = table[i - 1]
//         }
//         table[0] = newElement
//     } else if (position === "end") {

//         table[table.length] = newElement
//     } else {
//         let index = Math.floor(table.length / 2)
//         for (let i = table.length; i > index; i--) {
//             table[i] = table[i - 1]
//         }
//         table[index] = newElement
//     }
//     console.log(`L'élément ${newElement} a été ajouté au tableau: ${table}`);

// }

// let table = [1, 2, 3, 4, 5, 6, 7, ]
// let newElement = 45
// insert(table, newElement, 'start')
// insert(table, newElement, 'mid')
// insert(table, newElement, 'end')

// Exercice 5 :
// Écrire un algorithme permettant de supprimer un élément dans un tableau.

// function erase(element, tableau) {
// newtableau = []
// for (let i = 0; i < element.length; i++) {
//     if (i == tableau) {
//         continue
//     } newtableau.push(element[i])
// } return newtableau
// }

// let newtableau = [1, 2, 3, 4, 5, 6, 7,]
// newtableau = erase(newtableau, 3)
// console.log(newtableau);

// Exercice 6 :
// Écrire un algorithme permettant de trier par ordre croissant les éléments d’un tableau.

// function trier(tableau) {
//     let temp = null
//     for (let i = 0; i < tableau.length; i++) {
//         for (let j = 0; j < tableau.length; j++) {
//             if (tableau[j] > tableau[j+1]) {
//                 temp = tableau[j]
//                 tableau[j] = tableau[j+1]
//                 tableau[j+1]=temp
//             }
//         }
//     } 
//     return tableau

// }
// let tableau = [1, 2, 8, 4, 12, 6, 7,]
// tableau = trier(tableau)
// console.log(tableau);

// Exercice 7 :
// Écrivez un algorithme constituant un tableau, à partir de deux tableaux de même longueur
// préalablement saisis. Le nouveau tableau sera la somme des éléments des deux tableaux de
// départ.

// function sumTab(tableOne, tableTwo) {
//     let newtable = []
//     for (let i = 0; i < tableOne.length; i++) {
//         newtable.push(tableOne[i] + tableTwo[i])
//     }
//     return newtable
// }
// let tableOne = [2, 3, 4, 8]
// let tableTwo = [4, 5, 6, 7]
// newtable = sumTab(tableOne, tableTwo)
// console.log(newtable);

// Exercice 8 :
// Toujours à partir de deux tableaux précédemment saisis, écrivez un algorithme qui calcule le
// schtroumpf des deux tableaux. Pour calculer le schtroumpf, il faut multiplier chaque élément
// du tableau 1 par chaque élément du tableau 2, et additionner le tout. Par exemple si l'on a :
// 2 4 5
// 3 1
// Le Schtroumpf : 2*3 + 2*1 + 4*3 + 4*1 + 5*3 + 5*1 = 44

// function schtroumpf(tableOne, tableTwo) {
//     let result = 0;
//     for (let i = 0; i < tableOne.length; i++) {
//         for (let j = 0; j < tableTwo.length; j++) {
//             let product = tableOne[i] * tableTwo[j];
//             result += product;
//         }
//     }
//     return result;
// }
// let tableOne = [7, 8, 5];
// let tableTwo = [3, 1, 7];
// let result = schtroumpf(tableOne, tableTwo);
// console.log(`Le schtroumpf: ${result}`);


// Exercice 9 :
// Écrire un algorithme permettant de saisir les notes d'une classe, renvoie la plus grande valeur
// en précisant quelle position elle occupe dans le tableau et renvoie le nombre de notes
// supérieures à la moyenne de la classe.
function student() {
    let grades = []
    let nbGrade = parseInt(prompt("Combien de notes voulez vous taper?"))

    for (let i = 0; i < nbGrade; i++) {
        let grade = Number(prompt(`Entrez la note ${i + 1} `))
        grades.push(grade)
    }
    console.log("Les notes tapées sont: ", grades);

    let gradeMax = grades[0]
    let posMax = 0
    let sum = 0
    let numSup = 0

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > gradeMax) {
            gradeMax = grades[i]
            posMax = i
        } sum += grades[i]
    } 
    
    let mean = sum / grades.length

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > mean) {
            numSup ++
        }
    }
    console.log(`La note Max est: ${gradeMax}, à la position: ${posMax + 1}`);
        console.log(`Le nombre de notes supérieures à la moyenne (${mean}) est: ${numSup}`)
    
}

student()