const SERVICE_ACCT_ID = '1021404286735-2568rfi2gev8jtsdj5s5cs1gildske8a.apps.googleusercontent.com';
const CALENDAR_ID = {
  'primary': '',
  'calendar-1': 'calendar1@group.calendar.google.com',
  'calendar-2': 'calendar2@group.calendar.google.com'
};
const TIMEZONE = 'UTC+08:00';
const KEYFILE = '<yourpem.pem>';

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.keyfile = KEYFILE;           //or if using json keys - module.exports.key = key;
module.exports.timezone = TIMEZONE;
