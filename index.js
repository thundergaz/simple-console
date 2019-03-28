const chalk = require('chalk');
const print = console.log;
const colorMap = {
    info: 'blue',
    warn: 'yellow',
    error: 'red',
    success: 'green'
}
const LogF = {
    info: (...msg) => {
        printLog('info', msg);
    },
    warn: (...msg) => {
        printLog('warn', msg);
    },
    error: (...msg) => {
        printLog('error', msg);
    },
    success: (...msg) => {
        printLog('success', msg);
    }
};
function printLog(type, msg) {
    if (msg.some( x => typeof x === 'object')) {
        print(chalk.bgBlue.black(type), ...msg);
    } else {
        print(chalk.bgBlue.black(type), chalk[colorMap[type]](...msg));
    }
}
module.exports = LogF;
module.exports.default = module.exports; // For TypeScript