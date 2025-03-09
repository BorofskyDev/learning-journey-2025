interface Authenticatable {
  email: string
  password: string
  // you don't define the method here, you're only describing the shape or type of the method
  login(): void
  logout(): void
}

// interface as an object type

let user: Authenticatable

user = {
  email: 'test@example.com',
  password: 'abc1',
  role: 'admin',
  login() {
    // do login stuff
  },
  logout() {
    // do logout stuff
  },
}

// using interface with a function
function authenticate(auth: Authenticatable) {
  // do authentication stuff
}

// using interface with classes
class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}
  role: string = 'user'
  login() {
    // do login stuff
  }
  logout() {
    // do logout stuff
  }
} // you can implement multiples by separating with commas

// you can use them as contracts that force a class to have a bigger shape - if you're building a third party library or a huge project, this is helpful

// why create an interface instead of a type?
// interfaces can be implemented by classes
// interfaces can be extended by other interfaces
// interfaces can be merged with other interfaces
// if all you're doing is creating a shape then you could use either

interface Authenticatable {
  role: string

  // typescript automatically rolls these into one
  // this is mostly useful if working with a library or a code yuou don't directly control
  // if you need to add a property that isn't on the native one, you can do it this way
}


// you can extend an interface with the extends keyword 
// this is how an interface can be extended

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin'
    // additional properties can be added here
}