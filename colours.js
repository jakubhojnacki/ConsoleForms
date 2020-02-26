module.exports = class colours {
    constructor() {
        this.reset = "\x1b[0m",
        this.foreground = {
            black: "\x1b[30m",
            blue: "\x1b[34m",
            brightBlack: "\x1b[90m",
            brightBlue: "\x1b[94m",
            brightCyan: "\x1b[96m",
            brightGreen: "\x1b[92m",
            brightMagenta: "\x1b[95m",
            brightRed: "\x1b[91m",
            brightWhite: "\x1b[97m",
            brightYellow: "\x1b[93m",
            cyan: "\x1b[36m",
            default: "\x1b[39m",
            green: "\x1b[32m",
            magenta: "\x1b[35m",
            red: "\x1b[31m",
            white: "\x1b[37m",
            yellow: "\x1b[33m"
        }
        this.background = {
            black: "\x1b[40m",
            blue: "\x1b[44m",
            brightBlack: "\x1b[100m",
            brightBlue: "\x1b[104m",
            brightCyan: "\x1b[106m",
            brightGreen: "\x1b[102m",
            brightMagenta: "\x1b[105m",
            brightRed: "\x1b[101m",
            brightWhite: "\x1b[107m",
            brightYellow: "\x1b[103m",
            cyan: "\x1b[46m",
            default: "\x1b[49m",
            green: "\x1b[42m",
            magenta: "\x1b[45m",
            red: "\x1b[41m",
            white: "\x1b[47m",
            yellow: "\x1b[43m"
        }
        this.decoration = {
            none: "\x1b[22m\x1b[23m\x1b[24m\x1b[25m\x1b[27m",
            blink: "\x1b[5m",
            bold: "\x1b[1m",
            faint: "\x1b[2m",
            italic: "\x1b[3m",
            reverse: "\x1b[7m",
            underline: "\x1b[4m"
        }
    }
};