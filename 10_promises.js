// # promises

// var o_promise = new Promise() // Uncaught TypeError: Promise resolver undefined is not a function

// by default the promise takes a callback function as the first argument, it is called the "Promise resolver"

var f_promise_resolver = function(){
    console.log("promise resolver called")
}
var o_promise = new Promise(f_promise_resolver)

 //by default a promise receives two callbacks, re-solve and re-ject
console.log(o_promise) //Promise { <pending> }


// the promise resolver gets called and receives two parameters 
// - f_resolve , a function 
// - f_reject , a functimon
var f_resolve = function(){
    console.log("f_resolve called")
}
var f_reject = function(){
    console.log("f_reject called")
}
var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    console.log("promise resolver called")
}

var o_promise = new Promise(f_promise_resolver);


// to make use of the f_resolve and f_reject, we have to call them
// they will be present as arguments  in the .then() function

var f_resolve = function(){
    console.log("f_resolve called")
}
var f_reject = function(){
    console.log("f_reject called")
}
var f_promise_resolver = function(
    f_resolve,
    f_reject,
){
    console.log("promise resolver called")
    f_reject()
    console.log("f_reject called in the promise resolver")
    f_resolve()
    console.log("f_resolve called in the promise resolver")

}

var o_promise = new Promise(f_promise_resolver).then(
    function(){ // <- f_resolve
        console.log('resolved!!')
    },
    function(){ // <- f_reject
        console.log("rejected!!")
    }
);

// now we can call the f_resolve to trigger the first function in the promise.then()