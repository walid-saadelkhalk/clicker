var helperButton4 = document.getElementById('helperButton4');
var priceHelper4 = document.getElementById('priceHelper4');
var helper4Active = false;

helperButton4.addEventListener('click', function() {
    var price = parseInt(priceHelper4.textContent);
    if (count >= price && !helper4Active) {
        count -= price;
        priceHelper4.textContent = price * 2;
        helper4Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper4Active = false;
    }
});

