var helperButton6 = document.getElementById('helperButton6');
var priceHelper6 = document.getElementById('priceHelper6');
var helper6Active = false;

helperButton6.addEventListener('click', function() {
    var price = BigInt(priceHelper6.textContent);
    if (count >= price && !helper6Active) {
        count -= price;
        priceHelper6.textContent = (price * BigInt(2)).toString();
        helper6Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper6Active = false;
    }
});

