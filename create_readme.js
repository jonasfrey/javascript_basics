
// var generator = await Deno.readDir("./")
// console.log(generator)

// for( const s_dir of generator){
//     console.log(s_dir)
// }

class O_file_js_md{
    constructor(
        s_path
    ){
        this.s_path = s_path
    }


    async f_init(){
        this.s_text = await Deno.readTextFile();;
        this.o_folder_file = new O_folder_file(this.s_path)
        var n_num = parseInt(this.o_folder_file.s_file_name[0])
        var n_num = isNaN(n_num) ? -1 : n_num
        this.n_num = n_num
        this.s_markdown = this.f_s_javascript_to_markdown(this.s_text)
    }
    f_s_javascript_to_markdown = function(
        s_javascript
        ){
        var a_s_line = s_javascript.split("\n")
        for(var n_i in a_s_line){
            var s_line = a_s_line[n_i]

            if(s_line.trim().indexOf("//") == 0){
                
            }
        }
    }   
}

import {O_folder_file} from "https://deno.land/x/o_folder_file@0.3/O_folder_file.module.js"
const s_current_filename = new URL('', import.meta.url).pathname.split('/').pop()

var a_o_file_js_md = []

for await (const o_path of Deno.readDir("./")) {
    // console.log(o_path);
    if(o_path.isFile){
        const o_folder_file = new O_folder_file(o_path.name)
        // console.log(o_folder_file)
        if(o_folder_file.s_file_extension == "js"){
            if(o_folder_file.s_file_name == s_current_filename){
                continue;
            }

            // console.log(s_text)
            // console.log(n_num)
            var s_path = "./"+o_folder_file.s_file_name
            var o_file_js_md = new O_file_js_md(s_path)
            o_file_js_md.f_init()
            a_o_file_js_md.push(o_file_js_md)
            
        }

    }
}