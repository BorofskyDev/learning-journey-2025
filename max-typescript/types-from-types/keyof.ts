type User = { name: string; age: number }

// now let's say you want a type that holds all the properties of User

type UserKeys = keyof User

let validKey: UserKeys

validKey = 'name'

// if you want a utility function that will be used in multiple instances
// you could set up a generic function, one that extends object
// and takes a key of the object as a parameter

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key]
  if (val === undefined || val === null) {
    throw new Error('Property not found')
  }
}

const data = { id: 1, isStored: false, values: [1, -5, 10] }
const isStored = getProp(data, 'isStored')

const user = { name: 'Joel', age: 41 }

const val = getProp(user, 'name')
