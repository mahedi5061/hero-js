/*using Array inside Object*/
var rahim={
      names:['mahedi','hassan','sharif'],
     age:[21,23,34,56],
     address:'Dhaka',
     job:'Job Holder',
    
 }
  console.log(rahim.names[1]);

  /*using Object inside Array*/
  var objarr=['Mahedi', //index num 0
      'Hassan',//index num 1
      {
        age:21,
        address:'Dhaka',
        job:'Job Holder',
      },//index num 2
      'Bangladesh'
  ]
  console.log(objarr[2].age);
 