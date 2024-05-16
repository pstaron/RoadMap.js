const string1 = "Example of first string"


///
const stringUsingNewString = new String("String Example")
console.log(stringUsingNewString.charAt(1))

const a = "a";
const b = "b";
if (a < b) {
    // true
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

//String objects

const strPrim = 'foo'
const strPrim2 = String(1)
const strPrim3 = String(true)

const strObj = new String(strPrim)
console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"