// // class Users {
// //     constructor(private firstName: string, private lastName: string) {}

// //     get fullName() {
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// // }

// // const joel = new Users('Joel', 'Borofsky')

// // console.log(joel)

// class User {
//   protected _firstName: string = '' // protected acts like private but allows access to any class extending the class
//   private _lastName: string = ''

//   set firstName(name: string) {
//     if (name.trim() === '') {
//       throw new Error('First name cannot be empty')
//     }
//     this._firstName = name
//   }

//   set lastName(name: string) {
//     if (name.trim() === '') {
//       throw new Error('Last name cannot be empty')
//     }
//     this._lastName = name
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`
//   }

//   static eid = 'USER'

//   static greet() {
//     console.log('Hello, User!') // if the method doesn't need access to the data then it can be a static method
//   }
// }

// console.log(User.eid)
// User.greet()

// const user = new User()
// user.firstName = 'Joel'
// user.lastName = 'Borofsky'

// class Employee extends User {
//   constructor(public jobTitle: string) {
//     super() // if the parent class has a constructor, then the child class must call super() to access the parent's constructor
//   }

//   work() {
//     console.log(this._firstName)
//   }
// }

// // abstract classes
// abstract class UIElement {
//   constructor(public identifier: string) {}

//   clone(targetLocation: string) {}
// }

// // you can't directly instantiate an abstract class
// // they're meant to only work as base classes that other classes can inherit from

// class SideDrawer extends UIElement {
//   constructor(public identifier: string, public position: 'left' | 'right') {
//     super(identifier)
//   }
// }
