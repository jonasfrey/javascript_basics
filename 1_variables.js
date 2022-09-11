// ## var

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

