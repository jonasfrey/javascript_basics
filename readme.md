# do not change this file manually
this file was automatically created by generate_readme.js
to update it, run:
 deno run -A generate_readme.js


# yields.js
```javascript ```


# 1_variables.js
```javascript // ## var

// var lets you define a variable 
var n_num = 1
console.log(n_num) // 1
// ## let 
// let lets you define a variable which is defined only in a specific scope

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


// ## const 
var n_num_var = 1; 
const n_num_const = 1; 
n_num_var = 2;
n_num_const = 2; //Uncaught TypeError: Assignment to constant variable

// ## functions 
var f_log = function(){
    console.log("!function was called!")
}
console.log(f_log);// ƒ (){ console.log("!function was called!") }
console.log(f_log()); // !function was called!

```


# 10_promises.js
```javascript // # promises

// var o_promise = new Promise() // Uncaught TypeError: Promise resolver undefined is not a function

// by default the promise takes a callback function as the first argument, it is called the "Promise resolver"

var f_promise_resolver = function(){
    console.log("promise resolver called")
}
var o_promise = new Promise(f_promise_resolver)

 //by default a promise receives two callbacks, re-solve and re-ject
console.log(o_promise) //Promise { <pending> }
console.log("---")

// the promise resolver gets called and receives two parameters
// - f_resolve , a function
// - f_reject , a functimon

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    console.log("promise resolver called")
}

var o_promise = new Promise(f_promise_resolver);
console.log("---")


console.log("question: int the f_promis_resolver function, can both, f_reject() and f_resolve() be called ? ")
// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function
// but only one can get called!

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    console.log("promise resolver called")
    f_reject()
    console.log("f_reject called in the promise resolver")
    // the call of f_resolve does wont trigger the call of resolve
    // because f_reject() has already been called
    f_resolve()
    console.log("f_resolve called in the promise resolver")

}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ // <- f_resolve
        console.log('resolved 1 !!') // is not called because f_reject() was called before f_resolve()
    },
    function(){ // <- f_reject
        console.log("rejected 1 !!")
    }
);
console.log("answer: no ")

console.log("---")
console.log("can f_rejected be called and also .then().catch() ? ")

// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function
// but only one can get called!

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    f_reject(new Error("asdf"))
}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ // <- f_resolve
        console.log('resolved 2!!') // is not called because f_reject() was called before f_resolve()
    },
    function(){ // <- f_reject
        console.log("rejected 2 !!")
    }
).catch(
    function(){
        console.log("error !!")
    }
);
console.log("answer: no")

















console.log("question:can f_reject be called, but only catch() is triggered in the Promise.then.catch() ? ")

// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function
// but only one can get called!

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    f_reject(new Error("asdf"))
}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ // <- f_resolve
        console.log('resolved 2!!')
    }
).catch(
    function(){
        console.log("error catched !!")
    }
);
console.log("answer: yes")





















console.log("question: f_reject be called, then(..., f_error) and .then().catch()? ")

// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function
// but only one can get called!

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    f_reject(new Error("asdf"))
}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ // <- f_resolve
        console.log('resolved 2!!') 
    }, 
    function(o){
        console.log(o)
        console.log("error catched in f_reject")
    }
).catch(
    function(){
        console.log("error catched in .catch() !!")
    }
);
console.log("answer: yes")











console.log("question: will Promise......finally() get called even if f_rejected or f_resolve are not called?  ")

// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function
// but only one can get called!

var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    console.log("some code in f_promise_resolver")
    // f_reject() // only if f_reject or f_resolve is called, Promise......finally() will be called
    // return "adsf"
}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ 
        console.log('re-solved ') 
    }, 
    function(){
        console.log('re-jected ') 
    }
).catch(

).finally(
    function(){
        console.log('finally ')
    }
)
console.log("answer: no")

console.log("22020200202")


// can we directly access the output of a promise and assign it to an object ? 

var f_o_data = function(b_reject){

    return new Promise(
        function(
            f_resolve, 
            f_reject
        ){

            window.setTimeout(function(){

                var n_ts_ms = parseInt(new Date().getTime());
                // if(n_ts_ms % 2 == 0){
                //     f_reject(`i rejected because n_ts_ms ${n_ts_ms} % 2 == 0 is true :shrug:`)
                // }
                if(b_reject){
                    f_reject('i rejected because true was passed to function')
                }
                f_resolve(
                    {
                        n_ts_ms: n_ts_ms,
                        s: 'i am the result object', 
                        n: 23, 
                        b: true, 
                        a_n: [1,2,3], 
                        a_o:[{n:2, n:3}, {n:3}]
                    }
                )

            },parseInt(Math.random()*3333+555))
        }
    )
}
var f_o__filled_asyncally = async function(o){

    var a_s_prop_name = Object.keys(o);
    return Promise.all(Object.values(o)).then(
        function(a_value){
            var a_a_v = a_s_prop_name.map((s_prop_name, n_idx) => [s_prop_name, a_value[n_idx]]);
            return Object.fromEntries(a_a_v)
        }
    )
}

var o = {
    b: true, 
    n: 2, 
    s: 'just a string', 
    o: {n:22}, 
    a_n: [1,2,3],
    a_o:[{n:2, n:3}, {n:3}],
    o1: await f_o_data(),// those two first async functions will be executed one after another because we use await keyword
    o2: await f_o_data(),// 
    o3: f_o_data(),// theese three can load parallel
    o4: f_o_data().then(function(o){return o}),// theese three can load parallel
    o5: f_o_data(),// theese three can load parallel
    // o6: f_o_data(true),// theese three can load parallel
}
var o_my_object_i_want_to_fill_asyncally = await f_o__filled_asyncally(o);
console.log(o_my_object_i_want_to_fill_asyncally)


```


# 2_objects.js
```javascript 
// ## objects 
// objects are a 'parent' variable which holds 'child' variables
// the name of the child variables are called `attribute`/`property`

var o_dad = {
    s_child_one: "hans", 
    s_child_two: "joggel", 
}
console.log(o_dad)//▶{s_child_one: 'hans', s_child_two: 'joggel'}
console.log(o_dad.s_child_two)// joggel
console.log(o_dad.s_child_one)// hans

// different types of notation
const o_test = {
    f_test(){
        console.log("test")
    }
}
console.log(o_test)
//
const o_test_2 = {
    f_test: function(){
        console.log("test")
    }
}
console.log(o_test_2)
//
const o_test_3 = {
    "f_test": function(){
        console.log("test")
    }
}
console.log(o_test_3)```


# 3_arrays.js
```javascript // ## arrays 
// arrays are basically objects, where every `property` is a number beginning with 0

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


# 4_callbacks.js
```javascript // ## functions as variables / aka callbacks

var f_console_log = function(value){
    console.log(`f_console_log was called!`)
}

var f_calls_callback = function(
    f_callback
){
    //the variable f_callback is a function
    console.log(f_callback)// ƒ (){ console.log(...
    f_callback() // console logs: 'f_console_log was called!'
}


// ## callbacks 2 

var f_loop_through_propery_names = function(
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
)```


# 5_functions.js
```javascript 



// ## functions
// function can accept variables as arguments
// variables can be : 
//  - number
//  - string
//  - object
//  - array
//  - function
var f_log_var(variable){
    console.log(variable)
}
f_log_var(123)// 123
f_log_var("test")// test
f_log_var({n:1})// ▶{n: 1} 
f_log_var([1,2])// (2) [1,2]
f_log_var(function(){console.log('test')})// function(){console.log('test')}

// functions can return something

var f_add_ten = function(n_a){
    return n_a + 10
}

var n_sum = f_add_ten(10)  
console.log(n_sum) // 20

// functions can take a long time


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

// to skip the awaiting of the function result we can define an async function
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


// to skip the awaiting of the function result we can define the function as 'async' which means it will be exectued parallel to the other code
// a async function must return a return value of the 'Promise' function in order to work parallel
// the Promise itself takes one argument which is a callback function

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
console.log("reached script end")```


# 6_loops.js
```javascript 
// ## loops 

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
}```


# 7_references.js
```javascript 
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
console.log(o_b)// ▶{n: 18} ```


# 9_custom_functions.js
```javascript 

// # custom timeout

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

// # custom set_interval 

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

// # custom sleep function 

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