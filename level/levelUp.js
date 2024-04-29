// Description: JavaScript file for the level up system.
// The script contains the level up logic and helper functions.
// The script listens to the click event and updates the level accordingly.
// The script also contains the logic for the level up system and its functionalities.
// The script uses BigInt to handle large numbers and localStorage to store the level.

let levelElement = document.getElementById('currentLevel');
let level = 1;
document.addEventListener('clickEvent', function(event) {
    let totalClicks = event.detail.totalClicks;
    updateLevel(totalClicks);
    projectProgression(level);
});

// Function to update the level of the player
function updateLevel(totalClicks) {
    if (totalClicks >= 140){
        level = 10;
        count += BigInt(9);
        showClicksEarned(10);
        document.getElementById('worlds-banner').classList.add('level-10');
    } else if (totalClicks >= 130) {
        level = 9;
        count += BigInt(8);
        showClicksEarned(9);
        document.getElementById('worlds-banner').classList.add('level-9');
    } else if (totalClicks >= 120) {
        level = 8;
        count += BigInt(7);
        showClicksEarned(8);
        document.getElementById('worlds-banner').classList.add('level-8');
    } else if (totalClicks >= 110) {
        level = 7;
        count += BigInt(6);
        showClicksEarned(7);
        document.getElementById('worlds-banner').classList.add('level-7');
    } else if (totalClicks >= 100) {
        level = 6;
        count += BigInt(5);
        showClicksEarned(6);
        document.getElementById('worlds-banner').classList.add('level-6');
    } else if (totalClicks >= 80) {
        level = 5;
        count += BigInt(4);
        showClicksEarned(5);
        document.getElementById('worlds-banner').classList.add('level-5');
    } else if (totalClicks >= 60) {
        level = 4;
        count += BigInt(3);
        showClicksEarned(4);
        document.getElementById('worlds-banner').classList.add('level-4');
    } else if (totalClicks >= 40) {
        level = 3;
        count += BigInt(2);
        showClicksEarned(3);
        document.getElementById('worlds-banner').classList.add('level-3');
    } else if (totalClicks >= 20) {
        level = 2;
        count += BigInt(1);
        showClicksEarned(2);
        document.getElementById('worlds-banner').classList.add('level-2');
    } else {
        level = 1;
        count += BigInt(0);
        showClicksEarned(1);
    }

    levelElement.textContent = level.toString();
    localStorage.setItem('level', level.toString());
}

// Function to show the progression of the player
function showClicksEarned(clicks) {
    let clicksEarnedContainer = document.getElementById('clicksEarnedContainer');
    clicksEarnedContainer.textContent = "+" + clicks;
    clicksEarnedContainer.classList.add('clickAnim');
    setTimeout(function() {
        clicksEarnedContainer.classList.remove('clickAnim'); 
        clicksEarnedContainer.textContent = "";
    }, 1000);
}

