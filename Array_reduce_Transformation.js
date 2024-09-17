/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let total = init;
    nums.forEach((value)=>{
        total = fn(total, value);
    });
    return total;
};