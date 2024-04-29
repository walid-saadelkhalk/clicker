// Description: Contains the helperOne class and its methods.
// The helperOne class is a subclass of the Helper class and has its own specific methods.
// The helperOne class is used to create helper objects that increment the counter automatically.
// The helperOne class has a constructor method that takes in the name, price, and baseCapacity of the helper object.
let helperOneCounter = 0;

// HelperOne class
class HelperOne extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + helperOneCounter;
    }
    // Function to add the helperOne's capacity to the counter
    static updateCapacityForAllHelpers(helpers) {
        for (let i = 0; i < helpers.length; i++) {
            if (helpers[i].active) {
                helpers[i].capacity += helpers[i].capacity * BigInt(2) / BigInt(100);
            }
        }
    }
    // Function to upgrade the helperOne's capacity
    upgrade() {
        let activeHelperOnes = helpers.filter(helper => helper instanceof HelperOne && helper.active);
        

        if (activeHelperOnes.length > 0) {
            let newBaseCapacity = activeHelperOnes[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperOnes[0].baseCapacity + 1n ? newBaseCapacity : activeHelperOnes[0].baseCapacity + 1n;
    

            for (let helper of activeHelperOnes) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
            }
        }
    }
    
}


let helpers = [];
let helperButton1 = document.getElementById('helperButton1');
let ameliorationButton1 = document.getElementById('ameliorationButton1');

let helperOnePrice = '10';

// HelperOne button event listener
helperButton1.addEventListener('click', function() {
    let priceHelper1Element = document.getElementById('priceHelper1');
    let priceHelper1 = BigInt(priceHelper1Element.textContent);
    if (count >= priceHelper1) {
        let helper1 = new HelperOne('HelperOne', helperOnePrice, '1');
        helperOneCounter++;
        helpers.push(helper1);
        helper1.buy();
        priceHelper1Element.textContent = (priceHelper1 * BigInt(2)).toString();
        helperOnePrice = helper1.price.toString();
        localStorage.setItem('helperOneBought', 'true')


        let helperOneImage = document.createElement('img');
        helperOneImage.src = 'assets/sprites/andy_world.png';
        helperOneImage.classList.add('helperOne-image');

        let andyWorldContainer = document.getElementById('andy_world');
        let helperImagesContainer = andyWorldContainer.querySelector('.helper-images-container');
        helperImagesContainer.appendChild(helperOneImage);
    }


});

var upgradeApplied = false;

// Amelioration button event listener
ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = BigInt(ameliorationHelper1.textContent);
    if (count >= priceImprovement) {
        count -= priceImprovement;
        ameliorationHelper1.textContent = (priceImprovement * BigInt(2)).toString();
        

        if (!upgradeApplied) {
            for (let i = 0; i < helpers.length; i++) {
                if (helpers[i] instanceof HelperOne && helpers[i].active) {
                    helpers[i].upgrade(); 
                    console.log(helpers[i].capacity)
                }
            }
            HelperOne.updateCapacityForAllHelpers(helpers); 
            upgradeApplied = false; 
            console.log("Amélioration appliquée à tous les helperOne actifs !");
        }
    }
});

