class Helper {
    constructor(price, baseCapacity) {
        this.price = BigInt(price);
        this.baseCapacity = BigInt(baseCapacity);
        this.capacity = BigInt(baseCapacity);
        this.active = false;
        this.interval = null;
    }

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




    // buy helper for click
    // buy() {
    //     if (!this.active && count >= this.price) {
    //         count -= this.price;
    //         this.price *= 2n; 
    //         this.active = true;
    //         this.interval = setInterval(() => {
    //             this.updateCounter();
    //         }, 1000);
    //     }
        
    // }

    upgrade() {
        // Empty now but can be overridden in subclasses
    }

    // update the counter 
    updateCounter() {
        count += this.capacity;
        counter.textContent = count.toString();
    }
}

