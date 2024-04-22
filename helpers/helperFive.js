var helperButton5 = document.getElementById('helperButton5');
var priceHelper5 = document.getElementById('priceHelper5');
var helper5Active = false;

helperButton5.addEventListener('click', function() {
    var price = parseInt(priceHelper5.textContent);
    if (count >= price && !helper5Active) {
        count -= price;
        priceHelper5.textContent = price * 2;
        helper5Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper5Active = false;
    }
});

