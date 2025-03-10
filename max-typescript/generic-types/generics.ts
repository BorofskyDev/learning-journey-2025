let names: Array<string> = ['Joel', 'John']

// This is a generic type
// generic types are types that need to work together with other types
// types where multiple types need to work together to describe a value type

// You can build your own generic type as well

type DataStore<T> = {
  // Often times the T is used as the placeholder for the type that this generic will recieve
  [key: string]: T // I'm simply saying that datastore can now be used with another type, and it will be the type of the value stored under this property
}

let store: DataStore<string | boolean> = {}
store.name = 'Joel'
store.isInstructor = true
// you can now have a datastore that accepts any type of data based on what you need

// There are also generic functions
// Will a an b be strings, booleans, etc? Sometimes, we never know. YOu could use "any," but that will throw an error
// using "any" returns anything - so there's no autocompletion and if something would throw an error, it won't know
// So, you can use generics to help with this
// we're defining a generic function without knowing the value, merge should be used with all kinds of value types
function merge<T>(a: T, b: T) {
  return [a, b]
}

const ids = merge<number>(1, 2)
const users = merge('Joel', 'John') // you can allow TS to infer the types from the data that is passed

// what if you need to use different types for the generic function?
// you can use multiple types for the generic function

function merge2<T, U>(a: T, b: U) {
  return [a, b]
}
// you can add as many placeholders as you need
const numbersAndStrings = merge2(1, '2')

// you can also use generics with objects
// you can use the spread operator to merge the objects
// You could turn this into a generic function
// But it could be that you don't want certain types of values
// you could use a constraint to limit the types of values that can be used
function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return {...a,...b }
}

const mergedObj = mergeObj({userName: 'Joel'}, {age: 41})

// You can also build generic classes

class User<T> {
    constructor(public id: T) {}
}

const user = new User(1)

// You can also build generic interfaces

interface Store<T> {
    [key: string]: T
}

const storeInterface: Store<string> = {}

