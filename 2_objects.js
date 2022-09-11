
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
console.log(o_test_3)