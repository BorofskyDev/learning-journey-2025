// the typeof operator is native to JS. 
// It returns a string representing the type of the operand.
// TS also has a typeof operator, and where it's used depends on if it's JS or TS

const userName = 'Joel'

// we may not know in advance what's stored in the cons
// so we can use the typeof operator to get the type of the value stored in the const
// This is a TS instance of typeof
type UserName = typeof userName 

// A more userful example 

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Joel', 'John']
}

// here we use the typeof operator to get the type of the settings object

// you could set an object as a type, but if you do then you'll need to update the type as well as the settings
// so it's better to use the typeof operator

type Settings = typeof settings

// the type of the settings object is now the type of the settings object
// so if the settings object changes, the type will change as well