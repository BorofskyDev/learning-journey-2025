// type FileSource = { path: string }
// const fileSource: FileSource = {
//   path: 'some/path/to/file.csv',
// }

// type DBSource = { connectionUrl: string }
// const dbSource: DBSource = {
//   connectionUrl: 'some-connection-url',
// }

// type Source = FileSource | DBSource

// Because this could be a file source or a database source, we have to figure out what parameter type we need
// We need a type guard, an if check that ensures the proper piece of code is execuded based on the code we get
// function loadData(source: Source) {
//   if ('path' in source) {
//     // source.path => use that to open the file

//     return
//   }

//   // source.connectionUrl => use that to connect to the database
// }

// you can also use a discriminated union 
// a discriminated union is a union where each member has a common property that can be used to determine which member it is

// type FileSource = { type: 'file'; path: string }
// const fileSource: FileSource = {
//   type: 'file',
//   path:'some/path/to/file.csv',
// }
// type DBSource = { type: 'db'; connectionUrl: string }
// const dbSource: DBSource = {
//   type: 'db',
//   connectionUrl: 'some-connection-url',
// }

// type Source = FileSource | DBSource

// function loadData(source: Source) {
//   if (source.type === 'file') {
//     // source.path => use that to open the file
//     // it correctly infers the type of source because of the discriminated type source
//     return 
//   }
//   // source.connectionUrl => use that to connect to the database
//   // it correctly infers the type of source because of the discriminated type source
// }