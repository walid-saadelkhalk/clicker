var helperButton4 = document.getElementById('helperButton4');
var priceHelper4 = document.getElementById('priceHelper4');
var helper4Active = false;
var basePriceHelper4 = BigInt(priceHelper4.textContent); 
var exponentHelper4 = 1;

helperButton4.addEventListener('click', function() {
    if (count >= basePriceHelper4 && !helper4Active) {
        count -= basePriceHelper4;
        basePriceHelper4 *= BigInt(Math.pow(2, exponentHelper4)); 
        exponentHelper4++;
        priceHelper4.textContent = basePriceHelper4.toString();
        helper4Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper4Active = false;
    }
});

