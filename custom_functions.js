

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
