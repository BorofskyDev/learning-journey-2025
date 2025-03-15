// Sometimes you'll come across libraries that are JavaScript libraries 
// all the configuration and code is in javascript
// modern libraries might be built in typescript, but older libraries may not

//lodash is an example, all the code is in JS, not TS
import _ from 'lodash'
// importing from lodash directly doesn't work because the type will always default to "any"
// you typically have to add a declaration file using @types in the install
const numbers = [1, 2, 3, 4, 5 ]

// split into multiple arrays - that's what the _.chunk method in Lodash does

_.chunk(numbers, 2)