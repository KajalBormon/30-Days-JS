/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0){
        return arr.slice();
    }
    let flatterArr = [];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            const nested = flat(arr[i], n-1);
            flatterArr.push(...nested);
        }else{
            flatterArr.push(arr[i]);
        }
    }
    return flatterArr;
};