const chalk = require('chalk');
const print = console.log;
const log = {
    info: (msg) => {
        print(chalk.bgBlue.black('信息'), printLog(msg,'blue'));
    },
    warn: (msg) => {
        print(chalk.bgYellow.black('警告'), printLog(msg,'yellow'));
    },
    error: (msg) => {
        print(chalk.bgRed.black('错误'), printLog(msg,'red'));
    },
    success: (msg) => {
        print(chalk.bgGreen.black('成功'), printLog(msg,'green'));
    }
};
function printLog(msg, color) {
    if ( typeof msg === 'object') {
        return msg;
    } else {
        return chalk[color](msg);
    }
   
}
module.exports = log;