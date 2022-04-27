const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(!(date instanceof Date)) return "Invalid date!"

  if(String(date.getMonth()).match(/11|0|1/)) return "winter"
  if(String(date.getMonth()).match(/8|9|10/)) return "autumn"
  if(String(date.getMonth()).match(/5|6|7/)) return "summer"
  if(String(date.getMonth()).match(/2|3|4/)) return "spring"
  
}

module.exports = {
  getSeason
};
