// ## functions as variables / aka callbacks

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
)