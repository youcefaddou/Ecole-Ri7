// Introduction
// Le projet consiste en la création d'un jeu textuel très simple basé sur des choix multiples. Le
// jeu doit être exécutable en ligne de commande à l'aide de Node.js. L'objectif est de créer
// une expérience interactive pour l'utilisateur, où ce dernier prend des décisions à chaque
// étape, influençant le cours de l'histoire.

// Fonctionnalités du Jeu
// Le jeu suit un scénario linéaire avec un nombre limité d'étapes.
// À chaque étape, le joueur fait un choix parmi deux options prédéfinies.

// Interaction Utilisateur :
// Afficher un texte descriptif pour chaque étape, décrivant la situation actuelle du joueur.
// Proposer au joueur deux choix clairs à chaque étape.
// Attendre l'entrée utilisateur pour prendre une décision.

// Gestion des Choix :
// Valider l'entrée utilisateur pour s'assurer qu'elle correspond à l'une des options proposées.
// Avertir l'utilisateur en cas d'entrée incorrecte et lui redemander de faire un choix valide.

// Affichage des Résultats :
// Afficher le résultat de chaque choix fait par le joueur après chaque étape.
// Fournir un message de fin de partie, résumant les choix du joueur et l'issue de l'histoire.

// Technologies Utilisées :
// JavaScript (ES6+)
// Node.js pour l'exécution en ligne de commande

// Contraintes Techniques :
// L'application doit être uniquement en mode console, sans interface graphique.

// Livraisons Attendues :
// Code source du jeu correctement commenté et structuré.
// Le jeu doit être capable de gérer des erreurs d'entrée utilisateur et de guider l'utilisateur
// pour qu'il fasse un choix valide.

const prompt = require("prompt-sync")()

const steps = [
    ["Vous vous réveillez sur une planète inconnue après avoir atteri d'urgence...Le choc de l'atterissage vous a fait perdre conscience... vous vous révéillez. Que faites-vous?", "Explorer la zone", "Chercher de l'eau", "Rechercher des habitants", "Inspecter votre vaisseau"],
    ["Après cela, vous trouvez un lac d'eau potable. Cela tombe bien, vous avez soif... Que faites-vous?", "Boire de l'eau", "Baigner dans le lac", "Chercher de la nourriture", "Construire un abri près du lac"],
    ["Vous vous sentez mieux, vos réflexes et votre corps se sont grandement fortifiés grâce à ce lac aux propriétés inconnues...Vous continuez votre route et rencontrez un robot. Que faites-vous?", "Lui parler", "L'ignorer", "Le suivre", "Le détruire"],
    ["Le robot vous propose de vous conduire à un village en ruines. Que faites-vous?", "Entrer dans la première maison", "Explorer le village", "Chercher des outils", "Revenir au lac (aucun effet additionnel)"],
    ["Votre intuition était la bonne ! Vous trouvez un atelier abandonné. Que faites-vous?", "Chercher des pièces pour le vaisseau", "Explorer l'atelier", "Dormir ici", "Retourner au village"],
    ["Vous trouvez un ancien livre avec des cartes. Que faites-vous?", "Lire le livre", "Prendre les cartes", "Détruire le livre", "Ne rien faire"],
    ["Dans votre périple, vous découvrez une grotte cachée. Que faites-vous?", "Entrer dans la grotte", "La contourner", "Placer des pièges à l'entrée", "Retourner au village"],
    ["Dans la grotte, vous trouvez une machine ancienne. D'étranges symboles sont écrit dessus, il semblerait que cela soit une technologie alien. En l'examinant de plus près, vous y trouvez deux boutons. Que faites-vous?", "Appuyer sur le bouton de gauche", "Appuyer sur le bouton de droite", "Ne rien faire", "La détruire"],
    ["La machine s'active...Est ce à cause du bouton? Ou de votre présence dans la grotte? Un vaisseau spatial d'une taille inouïe débarque. Vous rencontrez un groupe d'aliens plutôt amicaux. Que faites-vous?", "Demander de l'aide", "Les ignorer", "Les suivre", "Les attaquer"],
    ["Les aliens vous donnent les pièces pour réparer votre vaisseau. Que faites-vous?", "Réparer le vaisseau", "Les remercier", "Les inviter à venir sur Terre", "Détruire les pièces"]
];

let currentStep = 0;
let gameOver = false;

console.log(prompt("\nAway from Earth: First Contact\n\n Tapez sur une touche pour démarrer"))

while (!gameOver) {
    console.log(steps[currentStep][0]);
    console.log(`1. ${steps[currentStep][1]}`);
    console.log(`2. ${steps[currentStep][2]}`);
    console.log(`3. ${steps[currentStep][3]}`);
    console.log(`4. ${steps[currentStep][4]}`);

    const answer = prompt("Faites un choix (1, 2, 3 ou 4) : ");
    const choice = parseInt(answer);

    if (choice >= 1 && choice <= 4) {
        if (currentStep === 2 && choice === 4) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En essayant de détruire le robot, il se défend et vous désintègre instantanément...GAME OVER!");
            gameOver = true;
        } else if (currentStep === 3 && choice === 4) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En retournant au lac, votre corps se flétrit et vieillit instantanément au contact du lac, à cause des propriétés inconnues... Vous mourrez de vieillesse. GAME OVER!");
            gameOver = true;
        } else if (currentStep === 6 && choice === 2) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En voulant contourner la grotte, vous tombez dans un ravin sans fond... Vous êtes mort. GAME OVER!");
            gameOver = true;
        } else if (currentStep === 6 && choice === 4) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En voulant retourner au village, le robot vous attaque sans aucune raison et vous transperce le coeur...GAME OVER!");
            gameOver = true;
        }
         else if (currentStep === 8 && choice === 4) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En attaquant les aliens, vous réalisez trop tard qu'ils sont bien plus puissants... Vous mourrez instantanément. GAME OVER!");
            gameOver = true;
        } else if (currentStep === 9 && choice === 3) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En invitant les aliens sur Terre, ils décident de conquérir votre planète... Vous êtes mort en tentant de les arrêter. GAME OVER!");
            gameOver = true;
        
        } else if (currentStep === 9 && choice === 4) {
            console.log("Vous avez choisi : " + steps[currentStep][choice]);
            console.log("En détruisant les pièces, vous avez gaché la seule chance de retourner sur terre, que c'est con ! GAME OVER!");
            gameOver = true;
        } else {
            console.log(`Vous avez choisi : ${steps[currentStep][choice]}\n`);
            currentStep++;
            if (currentStep >= steps.length) {
                gameOver = true;
                console.log("Vous avez réussi à rentrer sur Terre! WIN ! GG");
            }
        }
    } else {
        console.log("Choix invalide. Veuillez entrer 1, 2, 3 ou 4.\n");
    }
}