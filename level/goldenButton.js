function handleGoldButtonClick() {
    count += BigInt(100);
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

setTimeout(showGoldButton, 5 * 60 * 1000);


setInterval(function() {
    showGoldButton();
    setTimeout(hideGoldButton, 3000); 
}, 5 * 60 * 1000);