var helperButton1 = document.getElementById('helperButton1');
var priceHelper1 = document.getElementById('priceHelper1');
var helper1Active = false;

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

