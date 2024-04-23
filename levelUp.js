// var levelElement = document.getElementById('currentLevel');

// var level = 1;

// function updateLevel() {
//     // Déterminer le nombre total de clics à partir de la liste des transactions
//     var totalClicks = transactionList.length;
//     // console.log("Nombre total de clics : ", totalClicks);
//     // Mettre à jour le niveau en fonction du nombre total de clics
//     if (totalClicks >= 0 && totalClicks < 100) {
//         level = 1;
//     } else if (totalClicks >= 100 && totalClicks < 500) {
//         level = 2;
//     } else if (totalClicks >= 500 && totalClicks < 1000) {
//         level = 3;
//     } else if (totalClicks >= 1000 && totalClicks < 1500) {
//         level = 4;
//     } // Ajoutez d'autres conditions pour les niveaux supplémentaires si nécessaire

//     // Mettre à jour le niveau affiché dans le HTML
//     levelElement.textContent = level.toString();
// }

// // Mettre à jour le niveau lorsque la liste des transactions est modifiée
// function handleTransactionUpdate() {
//     updateLevel();
// }

// // Appeler la fonction pour mettre à jour le niveau dès le chargement de la page
// updateLevel();
var levelElement = document.getElementById('currentLevel');
var level = 1;

function updateLevel() {
    var totalClicks = transactionList.length;
    console.log("Nombre total de clics : ", totalClicks);

    if (totalClicks >= 100) {
        level = 5;
        count += BigInt(4);
    } else if (totalClicks >= 80) {
        level = 4;
        count += BigInt(3);
    } else if (totalClicks >= 40) {
        level = 3;
        count += BigInt(2);
    } else if (totalClicks >= 20) {
        level = 2;
        count += BigInt(1);
    } else {
        level = 1;
        count += BigInt(0);
    } 

    levelElement.textContent = level.toString();
}

updateLevel();

button.addEventListener('click', function() {
    updateLevel();
});



