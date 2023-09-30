//  Objects in Javascript
let student = {
    first: 'Rafeh', 
    last: 'Qazi', 
    age:25, 
    height:170,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh';      //change value
// console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());



//  Conditionals, Control flows (if, else)
//  18 to 35 as my target demographic
var age //= prompt('What is your age?');

if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}


// Swith statements
// Differtiate between weekday vs weekend
/*
    day 0 ==> sunday
    day 6 ==> saturday
*/
switch (0) {
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}

console.log(text);