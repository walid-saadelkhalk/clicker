// Description: JavaScript file for the clicker game.
// The script contains the clicker game logic and helper functions.
// The script listens to the click event and updates the counter accordingly.
// The script also contains the logic for the helper buttons and their functionalities.
// The script uses BigInt to handle large numbers and localStorage to store the clicker count.

let button = document.getElementById('clickerButton');
let counter = document.getElementById('clickerCounter');
let cpsCounter = document.getElementById('cpsCounter');
let goldButton = document.getElementById('goldButton');

let count = BigInt(1);
let transactionList = [];
let clicksPerSecond = 0;

// Function to update the counter and display the number of clicks
function updateCounter() {
    count += BigInt(1);
    if (count >= BigInt(1000000)) {
        var countInMillions = Number(count) / 1000000;
        counter.innerHTML = countInMillions.toFixed(5) + "<br> million";
    } else {
        counter.textContent = count.toString();
    }
    let clickEvent = new CustomEvent('clickEvent', { detail: { totalClicks: count } });
    document.dispatchEvent(clickEvent);
    
    localStorage.setItem('gamer', count.toString());
}

// Function to listen to the click event and update the counter
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

