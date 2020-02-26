module.exports = class terminal {
    constructor() {        
    }

    clear() {
        process.stdout.write("\x1b[0J");
    }

    move(pX, pY) {
        process.stdout.write(`\x1b[${pX};${pY}H`);
    }    

    writeLine(pText) {
        console.log(pText);
    }
}