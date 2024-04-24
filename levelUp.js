var levelElement = document.getElementById('currentLevel');
var level = 1;

function updateLevel() {
    var totalClicks = transactionList.length;
    console.log("Nombre total de clics : ", totalClicks);

    
    if (totalClicks >= 100) {
        level = 5;
        count += BigInt(4);
        showClicksEarned(5);
    } else if (totalClicks >= 80) {
        level = 4;
        count += BigInt(3); 
        showClicksEarned(4); 
    } else if (totalClicks >= 40) {
        level = 3;
        count += BigInt(2); 
        showClicksEarned(3); 
    } else if (totalClicks >= 20) {
        level = 2;
        count += BigInt(1); 
        showClicksEarned(2); 
    } else {
        level = 1;
        count += BigInt(0);
        showClicksEarned(1); 
    } 

    levelElement.textContent = level.toString();
}

function showClicksEarned(clicks) {
    var clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
    clicksEarnedContainer.textContent = "+" + clicks;
    clicksEarnedContainer.classList.add('clickAnimation');
    setTimeout(function() {
        clicksEarnedContainer.classList.remove('clickAnimation'); 
        clicksEarnedContainer.textContent = "";
    }, 1000);
}

updateLevel();

button.addEventListener('click', function() {
    updateLevel();
});


