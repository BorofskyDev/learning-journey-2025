function process(val: unknown) {
  // we may not know what the value will look like, because of different data sources
  // we could create a union type listing al the potential values, and this is a solution, but it's very long
  // we may not even know what kinds of values we will eventually get
  // we could use the any type but then anything is allowed without any restrictions, and in a production environment that's a no-go
  // so we can use the unknown type, which forces the developer to add some extra if checks before using the recieved value
  // unkonwn is a message to the developer

  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  )
    val.log()
}

// you can use any, but the val.log() could result in a run time error.
// unknown prevents this from happening because it lets the developer know, "Hey, we don't know what will come through here so you need some checks"
// in library code you may not know how your code will be used - it could recieve a string, a number, etc
