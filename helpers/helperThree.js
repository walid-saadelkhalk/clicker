// Description: This file contains the helperThree class and its methods.
// The helperThree class is a subclass of the Helper class and has its own specific methods.
// The helperThree class is used to create helper objects that increment the counter automatically.
// The helperThree class has a constructor method that takes in the name, price, and baseCapacity of the helper object.
let HelperThreeCounter = 0;
// HelperThree class
class HelperThree extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + HelperThreeCounter;
    }
    // Function to add the helperThree's capacity to the counter
    static updateCapacityForAllhelpers3(helpers3) {
        for (let i = 0; i < helpers3.length; i++) {
            if (helpers3[i].active) {
                helpers3[i].capacity += helpers3[i].capacity * BigInt(2) / BigInt(100);
            }
        }
    }
    // Function to upgrade the helperThree's capacity
    upgrade() {
        let activeHelperThrees = helpers3.filter(helper => helper instanceof HelperThree && helper.active);
        

        if (activeHelperThrees.length > 0) {
            let newBaseCapacity = activeHelperThrees[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperThrees[0].baseCapacity + 1n ? newBaseCapacity : activeHelperThrees[0].baseCapacity + 1n;
    

            for (let helper of activeHelperThrees) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
            }
    
        }
    }
    
}

let helpers3 = [];
let helperButton3 = document.getElementById('helperButton3');
let ameliorationButton3 = document.getElementById('ameliorationButton3');

let HelperThreePrice = '500';

// HelperThree button event listener        
helperButton3.addEventListener('click', function() {
    let priceHelper3Element = document.getElementById('priceHelper3');
    let priceHelper3 = BigInt(priceHelper3Element.textContent);
    if (count >= priceHelper3) {
        let helper3 = new HelperThree('HelperThree', HelperThreePrice, '3');
        HelperThreeCounter++;
        helpers3.push(helper3);
        helper3.buy();
        priceHelper3Element.textContent = (priceHelper3 * BigInt(2)).toString();
        HelperThreePrice = helper3.price.toString();

        let HelperThreeImage = document.createElement('img');
        HelperThreeImage.src = 'assets/sprites/fireman_world.png';
        HelperThreeImage.classList.add('helperThree-image');

        let firemanWorldContainer = document.getElementById('fireman_world');
        let helperImagesContainer = firemanWorldContainer.querySelector('.helper-images-container');
        helperImagesContainer.appendChild(HelperThreeImage);
    }
});

var upgradeApplied = false;

// Amelioration button event listener
ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = BigInt(ameliorationHelper3.textContent);
    if (count >= priceImprovement) {
        count -= priceImprovement;
        ameliorationHelper3.textContent = (priceImprovement * BigInt(2)).toString();
        

        if (!upgradeApplied) {
            for (let i = 0; i < helpers3.length; i++) {
                if (helpers3[i] instanceof HelperThree && helpers3[i].active) {
                    helpers3[i].upgrade(); 
                    console.log(helpers3[i].capacity)
                }
            }
            HelperThree.updateCapacityForAllhelpers3(helpers3); 
            upgradeApplied = false; 
        }
    }
});









