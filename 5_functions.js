



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
console.log("reached script end")