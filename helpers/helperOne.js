var helperButton1 = document.getElementById('helperButton1');
var priceHelper1 = document.getElementById('priceHelper1');
var helper1Active = false;
var basePriceHelper1 = BigInt(priceHelper1.textContent); 
var exponentHelper1 = 1;

helperButton1.addEventListener('click', function() {
    if (count >= basePriceHelper1 && !helper1Active) {
        count -= basePriceHelper1;
        basePriceHelper1 *= BigInt(Math.pow(2, exponentHelper1)); 
        exponentHelper1++;
        priceHelper1.textContent = basePriceHelper1.toString();
        helper1Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper1Active = false;
    }
});



