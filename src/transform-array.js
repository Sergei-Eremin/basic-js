const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arrI) {
  if(!Array.isArray(arrI)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let arr = [...arrI]
  if(arr.length == 0) return []

  if(!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) {
    return arr
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '--discard-next') {
      if(!arr[i + 1]) {
        arr.splice(i, 1, false)
        continue
      }
      arr.splice(i, 2,false,false)
      i -= 2
    }  
    if(arr[i] == '--discard-prev') {
      if(!arr[i - 1]) {
        arr.splice(i, 1, false)
        continue
      }
      arr.splice(i - 1, 2, false, false)
      i -= 2
    }
    if(arr[i] == '--double-next') {
      if(!arr[i + 1]) {
        arr.splice(i, 1, false)
        continue
      }
      arr[i] = arr[i + 1]
    }
    if(arr[i] == '--double-prev') {
      if(!arr[i - 1]) {
        arr.splice(i, 1)
        continue
      }
      arr[i] = arr[i - 1]
    }
  }
  for(let k = 0; k < arr.length; k++) {
    if(arr[k] == false) {
      arr.splice(k, 1)
      k--
    }
  }
  return arr
}

module.exports = {
  transform
};
