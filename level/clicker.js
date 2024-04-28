var button = document.getElementById('clickerButton');
var counter = document.getElementById('clickerCounter');
var cpsCounter = document.getElementById('cpsCounter');

var count = BigInt(999999);
var transactionList = [];
var clicksPerSecond = 0;

function updateCounter() {
    count += BigInt(1);
    if (count >= BigInt(1000000)) {
        var countInMillions = Number(count) / 1000000;
        counter.innerHTML = countInMillions.toFixed(5) + "<br> million"; // Keep 2 decimals
    } else {
        counter.textContent = count.toString();
    }
    var clickEvent = new CustomEvent('clickEvent', { detail: { totalClicks: count } });
    document.dispatchEvent(clickEvent);
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
});



