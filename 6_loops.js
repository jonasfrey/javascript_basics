
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
}