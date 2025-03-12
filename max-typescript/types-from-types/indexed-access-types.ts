// const appUser = {
//     name: 'Joel',
//     age: 41,
//     permissions: [{id: 'p1', title: 'Admin', description: 'Admin access'}]
// }

// type AppUser = typeof appUser

type AppUser = {
  name: string
  age: number
  permissions: {
    id: string
    title: string
    description: string
  }[]
}

// you could copy and paste the permissions type, btu that violates DRY AND if you ever change anything, you'd have to change it down here as well
type Perms = AppUser['permissions']

// what if you want a Perm type that explains an individual and not a type?

type Perm = Perms[number]
type Names = string[]
type Name = Names[number]