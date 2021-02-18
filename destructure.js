//Array destructuring.
// const numbers=[10,11,54,22,66];  //This is one way.
// const [x,y]=numbers 
const [x,y]=[10,11,54,22,66]//This is another way.
// console.log(x,y);

// Object destructuring.
// const person={
//     name:'abul',
//     age:54,
//     salary:30000,            //This is one method.
//     wife:'some one'
// }
// const {name,salary}=person;

const {name,age}={
        name:'abul',
        age:50,
        salary:30000, 
        wife:'some one'
    }
// console.log(name,age);


//create object from variable.
const one=30;
const two=50;
const obj={one,two};
// console.log(obj)

const numbers=[10,11,54,22,66];
numbers.push(70);
const newArray=[...numbers];  //
console.log(numbers)
console.log(newArray)