// ## arrays 
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
