var helperButton1 = document.getElementById('helperButton1');
var priceHelper1 = document.getElementById('priceHelper1');
let ameliorationButton1 = document.getElementById('ameliorationButton1');
let ameliorationHelper1 = document.getElementById('ameliorationHelper1');
var helper1Active = false;

helperButton1.addEventListener('click', function() {
    var price = parseInt(priceHelper1.textContent);
    if (count >= price && !helper1Active) {
        count -= price;
        priceHelper1.textContent = price * 2;
        helper1Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper1Active = false;
    }
});

ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = parseInt(ameliorationHelper1.textContent);
    if (count >= priceImprovement && helper1Active) {
        count -= priceImprovement;
        ameliorationHelper1.textContent = price * 2;
        setInterval(function() {
            updateCounter();
        }, 100);
    }
});



