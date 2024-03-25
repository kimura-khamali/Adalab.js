/*var num = 1;
var num = 2;
console.log(num);

let a = 2;
    a = 5;
console.log(a);
 
const person = "john doe";
console.log (person);*/
//  Case sensitive
//template literals

/*let q = 3;
    q <<= 4;

console.log(q);

let d = 5;
    d >>= 2;
    console.log(a);  
   
    let t = 5;
    t >>>= 2;
    console.log(a); 


    // if boolean is used, true is 1, false is 0

let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
let myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
let mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true*/



let text = "The rain in SPAIN stays mainly in the plain";


console.log(text.match("ain"));
console.log(text.match("/ain/"));
console.log(text.match("/ain/g"));
console.log(text.match("/ain/gi"))