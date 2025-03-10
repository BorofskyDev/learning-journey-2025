// Might need a flexible type

type DataStore = {
    [prop: string]: boolean | string | number
}

let store: DataStore = {}

store.id = 5
store.isOpen = false

let roles = ['admin', 'editor', 'user'] as const
// sometimes you want ts to infer a more narrow type, use as const

// this makes it a readonly array and cannot be edited 

// satisfies key word

const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>
// by putting satisfies at the end, it forces TS to look at the value
// it checks to see if the value is specific
// it uses the most specific type it can

dataEntries.entry1