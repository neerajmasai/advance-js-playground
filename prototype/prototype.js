const Animal = function(name, species, sound){

    // Object.create creates an object with the specified prototype
    const animal = Object.create(Animal.prototype)
    animal.name = name;
    animal.species = species;
    animal.sound = sound;

    //returning object
    return animal;
}

// setting prototype object properties (methods of prototype object in this case)
Animal.prototype.logSound = function(){
    return this.sound;
}

// create a new instance of Animal with parameters to constructor function
const Dog = Animal("Flipsy", "Mammal", "Bark");

// accessing prototype of an object
console.log(Dog.__proto__);

/* 
    * even though the Dog object does not have its own method property called 'logSound'
    * Js will access the objects prototype that it was created with using 'Object.create(<prototype>)'
    * It will then look for 'logSound' method and call it
*/
 
console.log(Dog.logSound());


/* ----------The below code uses 'new' keyword to acheive the same exact output as above-------------*/


const AnimalNew = function(name, species, sound){

    /* 
        * In this case, since we are using new, JS will execute:
        * const this = Object.create(AnimalNew.prototype)
        * and will return this
        * All of this will be done implicitly
    */

    // Object.create creates an object with the specified prototype
    // const animal = Object.create(Animal.prototype) -> No need as JS is implicitly doing this using new keyword

    animal.name = name;
    animal.species = species;
    animal.sound = sound;

    //returning object
    //return animal; -> No need as JS is implicitly doing this using new keyword
}

// setting prototype object properties (methods of prototype object in this case)
AnimalNew.prototype.logSound = function(){
    return this.sound;
}


// create a new instance of Animal with parameters to constructor function
const Cat = new Animal("Bardox", "Mammal", "Meow");

console.log(Cat.logSound());
