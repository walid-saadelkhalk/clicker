var helperButton3 = document.getElementById('helperButton3');
var priceHelper3 = document.getElementById('priceHelper3');
var helper3Active = false;
var basePriceHelper3 = BigInt(priceHelper3.textContent); 
var exponentHelper3 = 1;

helperButton3.addEventListener('click', function() {
    if (count >= basePriceHelper3 && !helper3Active) {
        count -= basePriceHelper3;
        basePriceHelper3 *= BigInt(Math.pow(2, exponentHelper3)); 
        exponentHelper3++;
        priceHelper3.textContent = basePriceHelper3.toString();
        helper3Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper3Active = false;
    }
});

