let userName: string // typescript can't infer because there's nothing assigned to it
let userAge = 38 // typescript can infer because of what has been assigned

// ...

userName = 'Joel'
//userAge = "34" // error because it's a string and not a number

// function add(a: number, b = 5) {
//   // when passing props sometimes you need to assign the prop to a stype, but not necessary if infered
//   return a + b
// }

// add(10)
// //add('10', 5) // error because it's a string and not a number
// add(10, 6) // works because it's a number