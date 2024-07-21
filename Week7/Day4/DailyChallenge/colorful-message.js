import chalk from 'chalk';
export const log = console.log;

// log(chalk.red.text1);

log(
	chalk.red("Red one for love \n") +
	chalk.green("Green one for peace \n") +
	chalk.blue("Blue one for dream")
);