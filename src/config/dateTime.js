import { DateTime, } from 'luxon';

export { DateTime } // to be used in the app, if needed
export const appDateTime = () => DateTime.local(); //DateTime object (from luxon)
export const appDateTimeJS = () => appDateTime().toJSDate(); //Pure JS Date object from the luxon DateTime object
export const appDateTimeUTCoffset = () => appDateTime().offset; //UTC offset (minutes) ex. 120

export const APP_TIMEZONE = appDateTime().offsetNameShort; //GMT+2
export const APP_TIMEZONE_NAME_LONG = appDateTime().offsetNameLong; //Eastern European Standard Time
export const APP_TIMEZONE_NAME_ABBREVIATION = appDateTime().offsetNameLong.split(' ').map(word => word[0]).join(''); // EEST - not perfect
export const APP_TIMEZONE_NAME_SPECIFIC = `Timezone: ${appDateTime().zone.name}`; //"Europe/Sofia"

//default exports
const dateTime = {
    DateTime,
};

export default dateTime;

//https://moment.github.io/luxon/#/?id=luxon
