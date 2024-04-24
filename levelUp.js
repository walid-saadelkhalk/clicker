// var levelElement = document.getElementById('currentLevel');
// var level = 1;

// function updateLevel() {
//     var totalClicks = transactionList.length;
//     console.log("Nombre total de clics : ", totalClicks);

//     if (totalClicks >= 100) {
//         level = 5;
//         count += BigInt(4);
//     } else if (totalClicks >= 80) {
//         level = 4;
//         count += BigInt(3);
//     } else if (totalClicks >= 40) {
//         level = 3;
//         count += BigInt(2);
//     } else if (totalClicks >= 20) {
//         level = 2;
//         count += BigInt(1);
//     } else {
//         level = 1;
//         count += BigInt(0);
//     } 

//     levelElement.textContent = level.toString();
// }

// updateLevel();

// button.addEventListener('click', function() {
//     updateLevel();
// });

var levelElement = document.getElementById('currentLevel');
var level = 1;

function updateLevel() {
    var totalClicks = transactionList.length;
    console.log("Nombre total de clics : ", totalClicks);

    
    if (totalClicks >= 100) {
        level = 5;
        count += BigInt(4);
        showClicksEarned(5);
    } else if (totalClicks >= 80) {
        level = 4;
        count += BigInt(3); 
        showClicksEarned(4); 
    } else if (totalClicks >= 40) {
        level = 3;
        count += BigInt(2); 
        showClicksEarned(3); 
    } else if (totalClicks >= 20) {
        level = 2;
        count += BigInt(1); 
        showClicksEarned(2); 
    } else {
        level = 1;
        count += BigInt(0);
        showClicksEarned(1); 
    } 

    levelElement.textContent = level.toString();
}

// function showClicksEarned(clicks) {
//     var clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
//     clicksEarnedContainer.textContent = "+" + clicks;
//     setTimeout(function() {
//         clicksEarnedContainer.textContent = ""; 
//     }, 100); 
// }
function showClicksEarned(clicks) {
    var clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
    var currentClicks = parseInt(clicksEarnedContainer.textContent.replace("+", ""));
    var totalClicks = currentClicks + clicks;
    
    clicksEarnedContainer.textContent = "+" + totalClicks;
    clicksEarnedContainer.classList.add('clickAnimation'); // Ajoute la classe d'animation
    
    setTimeout(function() {
        clicksEarnedContainer.classList.remove('clickAnimation'); // Supprime la classe d'animation après 2 secondes
    }, 2000); // 2 secondes
}



updateLevel();

button.addEventListener('click', function() {
    updateLevel();
});


