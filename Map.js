const map1 = new Map();
map1.set("m","n")
map1["n"]=3
console.log(map1)
console.log(map1.get("m"))
map1.set('a', 1);
map1.set('b', 2);

console.log(map1.get([1]))

console.log(map1.size);
// Expected output: 3