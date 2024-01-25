// Day 4
// Generic Type.

/* Generic types in TypeScript allow you to create 
functions, classes, and interfaces that can work with different types of data.*/

// generic type is used when you want to use ANY kind of type with a function
// but then give results according to the specific type you have used while function

// okay so now you know what're we trying to do then tell me what do you think about this

function getUser(params: any): any {
    return (params.email)
}

//now look at this

function getUserT<Type>(params: Type): Type {
    return params;
}

// both looks similar and many people might think if Type allows any kind of type then isn't it the same?
// but it isn't and it will be clear by next example

type User = {
    email: string,
    mobile: number,
    creditCard?: number
}

const akashh: User = {
    email: "akash@gmail.com",
    mobile: 9928090789
}

console.log(getUser(4));
//works right, doesn't throw any error but this will break your code, BECAUSE.... read the function definition again

// now let's try the function with generic type
console.log(getUserT<User>(akashh)) //gotta mention the type explicitly like I did, if you're using any other type than primitives

export{}
