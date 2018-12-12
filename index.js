const chalk = require('chalk');
const print = console.log;
const log = {
    info: (...msg) => {
        print(chalk.bgBlue.black('info'), printLog('blue', msg));
    },
    warn: (...msg) => {
        print(chalk.bgYellow.black('warn'), printLog('yellow', msg));
    },
    error: (...msg) => {
        print(chalk.bgRed.black('error'), printLog('red', msg));
    },
    success: (...msg) => {
        print(chalk.bgGreen.black('success'), printLog('green', msg));
    }
};
function printLog(color, msg) {
    if ( typeof msg === 'object') {
        if (msg.length) {
            return chalk[color](...msg);
        } else {
            return msg;
        }
    } else {
        return chalk[color](msg);
    }
}
module.exports = log;