//You'll sometimes deal with scenarios where you have a fixed set of available values you want to accept 

//let userRole = 0 //could be an admin (0), an editor (1), a guest (2), whatever
// now userRole will accept any kind of number, when you might need to restrict the numbers
// without any additional code, there's no clear idea what 0 means and what is allowed
// this is where enums come in

// enum Role {
//     Admin, 
//     Editor, 
//     Guest,
// }

// let userRole: Role = Role.Admin // you can use the enum to grab the values

// userRole = Role.Guest 

//There's another way to use enums, so enums are often avoided for the other preference 
 //let userRole: 'admin' = 'admin' // the first argument is not a value, but a type. It's telling typescript that the allowed value for userRole is this specific string

//it gets more useful when you make it a union type 

let userRole: 'admin' | 'editor' | 'guest' = 'admin' // now userRole can be one of these three values
userRole = 'editor'

// you can use literal types to avoid using tuples
let possibleResults: [1 | -1, number]

possibleResults = [1, -1]


// you can end up with very long definitions, which can be a problem if you want to use it elsewhere in a code

// function access(role: 'admin' | 'editor' | 'guest') { //this is copying and pasting the code, which is a problem because if you change it in one part, it could break the code
//     // code here

// }

// this is why we have type aliases or "custom types"

type Role = 'admin' | 'editor' | 'guest'
// type User = {
//     name: string,
//     age: number, 
//     role: Role, // you can use your custom types in other custom types - this is useful when working in a relational database that will have relational data
//     permissions: string[]
// }


function access(role: Role) { // now we can use the Role type everywhere in the code
    // code here
}