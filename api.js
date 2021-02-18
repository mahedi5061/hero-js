const user={
    id:3,
    name:'Abul',
    age:33,
    work:'student'
}
//  localStorage.setItem('userId',1250);  //set item write in local storage.
// const temp=localStorage.getItem('userId'); //get item read from local storage.
// console.log(temp)
    localStorage.setItem('user',JSON.stringify(user));
    const data=localStorage.getItem('user')
    const temp=JSON.parse(data);
//  console.log(temp.age);

//get the keys that means property's name.
const keys=Object.keys(temp);
//get the values that means property's name's value.
const values=Object.values(temp);
console.log(values);
