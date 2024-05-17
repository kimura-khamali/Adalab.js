//function is a block of codes tha perform a certain task
function add(num1,num2) {
 const sum = num1 + num2;
 console.log({console:sum});
 return (`sum`,sum);//use return
}
//console.log(add(2,3));
add(4,5);
add(2,3);

//local &global score   unique-local
function item() {
  const name = ["Anne","Eunice"]
    console.log({name});
}
item();
//console.log({name});
//when you var in afunction you cannot call them outside
//inside fun is the local scope
//var is globally scoped 

/*let student = "Agnes";//gloobal var within global scope and can be accessed anywhere in that file
function item() {
    const name = ["Anne","Eunice"]
    console.log({name});
    console.log({inside:student});


}
item();
console.log({outside:student});*/
//explain always
//different scopes you can use same variable without declaring
child = ""//itswrong

//function expressions -plaed as values to variable
 //normal code in a different way

 const subtruct = function(num1,num2) {
    console.log(num1-num2);
 }
 subtruct(20,10);


 //arrow function
 //=> without function

 const multiply = (num1,num2) =>//you can choose to use () or return =>
 {
    console.log(num1*num2);//writting returnalso 
 }
 multiply(6,9);

 //IIFES- conjoined 
 //immedately called function and used () ()

 (function() {
    console.log(`Hello World`);
 })();


 //Hoisting
 //calling a function before declaring it
 console.log(person);
 //var person//undefined
 var person = `human`;
 console.log(`person2...`,person);
 //var can hoist let cant  have bugs same to const wrong codes

 //hoisting functions
 greet();
 function greet() {
    console.log(`Hi person`);
 }

 /*Hello();
 const hello = () => console.log(`This is a greeting`);//shows err*/

 //only normal function can use hoisting
