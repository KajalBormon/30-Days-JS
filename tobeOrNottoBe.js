/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let values = val;
    function toBe(val){
        if(values===val){
            return true;
        }
        else{
            throw new Error('Not Equal');
        }
    }
    function notToBe(val){
        if(values!==val){
            return true;
        }else{
            throw new Error('Equal');
        }
    }
    return{
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */