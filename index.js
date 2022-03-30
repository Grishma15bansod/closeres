// function outer(){
//     var num=5
//     function inner(){
//         console.log(num);
//     }
//     inner()
// }
// outer()


function outer(){
    var num=5
    function inner(){
        debugger
        console.log(num);
    }
    num = 7
     return inner
}
//outer()()

var result= outer()
result()


// function extraouter(){
//     var a= 6
//     return function outer(){
//         var b =1
//         return function inner(){
//             console.log(a,b);
//         }
//     }
// }
// extraouter()()()




// function makeCounter(){
//     let count =0;
//     return function(){
//         return count++
//     }
// } 
// let counter = makeCounter()
// console.log(counter());
// let result1= counter()
// console.log(result1);


// // console.log(counter());

// // function sb(){
// //     console.log("hi after 3 second");
// // }
// // setTimeout (sb ,2000)


// setTimeout(function(){
//     console.log("hello");
// }, 3000)
// console.log("print after");


// // setTimeout(function(){
// //     console.log(1);
// // },1000)


// function loop(){
//     for(let i =0;i<=5;i++){
//         setTimeout(function(){
//             console.log((i));
//         }, i* 1000)
//     }
//     console.log("inside the loop");
// }
// loop()



// function looptime(){
//     for(var i=1; i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log((i));
//             }, i* 1000)
//         }
//         close(i)
//     }
//     console.log("inside loop time");
// }
// looptime()
