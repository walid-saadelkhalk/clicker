var button = document.getElementById('clickerButton');
var counter = document.getElementById('clickerCounter');

var count = BigInt(0);

function updateCounter() {
    count += BigInt(1);
    counter.textContent = count.toString();
}

button.addEventListener('click', function() {
    updateCounter();
    document.body.style.backgroundImage = "url('assets/images/ps1_on.png')";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    setTimeout(function() {
        document.body.style.backgroundImage = "";
    }, 50);
});

