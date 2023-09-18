function Add(a, b) {
    return a + b
}

let result = Add(20, 25);
console.log(result);


// console.log(Car("blue","mercury").getDetails());


// function Car(color,model) {
//     this.color = color;
//     this.model = model;
//     function getDetails() {
//         return {"color": this.color, "make": this.make};
//     }
// }

function Person(name, dob) {
    this.name = name;
    this.dob = dob;

    function getDetails() {
        return {"name": this.name, "dob":this.dob}
    }
}

let person = {};
let person2 = {};



Object.assign(person2, new Person("Dillon", "12/28"))


function Student(person, major) {
    __proto__: person;
    this.major = major
    function getDetails() {
        return {__proto__, "major":this.major}
    }
}

Object.assign(person, new Student(person2, "cs"))

console.log(person)

// var obj1 = Object.create(new Person("Dillo","1"))

// Object.assign(obj1)

// console.log(obj1)