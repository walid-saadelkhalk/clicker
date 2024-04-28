let button = document.getElementById('clickerButton');
let counter = document.getElementById('clickerCounter');
let cpsCounter = document.getElementById('cpsCounter');
let goldButton = document.getElementById('goldButton');

let count = BigInt(1);
let transactionList = [];
let clicksPerSecond = 0;

// Fonction pour mettre à jour le compteur et enregistrer les clics dans le stockage local
function updateCounter() {
    count += BigInt(1);
    if (count >= BigInt(1000000)) {
        var countInMillions = Number(count) / 1000000;
        counter.innerHTML = countInMillions.toFixed(5) + "<br> million"; // Keep 2 decimals
    } else {
        counter.textContent = count.toString();
    }
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

