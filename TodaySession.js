module.exports={munna:"ddd"};
Number.prototype.name="Munna"
console.log(this);
function fun(){
  console.log(this);
  
}

fun.call(10)


