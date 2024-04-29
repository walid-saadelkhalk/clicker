// Description: JavaScript file for the golden button.
// The script contains the golden button logic and helper functions.
// The script listens to the click event and updates the counter accordingly.
// The script also contains the logic for the golden button and its functionalities.

// Function to give the golden button a value
function handleGoldButtonClick() {
    count += BigInt(100000);
    counter.textContent = count.toString();
    localStorage.setItem('gamer', count.toString());
}
goldButton.addEventListener('click', handleGoldButtonClick);

// Function to show the golden button
function showGoldButton() {
    goldButton.style.visibility = 'visible';
}
// Function to hide the golden button
function hideGoldButton() {
    goldButton.style.visibility = 'hidden';
}
goldButton.style.visibility = 'hidden';

// Function to show the golden button every 5 seconds
setTimeout(showGoldButton, 1 * 5 * 1000);
setInterval(function() {
    showGoldButton();
    setTimeout(hideGoldButton, 3000); 
}, 1 * 5 * 1000);