/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let total = args.length;
    return total;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */