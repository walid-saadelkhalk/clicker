let button = document.getElementById('clickerButton');
let counter = document.getElementById('clickerCounter');
let cpsCounter = document.getElementById('cpsCounter');
let goldButton = document.getElementById('goldButton');


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


function handleGoldButtonClick() {
    count += BigInt(100);
    counter.textContent = count.toString();
    localStorage.setItem('gamer', count.toString());
}

goldButton.addEventListener('click', handleGoldButtonClick);

function showGoldButton() {
    goldButton.style.visibility = 'visible';
}

function hideGoldButton() {
    goldButton.style.visibility = 'hidden';
}

goldButton.style.visibility = 'hidden';

setTimeout(showGoldButton, 5 * 60 * 1000);


setInterval(function() {
    showGoldButton();
    setTimeout(hideGoldButton, 3000); 
}, 5 * 60 * 1000);

