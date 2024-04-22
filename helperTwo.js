var helperButton2 = document.getElementById('helperButton2');
var priceHelper2 = document.getElementById('priceHelper2');
var helper2Active = false;

helperButton2.addEventListener('click', function() {
    var price = parseInt(priceHelper2.textContent);
    if (count >= price && !helper2Active) {
        count -= price;
        priceHelper2.textContent = price * 2;
        helper2Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper2Active = false;
    }
});