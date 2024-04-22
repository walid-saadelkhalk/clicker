var helperButton9 = document.getElementById('helperButton9');
var priceHelper9 = document.getElementById('priceHelper9');
var helper9Active = false;

helperButton9.addEventListener('click', function() {
    var price = BigInt(priceHelper9.textContent);
    if (count >= price && !helper9Active) {
        count -= price;
        priceHelper9.textContent = (price * BigInt(2)).toString();
        helper9Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper9Active = false;
    }
});

