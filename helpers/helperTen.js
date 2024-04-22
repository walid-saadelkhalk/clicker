var helperButton10 = document.getElementById('helperButton10');
var priceHelper10 = document.getElementById('priceHelper10');
var helper10Active = false;
var basePriceHelper10 = BigInt(priceHelper10.textContent); 
var exponentHelper10 = 1;

helperButton10.addEventListener('click', function() {
    if (count >= basePriceHelper10 && !helper10Active) {
        count -= basePriceHelper10;
        basePriceHelper10 *= BigInt(Math.pow(2, exponentHelper10)); 
        exponentHelper10++;
        priceHelper10.textContent = basePriceHelper10.toString();
        helper10Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper10Active = false;
    }
});

