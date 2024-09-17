/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1+value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */








/* -------------------Promises Basic---------------------------- */
//Synchronous: Execute line by line consecutively in a sequential manner. 
//              Code that wait for operation to complete

/* console.log("task-1");
console.log("task-2");
console.log("task-3"); */

//Aykhne line by line code execute hobe. 

//-----------------------------------------------------------------


//asynchronous: Allows multiple operation to have perform currently without time.
//              Doesn't block the execution flow and allows the program to continue;
//              (I/O operations, Network request, fetching data)
//              Handled with callbacks, Promises, async/await



/* setTimeout(()=>{
    console.log("Task-1"), 300
});
console.log('Task-2');
console.log('Task-3'); */

//aykhane task 2 and 3 execute howar smy o task-1 coltecilo tar 3 sec por task-1 execute hoice aykahne kono ay task-1 take wait korte hoice but at a time sob execute hoitecilo .

//-------------------------------



//async : makes a function return a promise.

//await : makes an async function wait for promise.

/* -----Promises different function then catch diye handle------- */

/* const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
        console.log('Task Completed');
        reject();
    },2000)
})

myPromise.then(function(){
    console.log('Resolved Successfully');
})
myPromise.catch(function(){
    console.log('Rejected your Document');
}) */

/* ------------------------Promises then and catch diye handle--------------------------------- */

/* new Promise((resolve, reject) => {
    let fileLoad = false; //aykhen true hole easily file load korte parbe karon then function ace   resolve er jonne kaj kore mgs show kore dibe. jodi false hoto tahoel reject er vitore duke reject function take call korto se jonne amader kk reject er jonne catch function er help nite hoto 

    if(fileLoad){
        resolve('File Loaded');
    }else{
        reject('File Not Loaded');
    }
}).then(value => console.log(value))
        .catch(error => console.log(error)) */

/* -----Promises with async/await diye handle korte hoel try catch use korte hoy -------- */

/* function fileLoad(){
    return new Promise(function(resolve,reject){
        const loadFile = false;
        if(loadFile){
            resolve('File Loaded');
        }else{
            reject('File Not Loaded');
        }
    })
}

async function myFunction(){
   try{
        const value = await fileLoad();
        console.log(value);
   }catch(error){
        console.log(error);
   }
}

myFunction(); */




