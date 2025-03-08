let hobbies = ['Sports', 'Cooking']

//hobbies.push(100) // it's inferred that this is an array of strings, so adding a number throws an error

// let users: string[] // this is typescript's way of explaining that it will be an array of strings

// let users: (string | number)[] // this is typescript's way of explaining that it will be an array of strings or numbers
let users: Array<string | number> // this is typescript's way of explaining that it will be an array of strings or numbers, but in the proper format, a Generic type
users = [1, 'Max']
users = [5, 1]
users = ['Joel', 'Max']

// let possibleResults: number[] // [1, -1]
// let possibleResults: [number, number] // this is a tuple, letting typescript know this is an array with exactly two values and what the types are
// possibleResults = [1, -1]
// possibleResults = [5, 10, 12] // with the way the code is set up, you can add any number of variables to this. In larger teams, some people may not know or you may not remember how many args are accepted

// let user = {
//     name: 'Joel',
//     age: '41'
//} // inferred as an object with a name and age property

// let user: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: {
//     description: string
//     id: number
//   }
// } = {
//   name: 'Joel',
//   age: 41,
//   hobbies: ['Sports', 'Cooking'],
//   role: {
//     description: 'Software Engineer',
//     id: 1,
//   },
// }
//This is the typical object type format

let val: {} = 'some text' // this works because {} does not mean empty object as a type, it means any value that is not undefined or null

// if you need an object where you don't know what the property will be
let data: Record<string, number | string> // you're saying it's an object (Record), the keys will be strings, and the values will be numbers or strings
data = {
  key: 1,
  key2: 'some text',
}

