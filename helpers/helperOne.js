let helperOneCounter = 0;

class HelperOne extends Helper {
    constructor(name, price, baseCapacity) {
        super(BigInt(price), BigInt(baseCapacity))
        this.name = name + helperOneCounter;
    }
    
    static updateCapacityForAllHelpers(helpers) {
        for (let i = 0; i < helpers.length; i++) {
            if (helpers[i].active) {
                helpers[i].capacity += helpers[i].capacity * BigInt(2) / BigInt(100);
                console.log("La capacité de l'helperOne a été doublée :", helpers[i].capacity);
            }
        }
    }

    upgrade() {
        let activeHelperOnes = helpers.filter(helper => helper instanceof HelperOne && helper.active);
        

        if (activeHelperOnes.length > 0) {
            let newBaseCapacity = activeHelperOnes[0].baseCapacity * BigInt(102) / BigInt(100);
            
            newBaseCapacity = newBaseCapacity >= activeHelperOnes[0].baseCapacity + 1n ? newBaseCapacity : activeHelperOnes[0].baseCapacity + 1n;
    

            for (let helper of activeHelperOnes) {
                helper.baseCapacity = newBaseCapacity;
                helper.capacity = newBaseCapacity;
                console.log("Capacité de", helper.name, "après l'amélioration :", helper.capacity);
            }
    
            console.log("Amélioration appliquée à tous les helperOne actifs !");
        }
    }
    
}


let helpers = [];
let helperButton1 = document.getElementById('helperButton1');
let priceHelper1 = document.getElementById('priceHelper1');
let ameliorationButton1 = document.getElementById('ameliorationButton1');

helperButton1.addEventListener('click', function() {
    let helper1 = new HelperOne('HelperOne', '10', '1');
    // console.log(helper1.name);
    // console.log(helper1.price);
    helperOneCounter++;
    helpers.push(helper1);
    priceHelper1.textContent = helper1.price.toString();
    helper1.buy();
    // console.log(helpers);
    // console.log(helper1.baseCapacity)
    console.log("HelperOne acheté !");
});

var upgradeApplied = false;


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







