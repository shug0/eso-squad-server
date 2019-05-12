import chalk from 'chalk'
const log = console.log

export const logDone = (task) => log('✅', chalk.green(task))
export const logInfo = (info) => log('💬', chalk.grey(info))
export const logError = (err) => log('⛔️', chalk.red(err))
