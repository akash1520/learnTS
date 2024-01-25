//let's talk about generic types today

// Generic types let you create reusable code that works with any data type, like building blocks for functions and classes, all without sacrificing type safety.

type myGenericType<TData> = {
    data: TData
}

//hover your cursor over examples, you'll understand what's happening here
type example1 = myGenericType<string>

type example2 = myGenericType<{firstName: string, lastName: string}>


// now let's learn how to make return objects of the function type safe
//hover your cursor over res in makeFetch call, you'll understand how this is working

const makeFetch = <T>(url:string):Promise<T>=>{
    return fetch(url).then((res)=>res.json())
}

makeFetch<{firstName:string, id:number}>("http://localhost:3000/api/v1").then((res)=>console.log(res))


//how generic types comes in handy irl
//let's understand with an example

const set = new Set();

set.add(1)
set.add("abc");

//we can add any kind of object into the set and it won't throw any type error
//but what if we want a Set which stores only numbers

const set1 = new Set<number>()

set1.add(1)
set1.add("abc") //this won't work and will throw an error