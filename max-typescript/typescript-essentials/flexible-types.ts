// let age: any = 36 // any type can be anything, but not recommended on large projects or for large applications
// a better alternative are union types

let age: number | string = 36 // age can be either a number or a string
// ...

age = "37"