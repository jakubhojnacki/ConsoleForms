const screen = require("./screen.js");

(function () {
    let thescreen = new screen(80, 25);    
    for (let loop = 0; loop < 10; loop++) {
        thescreen.clear();
        thescreen.foregroundColour = thescreen.colours.foreground.red;
        thescreen.decoration = thescreen.colours.decoration.reverse;
        thescreen.writeLine("I am a screen");
        thescreen.foregroundColour = "";
        thescreen.writeLine("I hope I work properly...");
        thescreen.decoration = "";
        thescreen.writeLine(`This is loop number ${loop} :-)`);
        thescreen.flush();
    }
})();
