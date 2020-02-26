colours = require("./colours.js");
dimensions = require("./dimensions.js");
position = require("./position.js");
terminal = require("./terminal.js");

module.exports = class screen {
    constructor(pWidth, pHeight) {
        this.terminal = new terminal();
        this.dimensions = new dimensions(pWidth, pHeight);
        this.cursor = new position(1, 1);
        this.clearBuffer();       
        this.colours = new colours(); 
        this.foregroundColour = "";
        this.backgroundColour = "";
        this.decoration = "";
    }

    clearBuffer() {
        this.buffer = new Array(this.dimensions.height);
        for(let index = 0; index < this.buffer.length; index++)
            this.buffer[index] = new Array(this.dimensions.width);
    }

    clear() {
        this.terminal.clear();
        this.clearBuffer();
        this.move(1, 1);
    }

    flush() {
        this.terminal.move(1, 1);
        this.buffer.forEach(bufferRow => {
            let bufferLine = "";
            bufferRow.forEach(bufferCell => {
                bufferLine += bufferCell;
            })
            this.terminal.writeLine(bufferLine);
        });
    }

    move(pX, pY) {
        if (pX < 1)
            pX = 1;
        if (pX > this.dimensions.width)
            pX = this.dimensions.width;
        if (pY < 1)
            pY = 1;
        if (pY > this.dimensions.height)
            pY = this.dimensions.height;
        this.cursor = new position(pX, pY);
    }

    write(pText) {
        let format = this.colours.reset;
        if ((this.foregroundColour) || (this.backgroundColour) || (this.decoration)) {
            const foreground = this.foregroundColour ? this.foregroundColour : this.colours.foreground.default;
            const background = this.backgroundColour ? this.backgroundColour : this.colours.background.default;
            const decoration = this.decoration ? this.decoration : this.colours.decoration.none;
            format = foreground + background + decoration;
        }
        for(let index = 0; index < pText.length; index++) {
            const output = format + pText[index];
            this.buffer[this.cursor.y - 1][this.cursor.x - 1] = output;
            if (this.cursor.x < this.dimensions.width)
                this.cursor.x++;
            format = "";
        }
    }

    writeLine(pText) {
        this.write(pText);
        if (this.cursor.y < this.dimensions.height)
            this.cursor.y++;
        this.cursor.x = 1;
    }    
}