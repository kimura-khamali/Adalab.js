let fruits = ["Mango","Banana","Oranges"];
let arr = new Array(20,30);

console.log({fruits});
console.log({arr});


fruits[1] = 2;
console.log({fruits});

console.log('last item,',fruits.slice(-1));
console.log(fruits[fruits.length -1])

let addLast = fruits.push(`Apple`);
console.log({fruits});

let addStart = fruits.unshift(`Pineapple`);
console.log(fruits);

let removeLast = fruits.pop();
console.log(fruits);

let removeFirst = fruits.shift();
console.log(fruits);

//Adding an array in an aray
let newFruits = fruits.push([`Tomato`,`Pear`])
console.log(fruits);

//reduce       has accumulator &currentValue

let items = [20,30,40,50,60];
let add = items.reduce((acc,cur) => acc + cur);//=> return//+*//destructure code
console.log({add});

//map  goes through each item in an array and manipulate it returning array 

let multiply = items.map(item => item * 2);
console.log(multiply);

//forEach  takes arg as callback => undefined

// let square = items.forEach(item => item * item);
// console.log((square));
let square = [];
let total = 0;
 items.forEach(item => {
    const multiple = item * item;
    console.log(multiple)
    square.push(multiple);//append also add
   // square.unshift(multiple);//opposite not that right
  total += item
});
console.log((square));
console.log({total})
console.log(square.slice(1,3));

//Destructuring
 let [num1,num2,num3, ...rest] = items;//...spread opperator
 console.log({num1});
 console.log({num2});
 console.log({num3});
 console.log({rest});

//filter returns a new array that matches but using callback which are arguments (item ,index) but in this case returning true meaning it removes duplicate in the previous array