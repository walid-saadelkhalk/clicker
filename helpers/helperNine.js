var helperButton9 = document.getElementById('helperButton9');
var priceHelper9 = document.getElementById('priceHelper9');
var helper9Active = false;
var basePriceHelper9 = BigInt(priceHelper9.textContent); 
var exponentHelper9 = 1;

helperButton9.addEventListener('click', function() {
    if (count >= basePriceHelper9 && !helper9Active) {
        count -= basePriceHelper9;
        basePriceHelper9 *= BigInt(Math.pow(2, exponentHelper9)); 
        exponentHelper9++;
        priceHelper9.textContent = basePriceHelper9.toString();
        helper9Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper9Active = false;
    }
});

