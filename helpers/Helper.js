// Class for helper objects that increment the counter automatically
// The Helper class is a parent class that contains common properties and methods for all helper objects.
// The Helper class has a constructor method that takes in the price and baseCapacity of the helper object.
// The Helper class has methods to buy the helper, update the counter, and increment the counter per second.
// The Helper class also has an upgrade method that can be overridden by subclasses to implement specific upgrade logic.
class Helper {
    constructor(price, baseCapacity) {
        this.price = BigInt(price);
        this.baseCapacity = BigInt(baseCapacity);
        this.capacity = BigInt(baseCapacity);
        this.active = false;
        this.interval = null;
    }
    // Function to buy a helper
    buy() {
        if (!this.active && count >= this.price) {
            count -= this.price; 
            this.price *= 2n;
            this.active = true;
            this.interval = setInterval(() => {
                this.updateCounter();
            }, 1000);
        }
    }
    
    // Function to update the counter and display the number of clicks
    upgrade() {
        // Empty now but can be overridden in subclasses
    }

    // Function to update the counter per second
    incrementClicksPerSecond() {
        clicksPerSecond += Number(this.capacity);
    }

    // Function to update the counter and  update the capacity
    updateCounter() {
        this.incrementClicksPerSecond();
        count += this.capacity;
        counter.textContent = count.toString();
    }
}

