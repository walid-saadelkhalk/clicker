// Initialize helperSeven variables
// HelperSeven button

var helperButton7 = document.getElementById('helperButton7');
var priceHelper7 = document.getElementById('priceHelper7');
var helper7Active = false;
var basePriceHelper7 = BigInt(priceHelper7.textContent); 
var exponentHelper7 = 1;

// HelperSeven button event listener
helperButton7.addEventListener('click', function() {
    if (count >= basePriceHelper7 && !helper7Active) {
        count -= basePriceHelper7;
        basePriceHelper7 *= BigInt(Math.pow(2, exponentHelper7)); 
        exponentHelper7++;
        priceHelper7.textContent = basePriceHelper7.toString();
        helper7Active = true;
        setInterval(function() {
            updateCounter();
        }, 1000);
        helper7Active = false;
    }
});

