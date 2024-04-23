var helperButton1 = document.getElementById('helperButton1');
var priceHelper1 = document.getElementById('priceHelper1');
let ameliorationButton1 = document.getElementById('ameliorationButton1');
let ameliorationHelper1 = document.getElementById('ameliorationHelper1');
var helper1Active = false;

let helper1Increase = 1n; //Initial value of the helper

helperButton1.addEventListener('click', function() {
    var price = BigInt(priceHelper1.textContent);
    if (count >= price && !helper1Active) {
        count -= price;
        priceHelper1.textContent = (price * BigInt(2)).toString();
        helper1Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper1Active = false;
    }
});

ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = BigInt(ameliorationHelper1.textContent);
    if (count >= priceImprovement && helper1Active) {
        count -= priceImprovement;
        ameliorationHelper1.textContent = (priceImprovement * BigInt(2)).toString();
        helper1Increase += 2n;
    }
});



