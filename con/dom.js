const container = document.getElementById(`container`);
console.log(`parent`,container.parentElement);
console.log(`Next sibling`, container.nextElementSibling);
console.log(`Previous sibling`,container.previousElementSibling);
console.log(`children`,container.children);
console.log(`First Child`,container.firstElementChild);
console.log(`Last Child`,container.lastElementChild)

const html = document.documentElement;
console.log({html})
console.log(`body`,document.body);

 //crud
//Updating Dom

const heading = document.getElementById(`heading`);
heading.innerHTML = `Introduction to Dom munipulation`;
heading.style.color = `red`;

//creating Dom
const textChild = document.createElement(`p`);//adoption of child//create a new child
container.appendChild(textChild);//empty p
textChild.innerHTML = `This is the new child`;  //show 
textChild.setAttribute(`class`,`container-new-child`);//attribute for class
textChild.setAttribute(`id`,`paragraph`);

//Delete Dom

//delete  child
heading.remove(``);

const button = document.getElementById(`button`);
button.style.border = "none";
button.style.padding = "10px 18px";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.background = "#0096FF";
button.style.color = "#ffffff";

button.addEventListener(`click`,function(){
    button.innerHTML = `clicked`;
    button.style.background = `#50C878`
})



