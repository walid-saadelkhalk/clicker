let HelperFourCounter = 0;

class HelperFour extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + HelperFourCounter;
    }
    
    static updateCapacityForAllhelpers4(helpers4) {
        for (let i = 0; i < helpers4.length; i++) {
            if (helpers4[i].active) {
                helpers4[i].capacity += helpers4[i].capacity * BigInt(2) / BigInt(100);
                console.log("La capacité de l'HelperFour a été doublée :", helpers4[i].capacity);
            }
        }
    }

    upgrade() {
        let activeHelperFours = helpers4.filter(helper => helper instanceof HelperFour && helper.active);
        

        if (activeHelperFours.length > 0) {
            let newBaseCapacity = activeHelperFours[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperFours[0].baseCapacity + 1n ? newBaseCapacity : activeHelperFours[0].baseCapacity + 1n;
    

            for (let helper of activeHelperFours) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
                console.log("Capacité de", helper.name, "après l'amélioration :", helper.capacity);
            }
    
        }
    }
    
}

let helpers4 = [];
let helperButton4 = document.getElementById('helperButton4');
let ameliorationButton4 = document.getElementById('ameliorationButton4');

let HelperFourPrice = '40';
        
helperButton4.addEventListener('click', function() {
    let priceHelper4Element = document.getElementById('priceHelper4');
    let priceHelper4 = BigInt(priceHelper4Element.textContent);
    if (count >= priceHelper4) {
        let helper4 = new HelperFour('HelperFour', HelperFourPrice, '4');
        HelperFourCounter++;
        helpers4.push(helper4);
        helper4.buy();
        priceHelper4Element.textContent = (priceHelper4 * BigInt(2)).toString();
        HelperFourPrice = helper4.price.toString();

        let HelperFourImage = document.createElement('img');
        HelperFourImage.src = 'assets/sprites/kazuya_world.png';
        HelperFourImage.classList.add('HelperFour-image');

        let kazuyaWorldContainer = document.getElementById('kazuya_world');
        let helperImagesContainer = kazuyaWorldContainer.querySelector('.helper-images-container');
        helperImagesContainer.appendChild(HelperFourImage);
    }
});

var upgradeApplied = false;


ameliorationButton1.addEventListener('click', function() {
    let priceImprovement = BigInt(ameliorationHelper4.textContent);
    if (count >= priceImprovement) {
        count -= priceImprovement;
        ameliorationHelper4.textContent = (priceImprovement * BigInt(2)).toString();
        

        if (!upgradeApplied) {
            for (let i = 0; i < helpers4.length; i++) {
                if (helpers4[i] instanceof HelperFour && helpers4[i].active) {
                    helpers4[i].upgrade(); 
                    console.log(helpers4[i].capacity)
                }
            }
            HelperFour.updateCapacityForAllhelpers4(helpers4); 
            upgradeApplied = false; 
        }
    }
});









