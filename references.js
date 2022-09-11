
// ## references/copy/clone variables
var a = 1
var b = a // with this assignment we copy/clone the value 1 into var 'b'

console.log(a)// 1
console.log(b)// 1

a = 3

console.log(a)// 3
console.log(b)// 1


var o_a = {n:1}
var o_b = o_a // with this assignment we assign the reference from object a 'o_a' to the object 'o_b'

console.log(o_a)// ▶{n: 1}
console.log(o_b)// ▶{n: 1}

o_a.n = 4321

console.log(o_a)// ▶{n: 4321}
console.log(o_b)// ▶{n: 4321} - ! so the objects are the same!

o_b.n = 18

console.log(o_a)// ▶{n: 18}
console.log(o_b)// ▶{n: 18} - ! so the objects are the same!


o_b = Object.assign({}, o_a) // this will clone the object 

o_a.n = 3636
console.log(o_a)// ▶{n: 3636}
console.log(o_b)// ▶{n: 18} 