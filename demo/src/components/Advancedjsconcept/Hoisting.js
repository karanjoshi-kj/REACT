//! JavaScript me jab code execute hota hai, toh execution se pehle Memory Creation Phase (Creation Phase) chalta hai. Is phase me JavaScript engine variables aur functions ke declarations ko unke scope ke top par "move" (hoist) kar deta hai (literally memory me jagah allocate kar deta hai).



//? var hoist hota hai aur iski default value undefined hoti hai memory phase me.

console.log(naam); // Output: undefined (Error nahi aayega!)
var naam = "Karan";
console.log(naam); // Output: Karan


//? let aur const bhi hoist hote hain, lekin inko undefined se initialize nahi kiya jata. Ye Temporal Dead Zone (TDZ) me rehte hain jab tak inko actual value assign na ho jaye.

console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 22;


//! Function Declarations:
//? Poora ka poora function memory me store ho jata hai. Isliye aap function ko declare karne se pehle bhi call kar sakte ho!

sayHello(); // Output: "Hello Bhai!"

function sayHello() {
  console.log("Hello Bhai!");
}


//! Function Expressions & Arrow Functions:
//? Agar aap function ko kisi variable me store karte ho (jaise var, let, ya const), toh wo ek variable ki tarah treat hota hai, function ki tarah nahi. Isliye hoisting variable ke rules follow karegi.


greet(); // TypeError: greet is not a function (agar var ho toh) OR ReferenceError (agar let/const ho)

var greet = function() {
  console.log("Hello!");
};