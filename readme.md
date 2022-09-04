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

## functions as variables / aka callbacks
```javascript 
var f_console_log(value){
    console.log(`f_console_log was called!`)
}

var f_calls_callback(
    f_callback
){
    //the variable f_callback is a function
    console.log(f_callback)// ƒ (){ console.log(...
    f_callback() // console logs: 'f_console_log was called!'
}
```

## callbacks 2 
```javascript
var f_loop_through_propery_names(
    o_object, 
    f_function
){
    for(var s_prop in Object.keys(o_object)){
        f_function(s_prop)
    }
}

var o_test = {n:1, s:"asdf", a:[1,"asdf"]}

f_loop_through_property_names(
    o_test, 
    function(s_prop_name){
        console.log(s_prop_name) // console logs: n...s...a
    }
)
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


## functions
function can accept variables as arguments
variables can be : 
 - number
 - string
 - object
 - array
 - function
```javascript
var f_log_var(variable){
    console.log(variable)
}
f_log_var(123)// 123
f_log_var("test")// test
f_log_var({n:1})// ▶{n: 1} 
f_log_var([1,2])// (2) [1,2]
f_log_var(function(){console.log('test')})// function(){console.log('test')}
```

functions can return something
```javascript

var f_add_ten = function(n_a){
    return n_a + 10
}

var n_sum = f_add_ten(10)  
console.log(n_sum) // 20
```

functions can take a long time

```javascript

var f_n_takes_long = function(n_max){
    var n_i = 0; 
    var n_max = n_max;
    var n_sum = 0;
    while(n_i < n_max){
        n_i+=1;
        n_sum = n_sum+n_i;
    }
    console.log("function done")
    return n_sum
}
var n_sum = f_n_takes_long(5000000000); // awaiting for the return value takes around 5 seconds on my CPU (AMD Ryzen 7 3700X 8-Core Processor)
console.log(n_sum)
console.log("reached script end")
```

to skip the awaiting of the function result we can define an async function
```javascript
    function f_n_takes_long_async(n_max, f_callback) {
        var f_async = async function(){
            await undefined;// only because of this it works
            return new Promise(function(f_resolve){
                var n_i = 0; 
                var n_sum = 0;
                while(n_i < n_max){
                    n_i+=1;
                    n_sum = n_sum+n_i;
                }
                console.log("function done")
                f_resolve(n_sum)
            })
        }
        f_async().finally(function(){
            f_callback()
        })
    }

    var n_sum = f_n_takes_long_async(5000000000, function(){
        console.log("async function finished");
    }); // awaiting for the return value takes around 5 seconds on my CPU (AMD Ryzen 7 3700X 8-Core Processor)
    console.log(n_sum)
    console.log("reached script end")
```


to skip the awaiting of the function result we can define the function as 'async' which means it will be exectued parallel to the other code
a async function must return a return value of the 'Promise' function in order to work parallel
the Promise itself takes one argument which is a callback function
```javascript

var f_n_takes_long_by_async = async function(n_max){
    return new Promise(
        function(f_resolve){
            var n_i = 0; 
            var n_max = n_max;
            var n_sum = 0;
            while(n_i < n_max){
                n_i+=1;
                n_sum = n_sum+n_i;
            }
            console.log("function done")
            // return n_sum
            f_resolve(n_sum)
        }
    )
}
var n_sum = await f_n_takes_long_by_async(5000000000); // awaiting for the return value takes around 5 seconds on my CPU (AMD Ryzen 7 3700X 8-Core Processor)
console.log(n_sum) // undefined, the result is not yet defined
console.log("reached script end")
```


# custom timeout

```javascript
    function f_timeout(n_milliseconds, f_callback) {
        var n_ts_ms = new Date().getTime()
        var f_async = async function(){
            await undefined;// only because of this it works
            return new Promise(
                function(f_resolve){
                var n_ts_ms_now = new Date().getTime()
                var n_ts_ms_delta = 0;
                while((n_ts_ms_delta < n_milliseconds)){
                    n_ts_ms_now = new Date().getTime()
                    n_ts_ms_delta = n_ts_ms_now - n_ts_ms;
                    // console.log(n_ts_ms_delta)
                }
                console.log("delta reached")
                f_resolve()
            })
        }
        f_async().finally(function(){
            f_callback()
        })
    }

    f_timeout(1000, function(){
        console.log("async function finished");
    }); // awaiting for the return value takes around 5 seconds on my CPU (AMD Ryzen 7 3700X 8-Core Processor)
    console.log("reached script end")
```

# custom set_interval 

```javascript
    function f_call_at_ms_interval(n_milliseconds, f_callback) {
        var n_ts_ms = new Date().getTime()
        var f_async = async function(){
            await undefined;// only because of this it works
            return new Promise(
                function(f_resolve){
                var n_ts_ms_now = new Date().getTime()
                var n_ts_ms_delta = 0;
                while((n_ts_ms_delta < n_milliseconds)){
                    n_ts_ms_now = new Date().getTime()
                    n_ts_ms_delta = n_ts_ms_now - n_ts_ms;
                    // console.log(n_ts_ms_delta)
                }
                console.log("delta reached")
                f_resolve()
            })
        }
        f_async().finally(function(){
            f_call_at_ms_interval(n_milliseconds, f_callback)
            f_callback()
        })
    }

    f_call_at_ms_interval(1000, function(){
        console.log(`new call at ${new Date().toString()}`);
    }); // awaiting for the return value takes around 5 seconds on my CPU (AMD Ryzen 7 3700X 8-Core Processor)
    console.log("reached script end")
```

# custom sleep function 
```javascript 

var f_sleep_ms = async function(n_ms){

    return new Promise(
        function(f_resolve){
            window.setTimeout(function(){
                f_resolve()
            }, n_ms)
        }
    )
}
console.log("now")
await f_sleep_ms(1000)
console.log("it")
await f_sleep_ms(1000)
console.log("sleeps")

//using it 'wrong'

f_sleep_ms(1000).then(function(){})
console.log("finally reached")
```


## iterators 
an object with a `next` function , a `value` property and a `done` property
```javascript
class O_iterator{
    construtct(n_start, n_end){
        debugger
        this.n_start = n_start 
        this.n_end = n_end
        this.n = n_start
        console.log(this)
        this.f_o_next = this.next
    
    }

    next(){
        console.log(this)
        var self = this
        let o = {value: 0, done: true}
        debugger
        if(self.n < self.n_end){
            o.value = self.n 
            o.done = false
            self.n+=1
            return o
        }
        o.value = Math.abs(self.n_end - self.n_start)
        return o
    }
}

//using it 
var o_iterator = new O_iterator(0, 10)
let o_result = o_iterator.next()
while(!o_result.done){
    console.log(`iterator is not done yet, current value: ${o_result.value}`)
    o_result = it.next();
}
console.log(`iterator is done: `)
console.log(`${o_iterator}`)
console.log(`${o_result}`)
```

## destructuring 
also sometimes called unpacking 
```javascript

const {a, b} = {a:1,b:2}
console.log(a)//1
console.log(b)//2

let [a, b, rest] = [1,2,3,4,5,6,7,8,9]
console.log(a) //1
console.log(b) //2
console.log(rest)// [3]

let [a, b, ...spreaded_rest] = [1,2,3,4,5,6,7,8,9]
console.log(a) //1
console.log(b) //2
console.log(spreaded_rest)// Array(7) [3,4,5,6,7,8,9]

var obj = {a:1,b:2}
let ({a,b} = obj)

let {n_a, n_b} = {q1:1, q2:2,q3:3,q4:4}
console.log(n_a)//undefined
console.log(n_b)//undefined


let {n_a:n_a1, n_b} = {n_a:11, n_b:22}
console.log(n_a)//undefined
console.log(n_a1)//11
console.log(n_b)//22

var obj = {old_prop_name: 100}
let {old_prop_name: new_var_name } =  obj

console.log(new_var_name) // 100
```