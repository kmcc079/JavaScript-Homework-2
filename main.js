//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(person3.shakes[0])

function displayFoods(person) {
    for(let i = 0; i < Object.keys(person).length; i++){
        if(Array.isArray(Object.values(person)[i])){
                console.log(`${Object.keys(person)[i]}:`);
                console.log(Object.values(person)[i]);
        } else {
            console.log(`${Object.keys(person)[i]}:`);
            console.log(`${Object.values(person)[i]}`)
        }
    }
}

displayFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `Your name is ${this.name} and you are ${this.age} years old`
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.increaseAge = (increment = 1) => {
        this.age += increment
        return`Happy birthday, ${this.name}! You are now ${this.age} years old.`;
    }
}

let shannon = new Person('Shannon', 19)
let brandon = new Person('Brandon', 36)

console.log(shannon.printInfo())
console.log(shannon.increaseAge())
console.log(shannon.increaseAge())
console.log(shannon.increaseAge())

console.log(brandon.printInfo());


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length > 10) {
            resolve(true);
        } else if (string.length <= 10) {
            reject(false);
        };
    });
}

stringLength('Hello Everyone!')

.then( (result) => {
    console.log('Big word')
})

.catch( (error) => {
    console.log('Small Number')
})

// OR

let string1 = 'WV'
let string2 = 'Mountain Mama'

function stringLength1(string) {
    return new Promise( (resolve, reject) => {
        if (string.length > 10) {
            resolve('Big word');
        } else if (string.length <= 10) {
            reject('Small Number');
        };
    });
}

stringLength1(string1).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

stringLength1(string2).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


//============= CodeWars #1 ============//
/*
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0. For example (Input -> Output):
2 -> 3 (1 + 2); 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum
}

console.log(summation(8))


//============= CodeWars #2 ============//
/*
Provided is a function 'find' which accepts two parameters in the following order: array, element 
and returns the index of the element if found and "Not found" otherwise. 
Your task is to shorten the code as much as possible in order to meet the 
strict character count requirements of the Kata. (no more than 85) You may 
assume that all array elements are unique.

function find(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) return i;
    }
    return "Not found";
}
*/

const find = (a, e) => {
    return a.includes(e) ? a.indexOf(e) : 'Not found';
  }

console.log(find([2,3,5,7,11], 8))
array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array, Math.PI))