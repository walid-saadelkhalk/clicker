// var levelElement = document.getElementById('currentLevel');
// var level = 1;

// function updateLevel() {
//     var totalClicks = transactionList.length;
//     console.log("Nombre total de clics : ", totalClicks);

    
//     if (totalClicks >= 100) {
//         level = 5;
//         count += BigInt(4);
//         showClicksEarned(5);
//     } else if (totalClicks >= 80) {
//         level = 4;
//         count += BigInt(3); 
//         showClicksEarned(4); 
//     } else if (totalClicks >= 40) {
//         level = 3;
//         count += BigInt(2); 
//         showClicksEarned(3); 
        
//     } else if (totalClicks >= 20) {
//         level = 2;
//         count += BigInt(1); 
//         showClicksEarned(2); 
//     } else {
//         level = 1;
//         count += BigInt(0);
//         showClicksEarned(1); 
//     } 

//     levelElement.textContent = level.toString();
// }

// function showClicksEarned(clicks) {
//     var clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
//     clicksEarnedContainer.textContent = "+" + clicks;
//     clicksEarnedContainer.classList.add('clickAnimation');
//     setTimeout(function() {
//         clicksEarnedContainer.classList.remove('clickAnimation'); 
//         clicksEarnedContainer.textContent = "";
//     }, 1000);
// }

// updateLevel();

// button.addEventListener('click', function() {
//     updateLevel();
// });


let levelElement = document.getElementById('currentLevel');
let level = 1;
document.addEventListener('clickEvent', function(event) {
    let totalClicks = event.detail.totalClicks;
    updateLevel(totalClicks);
    projectProgression(level);
});


function updateLevel(totalClicks) {
    // console.log("Nombre total de clics : ", totalClicks);
    if (totalClicks >= 140){
        level = 10;
        count += BigInt(9);
        showClicksEarned(10);
    } else if (totalClicks >= 130) {
        level = 9;
        count += BigInt(8);
        showClicksEarned(9);
    } else if (totalClicks >= 120) {
        level = 8;
        count += BigInt(7);
        showClicksEarned(8);
    } else if (totalClicks >= 110) {
        level = 7;
        count += BigInt(6);
        showClicksEarned(7);
    } else if (totalClicks >= 100) {
        level = 6;
        count += BigInt(5);
        showClicksEarned(6);
    } else if (totalClicks >= 80) {
        level = 5;
        count += BigInt(4);
        showClicksEarned(5);
    } else if (totalClicks >= 60) {
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
        // let worldIcons = document.querySelectorAll('.world-icon');
    // worldIcons.forEach(icon => {
    //     icon.style.filter = ''; // Réinitialise d'abord tous les filtres
    //     if (level >= 2 && level <= 6) {
    //         // Selon le niveau, ajustez le filtre pour ne pas griser le monde
    //         let grayscaleValue = (6 - level) * 20; // Calcule la valeur de gris en fonction du niveau
    //         icon.style.filter = `grayscale(${grayscaleValue}%)`;
    // }
    levelElement.textContent = level.toString();
    localStorage.setItem('level', level.toString());
}

function showClicksEarned(clicks) {
    let clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
    clicksEarnedContainer.textContent = "+" + clicks;
    clicksEarnedContainer.classList.add('clickAnim');
    setTimeout(function() {
        clicksEarnedContainer.classList.remove('clickAnim'); 
        clicksEarnedContainer.textContent = "";
    }, 1000);
}

