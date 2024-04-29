//Description: This file contains the functions to save the click count, level and helpers bought in the local storage
// The script listens to the DOMContentLoaded event and saves the click count, level and helpers bought in the local storage.
// The script also contains a function to reset the game.
// The script initializes the click count, level and helpers bought when the document is ready.


// Listener to save the click count, level and helpers bought in the local storage
document.addEventListener('DOMContentLoaded', () => {
    let savedClickCount = localStorage.getItem('gamer');
    if (savedClickCount !== null) {
        count = BigInt(savedClickCount);
        counter.textContent = count.toString();
    }
    let saveLevel = localStorage.getItem('level');
    if (saveLevel !== null) {
        level = parseInt(saveLevel);
        levelElement.textContent = level.toString();
    }
    let helperOneBought = localStorage.getItem('helperOneBought');
    if (helperOneBought === 'true') {
        helperOneCounter = 1;
        let helper1 = new HelperOne('HelperOne', '10', '1');
        helpers.push(helper1);
        helper1.buy();
    }
});


// Function to reset all the game
function resetCounter() {
    count = BigInt(0);
    counter.textContent = count.toString();
    transactionList = [];
    level = 1;
    levelElement.textContent = level.toString();
    projectProgression(0);
    helperOneCounter = 0;
    localStorage.removeItem('gamer');
    localStorage.removeItem('level');
    localStorage.removeItem('progressLevel');
    localStorage.removeItem('helperOneBought');
    location.reload();
    console.log('test', localStorage.removeItem('helperOneBought'))
}

resetButton.addEventListener('click', function() {
    resetCounter();
});

