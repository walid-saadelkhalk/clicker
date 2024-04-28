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
    // var helperOneCount = localStorage.getItem('helperOneCount');
    // if (helperOneCount !== null) {
    //     helperOneCounter = parseInt(helperOneCount);
    //     for (let i = 0; i < helperOneCounter; i++) {
    //         let helper1 = new HelperOne('HelperOne', '10', '1');
    //         helpers.push(helper1);
    //         helper1.buy();
    //     }
    // }
    }
});

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

