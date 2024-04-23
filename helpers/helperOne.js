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
        // Filtrer les helpers actifs de type HelperOne
        let activeHelperOnes = helpers.filter(helper => helper instanceof HelperOne && helper.active);
        
        // Vérifier s'il y a des helpers actifs
        if (activeHelperOnes.length > 0) {
            // Calculer la nouvelle baseCapacity pour tous les helpers actifs
            let newBaseCapacity = activeHelperOnes[0].baseCapacity * BigInt(102) / BigInt(100);
            
            // S'assurer que la capacité augmente d'au moins 1
            newBaseCapacity = newBaseCapacity >= activeHelperOnes[0].baseCapacity + 1n ? newBaseCapacity : activeHelperOnes[0].baseCapacity + 1n;
    
            // Mettre à jour la baseCapacity et la capacité de tous les helpers actifs
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
let baseCapacityHelper1 = document.getElementById('baseCapacityHelper1');

helperButton1.addEventListener('click', function() {
    let helper1 = new HelperOne('HelperOne', '10', '1');
    // console.log(helper1.name);
    // console.log(helper1.price);
    helperOneCounter++;
    helpers.push(helper1);
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
        
        // Vérifier si l'amélioration n'a pas déjà été appliquée
        if (!upgradeApplied) {
            for (let i = 0; i < helpers.length; i++) {
                if (helpers[i] instanceof HelperOne && helpers[i].active) {
                    helpers[i].upgrade(); 
                    console.log(helpers[i].capacity)
                }
            }
            HelperOne.updateCapacityForAllHelpers(helpers); // Mettre à jour la capacité de tous les helpers actifs
            upgradeApplied = false; // Marquer l'amélioration comme appliquée
            console.log("Amélioration appliquée à tous les helperOne actifs !");
        }
    }
});







