let a: null 
// This variable will hold a value of null 

a = null 

//a = "Hi" // error because it's not null

//Alone this isn't helpful, but combined in a union type it's extremely helfpul
// There are times where your variable needs to be cleared or reset, so you might have a string initially but then have it null 
// This works if you use the special null type 

// Related is the undefined type, but not the same

let b: undefined | string 

// b = null // error because it's not undefined

b = "Hi" // b is now a string