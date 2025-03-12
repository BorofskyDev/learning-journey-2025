// Conditional types are useful for building utility or helper types

// Dealing with an array of types, so you need a helper type that makes it easy to extract the types of elements that are in the array

type StringArray = string[]
// type ElementType<T extends any[]> = T[number]

// type Example1 = ElementType<StringArray>

// The problem with the above is you can't use ElementType on anything that isn't an array

// let text = 'hello'

// type Example2 = ElementType<typeof text>

// Conditional types can be used to solve this problem

let text = 1

type GetElementType<T> = T extends any[] ? T[number] : never

type Example1 = GetElementType<StringArray>
type Example2 = GetElementType<typeof text>

// These are advanced and niche features.
// When building an app, you likely will never use these
// When building libraries or frameworks, or extremely large code bases, these features will come in handy

type FullNamePerson = { firstName: string; lastName: string }
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never 


function getFullName<T extends object>(
  person: T
): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as T extends FullNamePerson
      ? string
      : never
  }
  throw new Error('Person does not have a first and last name')
}
// Typescript returns a string, but if the If check doesn't complete, then that's not true. It won't return anything. Thus, a conditional is needed
