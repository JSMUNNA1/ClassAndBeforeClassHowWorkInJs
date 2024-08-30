// function lonelyinteger(a) {
//   const set=new Map();
//   for(let i=0;i<a.length;i++){
//         if(set.has(a[i])){
//           set.set(a[i],set.get(a[i])+1)
//         }else{
//             set.set(a[i],1);
//         }  
//   }
//   console.log(set);
  
// Write your code here
//   let unique=0;
//     set.forEach((value,key)=>{
//           if(value===1){
//              unique=key;
//           }
//     })
//   return unique;
// }
// console.log(lonelyinteger([4 ,9 ,95 ,93 ,57, 4, 57, 93, 9]));
// let num='0'-991;
//  console.log(num);
 
// console.log("1"-num);
// console.log(0+ +num);
//  const ab={
//     ab:"ccc",
//      ab:12,
//  }
//   console.log(ab);

// const jsonText = `{
//   "browsers": {
//     "firefox": {
//       "name": "Firefox",
//       "pref_url": "about:config",
//       "releases": {
//         "1": {
//           "release_date": "2004-11-09",
//           "status": "retired",
//           "engine": "Gecko",
//           "engine_version": "1.7"
//         }
//       }
//     }
// }
// }`;

//console.log(JSON.parse(jsonText).browsers.firefox.name);
// (function test(){
//     this.munna="munna"
//   console.log(globalThis); // returns window
// })();



// class MyClass {
         
//   constructor(name) {
//       this.name = name;
    
//   }
//   showThis(){
    
//     console.log(this);
// }
 
// }


// const instance = new MyClass("Alice");
// const method = instance.showThis;
// method(); // Logs: instance (the `this` is bound to the class instance)

// globalThis.munna="munna";
// module.exports.munna="munna1"
// const obj={
//       munna:"sunna",
//       getName:function(){
         

//            console.log(this.munna);
           
//       }
// }
// obj.getName();
 
globalThis.name="Global"
module.exports.name="top-level Obj"

const obj={
     name:"munna",
     dept:"react-trainee",
     eId:3016,
     getName:function(){
          console.log(`Employee Deatils:${this.name}`);
          
     },
     getArrowName:()=>{
        console.log(`Employee Deatils Using Arrow Method:${this.name}`);
          
     }
}
const obj2={
  name:"Raju",
  dept:"react-trainee",
  eId:3017,
  getName:function(){
       console.log(`Employee Deatils:${this.name}`);
       
  }
}
  obj.getName();//Employee Deatils:munna
  obj2.getName();//Employee Deatils:raju
  obj.getArrowName() //Employee Deatils Using Arrow Method:top-level Obj
const getName1=obj.getName;
getName1()//Employee Details globa 
const getNameArrow=obj.getArrowName;
getNameArrow();//Employee Deatils Using Arrow Method:top-level Obj