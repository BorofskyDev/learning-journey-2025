// class User {
//   name: string
//   age: number

//   // constructor() { // no need for a constructor if it's a fixed property
//   // this.name = 'Joel' // in Vanilla JS you can just do it this way - but in TS you must add the property a different way
//   // }
//   // however, it's rare to have a class that doesn't accept dynamic info, so a constructor is almost always set up, but in typescript it's a bit different
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// A short cut so the properties don't have to be created and thus making the code longer

// class User {
//   // if you add public before a parameter, then TS will make a property of the same name behind the scenes
//   // it will also assign the value that is recieved automatically to that property
//   constructor(public name: string, public age: number) {}

//   greet() {
//     console.log('My age:' + this.age)
//   }
// }

// // creating a new user

// const joel = new User('Joel', 41)
// const fred = new User('Fred', 40)

// console.log(joel, fred)

// public dictates taht the property can be accessed from outside the class
// private dictates that the property can only be accessed from within the class
// protected dictates that the property can only be accessed from within the class or from a class that extends it
// readonly dictates that the property can only be read but not changed