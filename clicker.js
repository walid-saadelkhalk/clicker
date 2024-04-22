// var button = document.getElementById('clickerButton');
// var counter = document.getElementById('clickerCounter');

// var count = 0;

// function updateCounter() {
//     count += 1;
//     counter.textContent = count;
// }

// button.addEventListener('click', function() {
//     console.log("Button clicked");
//     updateCounter();
//     document.body.style.backgroundImage = "url('assets/images/ps1_on.png')";
//     document.body.style.backgroundSize = "100% 100%";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundPosition = "center";
//     setTimeout(function() {
//         document.body.style.backgroundImage = "url('assets/images/ps1_off.png')";
//     }, 100);
// });
// import { bonusButton1, priceBonus1, bonus1Active } from 'bonusOne.js'; 
    
var button = document.getElementById('clickerButton');
var counter = document.getElementById('clickerCounter');

var count = 0;


var bonus2Active = false;


function updateCounter() {
    count += 1;
    counter.textContent = count;
}

button.addEventListener('click', function() {
    updateCounter();
    document.body.style.backgroundImage = "url('assets/images/ps1_on.png')";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    setTimeout(function() {
        document.body.style.backgroundImage = "url('assets/images/ps1_off.png')";
    }, 10);
});

bonusButton2.addEventListener('click', function() {
    var price = parseInt(priceBonus2.textContent);
    if (count >= price && !bonus2Active) {
        count -= price;
        priceBonus2.textContent = price * 2;
        bonus2Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        bonus2Active = false;
    }
});
