// const inputEl = document.getElementById('user-name')

// if (!inputEl) {
//     throw new Error('Could not find input element') // this infers the null type, which is why the null type is important
// }
// In simple use scenarios you might know that certain elements exist, so an if check will be redundant
// but in larger projects you can add a "!" after the code that could potentially produce a null value
// this tells typescript that this will not yield null in this case - makes it a dangerous operator to use because if you're wrong, you're silencing the error. Only should be used in very rare cases
// the "!" is a non-null assertion operator

// console.log(inputEl.value) // you get an error here because typescript

// console.log(inputEl?.value) // this is the safe way to have an inline check on if inputEl is null. If it's null, it won't check the property, if it's not null, it will check the property. However, without an if statement, there is no fallback code
// in certain situations it makes sense to not have a fallback

// However we still gt the error that the property "value" does not exist on the HTMLElement
// we know this because it knows it'll return an html element, just not the KIND of htmlelement

// to solve this, we can use a type assertion. It's like telling typescript "trust me, this is a HTMLElement"
// const inputValue = (inputEl as HTMLElement).value

// or we can use a conditional type. This is a bit more complex but it's useful when you want to check if the element exists and has the property
// const inputValue = inputEl && inputEl.value

const inputEl = document.getElementById('user-name') as HTMLInputElement | null

console.log(inputEl?.value) // now the error is gone because we're specifying which HTML type we're going to use
// sometimes it's necessary to use this, but anytime you're overriding the type inferred by typescript you're taking the responsibility of working with that type
// and if this turns out to yield a different element, typescript won't tell you but you'll hit a runtime error
