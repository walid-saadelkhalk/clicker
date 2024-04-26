let helperTwoCounter = 0;

class HelperTwo extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + helperTwoCounter;
    }
    
    static updateCapacityForAllhelpers2(helpers2) {
        for (let i = 0; i < helpers2.length; i++) {
            if (helpers2[i].active) {
                helpers2[i].capacity += helpers2[i].capacity * BigInt(2) / BigInt(100);
                console.log("La capacité de l'helperTwo a été doublée :", helpers2[i].capacity);
            }
        }
    }

    upgrade() {
        let activeHelperTwos = helpers2.filter(helper => helper instanceof HelperTwo && helper.active);
        

        if (activeHelperTwos.length > 0) {
            let newBaseCapacity = activeHelperTwos[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperTwos[0].baseCapacity + 1n ? newBaseCapacity : activeHelperTwos[0].baseCapacity + 1n;
    

            for (let helper of activeHelperTwos) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
                console.log("Capacité de", helper.name, "après l'amélioration :", helper.capacity);
            }
    
        }
    }
    
}

let helpers2 = [];
let helperButton2 = document.getElementById('helperButton2');
let ameliorationButton2 = document.getElementById('ameliorationButton2');

let helperTwoPrice = '100';
        
helperButton2.addEventListener('click', function() {
    let priceHelper2Element = document.getElementById('priceHelper2');
    let priceHelper2 = BigInt(priceHelper2Element.textContent);
    let helper2 = new HelperTwo('HelperTwo', helperTwoPrice, '1');
    helperTwoCounter++;
    helpers2.push(helper2);
    helper2.buy();
    priceHelper2Element.textContent = (priceHelper2 * BigInt(2)).toString();
    helperTwoPrice = helper2.price.toString();
});

var upgradeApplied = false;


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







