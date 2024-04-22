var helperButton3 = document.getElementById('helperButton3');
var priceHelper3 = document.getElementById('priceHelper3');
var helper3Active = false;

helperButton3.addEventListener('click', function() {
    var price = BigInt(priceHelper3.textContent);
    if (count >= price && !helper3Active) {
        count -= price;
        priceHelper3.textContent = (price * BigInt(2)).toString();
        helper3Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper3Active = false;
    }
});

