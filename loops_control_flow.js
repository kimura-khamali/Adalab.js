
//for loop
const multiply = (num) => {
let newArray = [];
for(let i = 0;i<num.length;i++) {
    const multiplyByTwo = num[i] *2;
 newArray.push(multiplyByTwo);
}
return newArray;
}
console.log(multiply([2,3,4,5,6,7,8]));

//for ...of

const totalSome = (numbers) =>{
    let sum = 0;
    for(let num of numbers) {
    //console.log(num);
        sum +=num;
    }
    return sum;
}
console.log(totalSome([2,3,4,5,6,7,8]));

//while checks if a condition is met
//skipping and continuing
//continue skips condition set and continue with looping

/*const students = (studentName) => {
    while(studentName.length >2) 
    console.log(`Teach students`);
studentName.pop();
if(studentName.length === 2) {
    console.log(`You are left with two students`);
    
}
};
students(["Ema","Eve","Judith"])
*/
//do while doing sth before discovery while

const kickball = (leg) => {
    do{
        console.log(`Kick ball`);
}while(leg)
};
//kickball(true)  - infinity loop
kickball(false)


//switch statement
