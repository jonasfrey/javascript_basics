// # promises

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


