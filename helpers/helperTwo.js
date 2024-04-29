// Description: This file contains the helperTwo class and its methods.
// The helperTwo class is a subclass of the Helper class and has its own specific methods.
// The helperTwo class is used to create helper objects that increment the counter automatically.
// The helperTwo class has a constructor method that takes in the name, price, and baseCapacity of the helper object.
// The helperTwo class has a static method called updateCapacityForAllhelpers2 that updates the capacity of all helperTwo objects.

let helperTwoCounter = 0;

// HelperTwo class
class HelperTwo extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + helperTwoCounter;
    }
    
    // Function to add the helperTwo's capacity to the counter
    static updateCapacityForAllhelpers2(helpers2) {
        for (let i = 0; i < helpers2.length; i++) {
            if (helpers2[i].active) {
                helpers2[i].capacity += helpers2[i].capacity * BigInt(2) / BigInt(100);
            }
        }
    }
    // Function to upgrade the helperTwo's capacity
    upgrade() {
        let activeHelperTwos = helpers2.filter(helper => helper instanceof HelperTwo && helper.active);
        

        if (activeHelperTwos.length > 0) {
            let newBaseCapacity = activeHelperTwos[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperTwos[0].baseCapacity + 1n ? newBaseCapacity : activeHelperTwos[0].baseCapacity + 1n;
    

            for (let helper of activeHelperTwos) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
            }
    
        }
    }
    
}

let helpers2 = [];
let helperButton2 = document.getElementById('helperButton2');
let ameliorationButton2 = document.getElementById('ameliorationButton2');

let helperTwoPrice = '30';

// HelperTwo button event listener
helperButton2.addEventListener('click', function() {
    let priceHelper2Element = document.getElementById('priceHelper2');
    let priceHelper2 = BigInt(priceHelper2Element.textContent);
    if (count >= priceHelper2) {
        let helper2 = new HelperTwo('HelperTwo', helperTwoPrice, '2');
        helperTwoCounter++;
        helpers2.push(helper2);
        helper2.buy();
        priceHelper2Element.textContent = (priceHelper2 * BigInt(2)).toString();
        helperTwoPrice = helper2.price.toString();

        let helperTwoImage = document.createElement('img');
        helperTwoImage.src = 'assets/sprites/crash_world.png';
        helperTwoImage.classList.add('helperTwo-image');

        let crashWorldContainer = document.getElementById('crash_world');
        let helperImagesContainer = crashWorldContainer.querySelector('.helper-images-container');
        helperImagesContainer.appendChild(helperTwoImage);
    }
});

var upgradeApplied = false;

// Amelioration button event listener
ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = BigInt(ameliorationHelper2.textContent);
    if (count >= priceImprovement) {
        count -= priceImprovement;
        ameliorationHelper2.textContent = (priceImprovement * BigInt(2)).toString();
        

        if (!upgradeApplied) {
            for (let i = 0; i < helpers2.length; i++) {
                if (helpers2[i] instanceof HelperTwo && helpers2[i].active) {
                    helpers2[i].upgrade(); 
                    console.log(helpers2[i].capacity)
                }
            }
            HelperTwo.updateCapacityForAllhelpers2(helpers2); 
            upgradeApplied = false; 
        }
    }
});







