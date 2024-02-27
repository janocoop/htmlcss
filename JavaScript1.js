let age = 20;

for (let i = 1; i <= age; i++) {
    console.log(i);
}
if (age > 18) {
   console.log("Age ist grösser als 18");
}
else {
    console.log("Age ist nicht grösser als 18")
}

let score = 12;

if (score !== 0) {
    console.log('Score is available.');
} else {
    console.log('Score is not available.');
}
if (score) {
    console.log("Score ist truthy")
}

let username = "";

if (username){
console.log("Username ist Truthy");

}
if (!username) {
    console.log('Username is evaluated as falsy.');
} else {
    console.log('Username is not evaluated as falsy.');
}
let isAdmin = false;

if (!isAdmin) {
    console.log("isAdmin is false");
}