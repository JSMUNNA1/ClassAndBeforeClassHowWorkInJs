// class Person{
      
//         constructor(name){
//            this.name="mmnn"
//         }
     

// }

// class Child extends Person{
    
//        constructor(name){
//             super("name")
//             this.m=super.name
//        }
        
// }

// console.log(new Child().m);

class Person {
  constructor(name) {
      this.name = "mmnn";
  }
}

class Child extends Person {
  constructor(name) {
      super(name); // Calls Person's constructor; "name" is passed but not used in this example
      this.m = this.name; // Access instance property directly
  }
}

console.log(new Child().m); // Prints "mmnn"

