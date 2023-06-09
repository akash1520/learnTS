//--------------------- Tuples ---------------------------------
const tUser=[1,'2',3,'akash',true] // so this is an array which allows a few datatypes like number, string and boolean

//now what if I want to use an array which has fixed length and allows store an object of only a particular datatype at a particular postion
//how would you implement such behaviour, this is where tuples come in the picture
//tuples allow to specify datatype for each position of array
// ex. person:[string,string,number]=[name,lastname,age]

const newTUser:[number,string,boolean]=[1,'akash',true] //try to change the order or input object with different data type it will throw an error

//although it provides this wonderful functionality, it has some weird behaviours
//typically tuples are always immutable, same behaviour can be seen in most of the programming languages
// but in TS

newTUser.push(3);// this shouldn't be allowed
newTUser[0]=2; // this shouldn't be allowed
console.log(newTUser); 

// most devs avoid using tuples or relying on tuples


//-----------------------Enums----------------------------------------
//when you want to limit the values of a variable to a few fix choices you can use enums

// ex. seat types in bus
const window = 0
const normal = 1
const ladiesWindow = 2
const ladiesNormal = 3
const pwd = 4

let seat = window || normal //this works but there's a better way



enum seatChoices { // this will automatically assign the values to this choices in chronological order
    window,
    normal,
    ladiesWindow,
    ladiesNormal,
    pwd
}

const enum foodChoices { 
    veg=10,
    nonveg,  //check the values here
    vegan
}

seat=seatChoices.window //also through this we know there are only a few choices of seat from which we can choose

// okay this is nice but also check the generated js code, because ultimately the code which is going to run or to be used is js only
// now if you check it to reduce that code you can simply add "const" keyword before enum
// if you use the keyword 'const' typescript does the job of find value for the chosen enum variable
// if we don't use const it uses something called iife - go search about it on google, will find something interesting

// ------------------------------- Interfaces -------------------------------------

// interface are kind of like a loosely defined class

interface User{  
    email:string,
    userId:number,      //supports everything type has
    creditCard?:number // ? represents optional field
    startCourse:()=>string // means user should have a method called startcourse and it should return string
    endCourse(coursename:string):boolean     // a method called endcourse should return boolean, same thing different way to write code
}

const akash:User={
    email:'akashparmar@gmail.com',
    userId:23243,
    startCourse:()=>{
        return "start"
    },
    endCourse:(name:"pythoncourse")=>true //will allow to leave the params blank or use some another name for param but can't enter a value with other datatype
}

// interesting thing, you can change interface for your use

// interface User{ // if you will uncomment this code you'll have to add couponCode into const called akash
//     couponCode:string
// }

// you can also extend interface like class

interface Admin extends User{
    role:'admin' | 'TA' | 'student' //will enforce that role value can be only from these three given values
}

const adi :Admin = {
    email:'adi@gmail.com',
    role:'admin',
    userId:23243,
    startCourse:()=>{
        return "start"
    },
    endCourse:(name:"pythoncourse")=>false
}

// you can do similar things with types as well, for that read documentation

export{}