var helperButton8 = document.getElementById('helperButton8');
var priceHelper8 = document.getElementById('priceHelper8');
var helper8Active = false;
var basePriceHelper8 = BigInt(priceHelper8.textContent); 
var exponentHelper8 = 1;

helperButton8.addEventListener('click', function() {
    if (count >= basePriceHelper8 && !helper8Active) {
        count -= basePriceHelper8;
        basePriceHelper8 *= BigInt(Math.pow(2, exponentHelper8)); 
        exponentHelper8++;
        priceHelper8.textContent = basePriceHelper8.toString();
        helper8Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper8Active = false;
    }
});

