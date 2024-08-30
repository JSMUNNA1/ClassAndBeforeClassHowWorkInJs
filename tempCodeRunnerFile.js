 let set=new Set([0,0,1,1,2])
 const a=[0,0,1,1,2]
for(let i=0;i<5;i++){
  if(set.has(i)){
    set.delete(a[i])
  }else{
      set.add(a[i]);
  }  
}

// Write your code here
  console.log( set.values().value);
  
