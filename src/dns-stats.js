const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if(domains.length === 0) return {}
  let obj = {}
  let arr = []
  let arrForObj = []
  for(let i = 0; i < domains.length; i++) {
    let str = domains[i].split('.').reverse()
    for(let j = 0; j < str.length; j++) {
      str[j] = `.${str[j]}`
    }
    arr.push(str)
  }

  for(let k = 0; k < arr.length; k++) {
    let result = ''
    for(let r = 0; r < arr[k].length; r++) {
      result += arr[k][r]
      arrForObj.push(result)
    }
  }
  for(let i of arrForObj){
    if(!obj[i]) obj[i] = 0
    if(obj[i] >= 0) obj[i]++
  }

  return obj
}

module.exports = {
  getDNSStats
};
