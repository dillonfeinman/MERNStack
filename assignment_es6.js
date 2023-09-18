// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]


let newHeroes = heroes.filter((hero)=>{
    if(hero.isEvil == false) {
        return true;
    }
});


//a
console.log(newHeroes);

let uniqueNames = new Set(heroes.map((hero, index, array)=>{
    return hero.family;
}))


//b
console.log(uniqueNames);

//c
function helloSir(hero) {
    console.log("Sir " + hero.name);
}

heroes.forEach(helloSir)

//d 

const evilMarvelHero = heroes.some((hero)=>{
    return hero.isEvil == true && hero.family === "Marvel";
})
console.log(evilMarvelHero)

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

const setEx = new Set();
setEx.add(1);
setEx.add(2);
setEx.add(3);
setEx.add(4);
console.log(setEx);

const mapEx = new Map();
mapEx.set(1, "hi")
mapEx.set(2, "hello")
mapEx.set(3, "hey")

console.log(mapEx.get(1));

mapEx.clear();

console.log(mapEx.size);



//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let promiseObject = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([   "Arrow Function",
                    "Classes",
                    "Promises",
                    "Iterators",
                    "Spread and rest operator"
    ]);
    },2000);
    setTimeout(()=>{
        reject("This is a reject");
    },3000);
})

waitForPromise3(promiseObject);

promiseObject.then((m)=>{
    console.log(m);
}).catch((e)=>{
    console.log(e);
});




//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function multiplyNumbers(...numbers){
    var product = numbers.reduce((prev,curr, index, array)=>{

        return prev * curr
    },1);
    return product;
}

let product = multiplyNumbers(2,3,4,5);
console.log(product);


//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

let {first, last, number="9119119110"} = person.userDetails;

console.log(last);
console.log(number)

//6. Give me an example of const data manipulation

console.log("---Q6---")

const villians = heroes.filter(hero => hero.isEvil == true);

const villianNames = villians.map(villian=> villian.name);

console.log(villianNames);

//7. What is the difference between for-of and for-in show with examples

let forIn = {fname:"John", lname:"Doe", age:25, address : {}}; 

//for-in iterates through the properties of the object
for(const p in forIn){
    console.log(p);
}
// for-in iterates through the indexes of the iterable
for(const n in forIn){
    console.log(n);
}

//for-of iteratres through the valyes of an iterable
for(const v of heroes){
    console.log(v);
}
//for-of causes a compile time exception on non iterable


//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

console.log("===Q8===")

let signin = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            "name": "signin",
            "statusCode": 200,
            "status": "success"
        })
    }, 1000);
    setTimeout(()=>{
        reject({
            "name": "signin",
            "statusCode": 404,
            "status": "failure"
        })
    }, 2000);
    
})
let userregistration = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            "name": "userregistration",
            "statusCode": 200,
            "status": "success"
        })
    }, 2000);
    setTimeout(()=>{
        reject({
            "statusCode": 404,
            "status": "failure"
        })
    }, 2500);
    
})
let nextpageToNavigate = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            "name": "nextpageToNavigate",
            "statusCode": 200,
            "status": "success"
        })
    }, 3000);
    setTimeout(()=>{
        reject({
            "name": "nextpageToNavigate",
            "statusCode": 400,
            "status": "failure"
        })
    }, 2000);
    
})

Promise.all([signin, userregistration, nextpageToNavigate]).then(()=>{
    console.log("move to next page");
}).catch(()=>{
    console.log("error occurred");
})

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios


Promise.allSettled([signin, userregistration, nextpageToNavigate]).then((s)=>{
    console.log("===Q9===");
    for(const p of s){
        if(p.status === 'rejected'){
            if(p.reason.name === 'nextpageToNavigate'){
                console.log("its okay")
            } else {
                console.log("error in first two promises");
                return;
            }
        }
    }
    console.log("success")
})

// Optional -
//10. Using the promise object at #3 create an async and await feature

async function waitForPromise3(p){
    let wait = await p;
    console.log("waiting", wait);
}

//used at line above question 3's .then()