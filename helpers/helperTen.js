var helperButton10 = document.getElementById('helperButton10');
var priceHelper10 = document.getElementById('priceHelper10');
var helper10Active = false;

helperButton10.addEventListener('click', function() {
    var price = BigInt(priceHelper10.textContent);
    if (count >= price && !helper10Active) {
        count -= price;
        priceHelper10.textContent = (price * BigInt(2)).toString();
        helper10Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper10Active = false;
    }
});

