// JSON.parse -->> JSON format k object format e convert kore dey .

//JSON.stringify -->> Object format k JSON format e convert kore dey .

// JSON k array format e likhte chaile veptic use korte hoy `[1,2,3,4]` --> like this

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){     //Check korbo object ta array or not isArray property boolean value return kore theake jodi array hoy tahole return true otherwise false.
        return obj.length === 0;
    }else{
        let arr = Object.keys(obj);
        return arr.length === 0;
    }
};