//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives:

let age: number
age =12

let userName: string | string[]
userName = 'Bruno'

let isInstructor: boolean
isInstructor = true

//More complex types:

let hobbies: string[]
hobbies = ['Sports', 'Cooking']

type Person = {
    name: string;
    age: number;
}

let person: Person
person = {
    name: 'Max',
    age: 32
}
// person = {
//     isEmployee: true
// }

let people:Person[]

// Type inference:

let course: string | number = 'React - The Complete Guide'
course = 12345

//Function & types:

function add(a: number, b: number) {
    return a + b
}

function print(value: any) {
    console.log(value)
}

//Generics:

function insertAtBeginning(array: any[], value: any){
     
}




