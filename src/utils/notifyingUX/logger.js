const prefix = 'app::';

/* from here we can adjust the behavior in the whole app or add save to file */
export const logInfo = (info) => { console.log(`${prefix} ${info}`) }
export const logWarning = (warning) => { console.warn(`${prefix} ${warning}`) }
export const logError = (error) => { console.error(`${prefix} ${error}`) }
