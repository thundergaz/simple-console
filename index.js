const chalk = require('chalk');
const print = console.log;
const log = {
    info: (msg) => {
        print(chalk.bgBlue.black('信息'), chalk.blue(msg));
    },
    warn: (msg) => {
        print(chalk.bgYellow.black('警告'), chalk.yellow(msg));
    },
    error: (msg) => {
        print(chalk.bgRed.black('错误'), chalk.red(msg));
    },
    success: (msg) => {
        print(chalk.bgGreen.black('成功'), chalk.green(msg));
    }
};
module.exports = log;