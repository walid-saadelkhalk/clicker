var button = document.getElementById('clickerButton');
var counter = document.getElementById('clickerCounter');
var cpsCounter = document.getElementById('cpsCounter');

var count = BigInt(0);
var clicksPerSecond = 0;

var helper2Active = false;


function updateCounter() {
    count += BigInt(1);
    counter.textContent = count;
}

button.addEventListener('click', function() {
    updateCounter();
    document.body.style.backgroundImage = "url('assets/images/ps1_on.png')";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    setTimeout(function() {
        document.body.style.backgroundImage = "";
    }, 50);
});


// Click per second
setInterval(function() {
    cpsCounter.textContent = "Cps: " + clicksPerSecond;
    // clicksPerSecond = 0; // Réinitialiser le compteur de clics par seconde
}, 1000);


// button.addEventListener('click', function() {
//     clicksPerSecond++;
// });
