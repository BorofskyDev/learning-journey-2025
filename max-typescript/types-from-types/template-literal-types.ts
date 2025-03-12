// Template literal values in vanilla JS
// Template literals are a new feature in ES6 that allow you to create strings that span multiple lines and include expressions. They are enclosed in backticks (` `) instead of quotes.

// const mainUserName = 'Joel'

// const greeting = `Hi there, ${mainUserName}!`

// in Typescript, there are types that function in a similar way

// You might have literal types

type ReadPermissions = 'no-read' | 'read'

type WritePermissions = 'no-write' | 'write'

// // And if you need to create unions of all the types above, you could write it out
// type FilePermissions =
//   | 'no-read-write'
//   | 'read-no-write'
//   | 'no-read-no-write'
//   | 'read-write'

// // or you could use template literals

type FilePermissions = `${ReadPermissions}-${WritePermissions}`

type DataFile = {
  data: string
  permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Changed`

// now we can create a specific mapped type
type DataFileEvents = {
  [Key in DataFileEventNames]: () => void // now you can put a function in there
}
