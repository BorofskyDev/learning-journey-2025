function add(a: number, b: number): number {
  return a + b
}
// This explicitly states that the return value type from the function will be a number
// This is a way to check your return, so if you expected a string you'd know your functino was wrong
// in most functions you don't need this because typescript can infer what's being done
// but there are some situations where you do need to define it

function log(message: string): void {
  console.log(message)
} // there is no return, so the return type is void
// this doesn't need to be set because it's inferred
// but it's important because it's a special type you use in conjunction with functions and return values
// for dx you can use void to let other developers know that this functino will always return void, so don't use it for data loading

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage)
  throw new Error(errorMessage)
  // the return type is void, but you can override it to never
  // this function will never be completed - it ends the return. The function doesn't finish, it throws an error.
  // in large projects with large teams, this is useful so no one tries to store any data in it at a later date when refactoring - this lets the developer know it'll never be a completed function
}

const logMsg = (msg: string) => { 
    console.log(msg)
}
// you can pass a function as a value to another function 

function performJob(cb: (msg: string) => void) {// you can type "Function" but this is still too general in most cases
    // if you want to ensure the function works, you can create a function type
    // you do an arrow type and then what the data type is expected on the return
    // you put the parameter type in there, and can accept multiple parameters, and the type that parameter will be


    // ...does something 
    cb('Job Done') // call the callback function
}

performJob(logMsg) // you can pass the function as a value to another function

type User = {
    name: string 
    age: number 
    greet: () => string
}

let user: User = {
    name: 'Joel',
    age: 41,
    greet() {
        console.log('Hello there!')
        return this.name
    }
}