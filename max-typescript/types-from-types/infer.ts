function add(a: number, b: number) {
  return a + b
}

// now you want to write a utility type that just returns the information

type AddFn = typeof add
// you can use the infer to get the return value type
type ReturnValueType<T> = T extends (...args: any[]) => infer RV
  ? RV
  : never


type AddFnReturnValueType = ReturnValueType<AddFn>