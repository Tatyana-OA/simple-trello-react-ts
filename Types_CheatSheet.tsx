
// Types Recap:

let word: string;
let age: number | string; // number or string
let isStudent: boolean;
let hobbies: string[]; //array of strings
let role: [number,string] //tuple
let personName: unknown; // recommended instead of any

// Functions

let printPeople: (name:string) => void; // a function receiving a string returing undefined;
let printSomething: (name:string) => never; // returns nothing
let returnSum: (a:number, b:number) => number // returns a number


// Type example -> defining a specific object

type Person = {
  name:string;
  age:number;
  style?: string //optional value
}

let person1: Person = {
  name: 'John',
  age: 8
}

let lotsofPeople: Person[] //array of the person object

// Extension of the Person type. Will contain properties of person as well as the newly added.
type ExtendedPerson = Person & {
  job?: string;
  hobbies: string[]
}

let anotherPerson: ExtendedPerson = {
    name: 'Extended Person',
    age: 20,
    hobbies: ['skiing', 'singing']
}
console.log(anotherPerson)


// INTERFACES

interface Cat {
  name: string,
  age: number,
  breed? : string
}

const mushy: Cat = {
  name: 'Wingy',
  age: 4
}

interface BigCat extends Cat {
  weight: number,
}

const panther: BigCat = {
  name: 'Blacky',
  age: 12,
  weight: 30
}
