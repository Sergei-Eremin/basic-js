const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  count = 1;
  array = [];
  calculateDepth(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.count++;
        this.calculateDepth(element);
        this.array.push(this.count);
        this.count = 1;
      }
    });
    this.array.sort((a,b) => {
      return b - a
    })
    return this.array[0] || 1;
  }
}

module.exports = {
  DepthCalculator
};
