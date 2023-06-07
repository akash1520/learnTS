/* Day 1  */
/*---intro---*/
let User = {name:"akash", age:"20"}
console.log(User.name);
// console.log(User.email); throws error good🤌

/*---Variables--- */
let email="akashparmar@gmail.com" //good practice
console.log(email.charAt(0)); //only provides string methods "also good (not impressive tho)"
console.log(email+1);// doesn't throws the error but it should

let emailNew:string="parmarakash@gmail.com" // not good practice, no need to explicitly declare the type

// let hero; //refrain from using this, it has implict type of any, any allows any type value and it gives away the whole idea of ts
let hero:string; // good practice
let getHero=()=>"Thor"//there's better way to do this
hero=getHero()


/* And day 1 ends here because I gotta sleep. This will take max 10 min to read and try for yourself.  */ 

export {}



