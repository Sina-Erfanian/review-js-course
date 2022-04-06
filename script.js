// let arr1 = [1,2,3]
// let arr2 = [1,2,3]

// console.log(arr1 === arr2);

// let name1 = "sina"
// let name2 = "sina"

// console.log(name1 === name2);


// let age = 18

// let newAge = age

// newAge++

// console.log(age);
// console.log(newAge);

// let person = {
//     name : "sina",
//     age : 19
// }

// let anotherPerson = person

// anotherPerson.family = "Ern"

// console.log(person);
// console.log(anotherPerson);


// let arr = [1,3,4,12]

// const res = arr.reduce((acc,curr)=> {
//     console.log("acc : " + acc);
//     console.log("curr : " + curr);
//     return acc + curr
// },0)

// console.log(res);


// let arr = [
//     { name : "laptop" , price : 20 },
//     { name : "tablet" , price : 50 },
//     { name : "phone" , price : 30 }
// ]

// let res = arr.reduce((acc,curr)=> {
//     return acc + curr.price
// },10)

// console.log(res);


// if (true){
//     var name = "sina"
// }
// console.log(name);


// function func(params) {
//    let name = "sina"
// }

// func()

// console.log(name);


// const obj = {
//     name : "sina",
//     age : 19 ,
//     family : "Ern"
// }

// const {name , age , family} = obj

// console.log(name);
// console.log(age);
// console.log(family);



// let [first , secound , third , ...rest] = [1,2,3 ,4,5,6]

// console.log(first);
// console.log(secound);
// console.log(third);

// console.log(rest);


// let pos = [1,2,3]
// let neg = [-1,-2,-3]

// console.log([...neg , ...pos]);

// function roll() {
//     console.log(Math.floor(Math.random() * 7));
// }

// function higher(func) {
//     func()
//     func()
// }

// higher(roll)

// function func(first = 1 , second = 2) {
//     console.log(first * second);
// }

// func(10)


// let arr = ["sina",12 , "Ern"]

// let arr2 = [...arr]

// arr2.push("admin")

// console.log(arr2);



// function medal(first , second , ...others) {
//     console.log(`Gold ${first}`);
//     console.log(`Silver ${second}`);
//     console.log(`thanks the others ${others}`);
// }


// medal("sina","ali","mmd","hasan","jasem","gholi","harchi")