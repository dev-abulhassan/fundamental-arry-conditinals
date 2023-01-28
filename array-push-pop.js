// use push to get element

let numbers = [23, 58, 38,];
numbers.push(99);
// console.log(numbers);
// unshift used add element by beginning  
numbers.unshift(55);
// console.log(numbers);


// use pop to get element
let friendsName = ["masud rana", "masud", "rana", "arif", "monirul"];
friendsName.pop();
// console.log(friendsName);

// shift use to remove element by beginning
friendsName.shift();
// console.log(friendsName);

// >= greater than or equal to
// <= less than or equal to



let x = 5;
let y = 10;
if (x < y) {
   // console.log("x is less than y");
}
else{
   // console.log("x is greater than or  equal to y");
}

// console.log(6 != 6);
// console.log(6 >= 6);



let side1 = 9;
let side2 = 8;
let side3 = 9;

 let valid = ((side1+side2)>side3)&&((side2+side3)>side1)&&((side3+side1)>side2);

if (valid) {
  console.log("it is a valid Triangle");
}else{
  console.log("not a valid Triangle")
}

if(side1==side2&&side2==side3){
  console.log("equilateral Triangle");
}else if(side1==side2||side2==side3||side3==side1){
  console.log("isosceles triangle")
}else{
  console.log("scalene triangle");
}


var i = 0;
// for (i=0; i<5; i++){console.log(i)};

var marks = [ 13, 10,  14, 15, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    break;
  }
  // console.log(marks[i]);
};

var i = 5;
for (i=5; i < 5; i++) {
//  console.log(i);
}

