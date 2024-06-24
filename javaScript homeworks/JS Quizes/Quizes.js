// Q1 - Is there a difference in output?

function greating1() 
{
    return {
        bar: "hello"
    };
}

function greating2() 
{
    return
    {
        bar: "hello"
    };
}


// Q2 Hoisting - What will be the output?

var x = 21;
var func = function() {
    console.log(x);
    var x = 20;
};
func();

// Q3 Async - What will be the output?

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
};

