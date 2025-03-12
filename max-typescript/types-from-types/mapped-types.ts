type Operations = {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
}

// The Results type is related to the Operations type, just simpler
// type Results<T> = {
//     [Key in keyof T]: number
// }

// adding a ? makes the properties optional
type Results<T> = {
  [Key in keyof T]?: number
}

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b
  },
  subtract(a: number, b: number) {
    return a - b
  },
}

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 3),
  // because the properties are required, you must include both
}

// you can make properties optional
// now if these are optional, but you want to make them required when called in the mapped type, you'd add a -?
type Operations2 = {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
}

//  You can make properties read only as well 
type Results2<T> = {
    readonly [Key in keyof T]: number
    // ... and you can add more properties if you want
    // [Key in keyof T]?: number
}
