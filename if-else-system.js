const money=150;
//Ternary if else, it will work when you have two condition's value like if and else.
// before ? sign will be condition like money>150 is condition that is use inside if.
// after ? sign first value will be the true condition's value like Biriyani and second value will be the false condition's value like Alur vorta.
// let food=money>150?'Biriyani':'Alur vorta';
// console.log(food);

//It will work when you have only one condition's value like you have only if condition that means true condition's  value.
let food=money>150 &&'Biriyani';  //It is if condition's value.
console.log(food);

//It will work when you have only one condition's value like you have only else condition that means false condition's  value.
let food= money>150||'Biriyani';  //It is if condition's value.
console.log(food);