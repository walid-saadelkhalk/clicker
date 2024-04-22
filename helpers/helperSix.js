var helperButton6 = document.getElementById('helperButton6');
var priceHelper6 = document.getElementById('priceHelper6');
var helper6Active = false;
var basePriceHelper6 = BigInt(priceHelper6.textContent); 
var exponentHelper6 = 1;

helperButton6.addEventListener('click', function() {
    if (count >= basePriceHelper6 && !helper6Active) {
        count -= basePriceHelper6;
        basePriceHelper6 *= BigInt(Math.pow(2, exponentHelper6)); 
        exponentHelper6++;
        priceHelper6.textContent = basePriceHelper6.toString();
        helper6Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper6Active = false;
    }
});

