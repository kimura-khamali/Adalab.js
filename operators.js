//use node operators.js

//Arithmetic
var a = 20;
var b = 30;
let add = a + b;
console.log({add});

let subtract = a -b;
console.log({subtract});

let divide = a / b;
console.log({divide});

let multiplication = a * b;
console.log({multiplication});


//comparison
let c = "20";
let looslyEqualto  = a == c;
console.log({looslyEqualto});//does not check at data type but the value


let strictlyequalto = a === c;
console.log({strictlyequalto});//checks at data type and the value

let notequalto = a != c;
console.log({notequalto});

let strictlynotequalto = a !== c;
console.log({strictlynotequalto});


//Increment
a++//+1
console.log({a});

//decrement
b--//-1
console.log({b});

//Compound
a += 5;
console.log({a});


//Type Conversion
//implicit conversion

let v = '1' * c;
console.log({v});

let d = '1'+ c;
console.log({d});

/*//Explicit
let s= ;
console.log({s});*/
