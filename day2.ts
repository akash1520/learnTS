// ------------------------------functions---------------------------------
function addTwo(num) { // ---- bad! mention the type of variables and also return type
    return num + 2
}


function addTwoBetter(num: number): number { // ---- good boi practice
    return num + 2;
}

const heros = ["ironman", "superman", "hulk"]
heros.map((hero): void => {
    console.log(hero)
}) // ---- it will detect the type for herod by the array passed but should mention return type for map iterator

// ---- some function use never return a value

function consoleError(errmsg: string): never { // ---- never is used when a function throws an error or terminates the program
    throw new Error(errmsg);
}


// ---- how to return object from function
//         ---- name of parameters    type of parameters       return type         
function createUser({ name, isPaid }: { name: string, isPaid: boolean }): { name: string, isPaid: boolean, id: number } {
    return { name: name, isPaid: isPaid, id: Math.random() };
}
// --------- there's trick or error in type script though, it allows you to pass object with unknown values  ---------

let Akash = {
    name: "Akash",
    isPaid: false,
    favSong: "City life - Raghav Meatle"
}
console.log(createUser(Akash));// shouldn't be allowed as we accept only two params but this is a glitch in TS

// so how to deal with such behaviour and here type alias comes in the picture

// ------------------------- type -----------------------------------

type User = {
    readonly id: number  //can't change this field because it's readonly can be useful with Mongo Ids
    name: string
    isPaid: boolean
}

function createUserBetter({ name, isPaid }: User): User {
    return { id: Math.random(), name: name, isPaid: isPaid }
}

// console.log(createUserBetter(Akash)) 
// now this is right, this will throw if you pass Akash(object with extra parameter) here
console.log(createUserBetter({ name: "Akash", isPaid: true, id: 2 }));


// so this is how you can create your own type for different objects
//some stupid people even create types like "theirname" which is basically string 
//but with their name as the name of the type

//------------------------------- Arrays---------------------------------
const myNums = [] // by default arrays has never type assigned to it.
//In TypeScript, the type of an array is not explicitly assigned by default because TypeScript allows for flexibility in the type of elements that can be stored in an array.
// myNums.push(1); //will throw an error

const newNums: number[] = [] //good practice
const newerNums: Array<number> = [] //good practice, both are same only
newNums.push(1) //works
newerNums.push(2) //works

const doubleArray: Array<Array<number>> = [] //array of arrays 
//ez stuff


// ------------------------------- Union Types ------------------------------------
let score: number | string; // yeah this is union type, union of two types
score = 44;
score = '55';              // both are allowed

//let's take a better example

type customer = {
    name: string
    id: number
}

type admin = {
    username: string
    id: number
}

let aakash: customer | admin = {
    name: "akash",
    id: 2
}

aakash = {
    username: "akash1520",
    id: 3
}


function getId(id: number | string): void {
    //    id.toUpperCase() //not allowed as id can also be number

    if (typeof id === "string") {
        id.toUpperCase() //allowed,try hovering over id variable
    } else {
        id.toExponential(2)
    }

}


// let nums: number[] | string [] = [1,2,"akash"] // not allowed because it's different then array of union of two types 
let nums: (number | string)[] = [1, 2, 'akash'] //works

let anothernums: number[] | string[] = [1, 2, 3]
    anothernums = ["hey", "there"]

// ====================================================================

// it's day 2 wrap, another basic TS things will be finished by tomorrow

export { }