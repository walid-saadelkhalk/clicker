var helperButton5 = document.getElementById('helperButton5');
var priceHelper5 = document.getElementById('priceHelper5');
var helper5Active = false;
var basePriceHelper5 = BigInt(priceHelper5.textContent); 
var exponentHelper5 = 1;

helperButton5.addEventListener('click', function() {
    if (count >= basePriceHelper5 && !helper5Active) {
        count -= basePriceHelper5;
        basePriceHelper5 *= BigInt(Math.pow(2, exponentHelper5)); 
        exponentHelper5++;
        priceHelper5.textContent = basePriceHelper5.toString();
        helper5Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper5Active = false;
    }
});

