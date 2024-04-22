var helperButton7 = document.getElementById('helperButton7');
var priceHelper7 = document.getElementById('priceHelper7');
var helper7Active = false;

helperButton7.addEventListener('click', function() {
    var price = parseInt(priceHelper7.textContent);
    if (count >= price && !helper7Active) {
        count -= price;
        priceHelper7.textContent = price * 2;
        helper7Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper7Active = false;
    }
});

