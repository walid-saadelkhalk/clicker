var button = document.getElementById('clickerButton');
var counter = document.getElementById('clickerCounter');

var count = 0;

function updateCounter() {
    count += 1;
    counter.textContent = count;
    console.log("Counter value:", count);
    document.body.style.backgroundImage = "url('assets/images/ps1_on.png')";
    document.body.style.backgroundSize = "cover";
    setTimeout(function() {
        document.body.style.backgroundImage = "url('assets/images/ps1_off.png')";
    }, 1000); 
}

button.addEventListener('click', function() {
    console.log("Button clicked");
    updateCounter(); 
});
