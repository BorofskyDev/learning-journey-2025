//sometimes a value will be optional

// function generateError(msg: string) { // what if the message is optional? What if you want to sometimes generate a message and sometimes not?
//     throw new Error(msg)
// }

function generateError(msg?: string) {
  // if the message is optional, you add a question mark. This lets typescript know that this data may not be passed
  throw new Error(msg)
}

// you can also use optional Object Types

type AppUser = {
  name: string
  age: number
  role?: 'admin' | 'guest'
}


// you can also have the coalesce opperater of ??

let input = ''
const didProvideInput = input ?? false
// the check provided by javascript checks whether the left side is null or undefined and only looks that. It doesn't look for falsy v alues, just null or undefined. 
// If it finds it, the value on the right side is stored 
// If there is an input, then the input will be taken since it's not undefined

