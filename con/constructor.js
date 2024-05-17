function Person(name,age) {
    this.name = name;
    this.age = age;
    //method
    this.greet = function(){
        console.log(`Hello my name is ${this.name},and I am ${this.age} years old`)
    }
};

const adam =new Person(`Adam`,30);
console.log({adam});
adam.language = `English`;
console.log(adam);

const eve =new Person(`Eve`,28);
console.log({eve});

Person.prototype.nationality ='Kenyan';
console.log({adam})
console.log(`adam nationality`,adam.nationality);
console.log(`eve nationality`,eve.nationality);

eve.nationality = "Ugandan";//talkiing to the eve element
console.log({eve});
console.log({adam});

adam.greet();
//used to create properties and method within a 
//creating methods

//property prototype
//you can manually add a property to person till you add
// Prototype is inside the main object and we look for it to give the prototype


//build a system that allocates customers to the nearest driver  so as to get a vehicle




