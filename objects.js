const cup = {
    color:"red",
    size:"small",
    texture:"smooth",
    shape:"round",
    functionality: {
        drinkType:"tea",
        temperature:"hot"
    },
     drink: function(){
        console.log(`Use me to drink`);
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)//Best to use, this -for local function
        //console.log(`Use me to drink ${cup.functionality.temperature} ${cup.functionality.drinkType}`)
        // drink1: () => {
        //     console.log(`Use me to drink`);
        //     console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)//it refers to globa this
    }
};

console.log({color:cup.color});
console.log(`size`,cup.size);
console.log(`temperature`,cup.functionality.temperature);
console.log(`texture`,cup[`texture`]);
//console.log(cup.size)//Not the best practice

cup.model = "melamine";//Adding key and value
console.log({cup});

delete cup.model;//deleting key and value
console.log({cup});

cup.color = "green"//changing
console.log(`color`,cup)

//method is an object property value which is a function since a () is placed like pop() 
// their is a function when creating it like drink: function(){}

cup.drink()//console is calling the function twice

//call a function iside a method use this. or //document
//inside -this refers to cup object
//outside -this refers to the js file which document can be used
//this.=global this can be accessed for a js file
//document.getElementById()


const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup)
console.log({values})

const loop = Object.keys(cup).map(item => {
    return ({key:item,values:cup[item]})
});
console.log({loop});

 Object.keys(cup).forEach(item => {
    console.log({key:item,values:cup[item]})
 })



 /*********************** */


 /*const people = [
    { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 }
]


    // return people.filter((item,index) => item.age >= 18 == index ).map(item => item)
    // console.log(change)
const person = people.filter((item => item).map(item=> item ))
    return (item.age>=18)

console.log(person);
   
//console.log(people.map(person))
*/
/**** */
/*function person(){
    let result = [];
    for(let i =0; i < people.length; i ++){
       if(people[i].age >= 18){
          result.push(people[i].name);
       }
    }
    return result;
  };
  

  const people = [
    { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 }
];
  
  console.log(person(people));*/