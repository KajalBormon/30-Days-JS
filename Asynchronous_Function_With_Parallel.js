/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject)=>{
        let length = functions.length;
        let res = Array(length);
        for(let i=0; i<length; i++){
            functions[i]()
                .then((result)=>{
                res[i] = result;
                length--;
                if(length===0) resolve(res)
            }).catch(reject);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */