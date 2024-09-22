/* const format = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }` */

const { sortBy } = require("lodash");

  /* const arr = `[1,2,3,4]`; */

/* console.log(JSON.parse(arr));

const object = JSON.parse(arr); */

/* const obj = {
  name: "John", 
  age: 23, 
  city: "New York"
}

function check(obj){
  if(Array.isArray(obj)){
    return obj.length===0;
  }else{
    const arr = Object.keys(obj);
    return arr.length === 0;
  }
}

check(); */


/* ----------------------Chunk Array------------------------------ */
/* const arr = [1,2,3,4,5,6,7];

const size = 2;
const result = [];
for(let i=0; i<arr.length; i+=size){
  let slice = arr.slice(i, i+size);
  console.log(slice);
  result.push(slice);
}
console.log(result); */

/* ----------------------Array ProtoType last----------------------- */

/* const arr = [1,2,3];

Array.prototype.last = function(){
  return this.length === 0 ? -1 : this[this.length-1];
} */

 
 /* ----------------------Array Sort By----------------------- */ 

const arr = [4,5,3,1]

arr.sort((a,b)=>{
  return a-b;
});
console.log(arr);


