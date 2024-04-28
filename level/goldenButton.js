function handleGoldButtonClick() {
    count += BigInt(100000);
    counter.textContent = count.toString();
    localStorage.setItem('gamer', count.toString());
}

goldButton.addEventListener('click', handleGoldButtonClick);

function showGoldButton() {
    goldButton.style.visibility = 'visible';
}

function hideGoldButton() {
    goldButton.style.visibility = 'hidden';
}

goldButton.style.visibility = 'hidden';

setTimeout(showGoldButton, 1 * 5 * 1000);


setInterval(function() {
    showGoldButton();
    setTimeout(hideGoldButton, 3000); 
}, 1 * 5 * 1000);