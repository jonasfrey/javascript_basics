# variables 

## var

var lets you define a variable 

```javascript
var n_num = 1
```

## let 
let lets you define a variable which is defined only in a specific scope

```javascript
var n_var_num = 1
let n_let_num = 1

if(true){
    console.log(n_var_num) // 1
    console.log(n_let_num) // 1

    var n_var_num_inited_in_scope = 2;
    let n_let_num_inited_in_scope = 2;
}

console.log(n_var_num_inited_in_scope);
console.log(n_let_num_inited_in_scope);// Uncaught ReferenceError: n_let_num_inited_in_scope is not defined
```

## const 

```javascript
var n_num_var = 1; 
const n_num_const = 1; 
n_num_var = 2;
n_num_const = 2; //Uncaught TypeError: Assignment to constant variable
```

## functions 
```javascript
var f_log = function(){
    console.log("!function was called!")
}
console.log(f_log);// ƒ (){ console.log("!function was called!") }
console.log(f_log()); // !function was called!
```


## objects 
objects are a 'parent' variable which holds 'child' variables
the name of the child variables are called `attribute`/`property`
```javascript
var o_dad = {
    s_child_one: "hans", 
    s_child_two: "joggel", 
}
console.log(o_dad)//▶{s_child_one: 'hans', s_child_two: 'joggel'}
console.log(o_dad.s_child_two)// joggel
console.log(o_dad.s_child_one)// hans
```

## arrays 
arrays are basically objects, where every `property` is a number beginning with 0
```javascript
var a_num = [];
a_num.push(5);
a_num.push(8);
a_num.push(13);
a_num.push(21);

console.log(a_num)//▶(4) [5, 8, 13, 21]
//                    ^  |  |   |
//              index 0  |  |   |
//                       ^  |   |
//                 index 1  |   |
//                          ^   |
//                    index 2   |
//                              ^
//                        index 3

//since arrays are also objects they can have `property` aswell
a_num.n_test = 1234;
console.log(a_num) // ▶(4) [5, 8, 13, 21, n_test: 1234]
```
## references/copy/clone variables
```javascript
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
```



## loops 
```javascript
var o_test = {n_lol:1, s_yey:"asdf", f_kul: function(){console.log(this.n)}}

for(var s_prop in o_test){
    var value = o_test[s_prop]
    console.log(s_prop)// n_lol...s_yey...f_kul
}

// for(var value of o_test){ // TypeError: obj is not iterable
//     //...
// }

for(var value in Object.values(o_test)){    
    console.log(value)// 1..."asdf"....function
}
```

