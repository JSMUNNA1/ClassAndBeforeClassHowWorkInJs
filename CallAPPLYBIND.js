globalThis.name="Global this ";
 module.exports.name="Module Export top-level "  
Number.prototype.name="Number Objects"
module.exports={munna:"mm"}
function fun() {
  console.log(this);  //Name Of this:Objetc1 [Arguments] { '0': 'apply', '1': 'mehod' }
}
const  Arrowfun=()=> {
  console.log(`Name Of this:${this.name}`);//in this case not work call because arrow function of this use own lexical 
                                           //Scoping arrow function this not effect how call the function.
}


const obj={
     name:"Objetc1"
}
let b=10
class A{
   name 
   constructor(name){
       this.name=name
   }

    
      callA(){
           
          console.log("this method",this);
          
      }
}
 const a=new A("Munna");
// a.callA()

fun.call(b)//Name Of this:undefined
fun.call(a);//Name Of this:Munna
const aftersomework=fun.bind(obj,["apply",'mehod']);//Name Of this:Objetc1
//complete work then call 
aftersomework();
a.callA.call(obj)//this method { name: 'Objetc1' }

Arrowfun.call(b)//Name Of this:Module Export top-level 
Arrowfun.call(a)//Name Of this:Module Export top-level 
Arrowfun.call(obj)//Name Of this:Module Export top-level 






