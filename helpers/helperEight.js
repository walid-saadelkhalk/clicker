var helperButton8 = document.getElementById('helperButton8');
var priceHelper8 = document.getElementById('priceHelper8');
var helper8Active = false;

helperButton8.addEventListener('click', function() {
    var price = BigInt(priceHelper8.textContent);
    if (count >= price && !helper8Active) {
        count -= price;
        priceHelper8.textContent = (price * BigInt(2)).toString();
        helper8Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper8Active = false;
    }
});

