// var button = document.getElementById('clickerButton');
// var counter = document.getElementById('clickerCounter');
// var cpsCounter = document.getElementById('cpsCounter');

// var count = BigInt(0);
// var transactionList = [];
// var clicksPerSecond = 0;

// function updateCounter() {
//     count += BigInt(1);
//     counter.textContent = count.toString();
//     var clickEvent = new CustomEvent('clickEvent', { detail: { totalClicks: count } });
//     document.dispatchEvent(clickEvent);
// }

// button.addEventListener('click', function() {
//     updateCounter();
//     document.getElementById('overlayImage').src = "assets/images/ps1_on.png";
//     setTimeout(function() {
//         document.getElementById('overlayImage').src = "assets/images/ps1_off.png";
//     }, 100);
//     transactionList.push({
//         clickCounter: count,
//         priceHelper1: BigInt(priceHelper1.textContent),
//         priceHelper2: BigInt(priceHelper2.textContent)
//     });
//     console.log(transactionList);
// });



// // Click per second
// setInterval(function() {
//     cpsCounter.textContent = "Cps: " + clicksPerSecond;
//     // clicksPerSecond = 0; // Réinitialiser le compteur de clics par seconde
// }, 1000);


// // button.addEventListener('click', function() {
// //     clicksPerSecond++;
// // });

let button = document.getElementById('clickerButton');
let counter = document.getElementById('clickerCounter');
let cpsCounter = document.getElementById('cpsCounter');

let count = BigInt(0);
let transactionList = [];
let clicksPerSecond = 0;

// Fonction pour mettre à jour le compteur et enregistrer les clics dans le stockage local
function updateCounter() {
    count += BigInt(1);
    counter.textContent = count.toString();
    let clickEvent = new CustomEvent('clickEvent', { detail: { totalClicks: count } });
    document.dispatchEvent(clickEvent);
    
    localStorage.setItem('gamer', count.toString());
}


button.addEventListener('click', function() {
    updateCounter();
    document.getElementById('overlayImage').src = "assets/images/ps1_on.png";
    setTimeout(function() {
        document.getElementById('overlayImage').src = "assets/images/ps1_off.png";
    }, 100);
    transactionList.push({
        clickCounter: count,
        priceHelper1: BigInt(priceHelper1.textContent),
        priceHelper2: BigInt(priceHelper2.textContent)
    });
    // console.log(transactionList);
});

// Click per second
setInterval(function() {
    cpsCounter.textContent = "Cps: " + clicksPerSecond;
    // clicksPerSecond = 0; // Réinitialiser le compteur de clics par seconde
}, 1000);


// button.addEventListener('click', function() {
//     clicksPerSecond++;
// });


