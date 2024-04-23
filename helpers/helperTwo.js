var helperButton2 = document.getElementById('helperButton2');
var priceHelper2 = document.getElementById('priceHelper2');
var helper2Active = false;
var basePriceHelper2 = BigInt(priceHelper2.textContent); 
var exponentHelper2 = 1;

helperButton2.addEventListener('click', function() {
    if (count >= basePriceHelper2 && !helper2Active) {
        count -= basePriceHelper2;
        basePriceHelper2 *= BigInt(Math.pow(2, exponentHelper2)); 
        exponentHelper2++;
        priceHelper2.textContent = basePriceHelper2.toString();
        helper2Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper2Active = false;
    }
});

