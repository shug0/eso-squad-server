import chalk from "chalk";
const log = console.log;

export const logDone = (task: string) => log("✅", chalk.green(task));
export const logInfo = (info: string) => log("💬", chalk.grey(info));
export const logError = (err: any) => log("⛔️", chalk.red(err));
