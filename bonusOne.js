var bonusButton1 = document.getElementById('bonusButton1');
var priceBonus1 = document.getElementById('priceBonus1');
var bonus1Active = false;

bonusButton1.addEventListener('click', function() {
    var price = parseInt(priceBonus1.textContent);
    if (count >= price && !bonus1Active) {
        count -= price;
        priceBonus1.textContent = price * 2;
        bonus1Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        bonus1Active = false;
    }
});

export { bonusButton1, priceBonus1, bonus1Active }; 
