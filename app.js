//refreshments of JS

//how to run a simple code
let a=10;
console.log(a);
console.log(485+3857);
// run node app.js

// primitive DataType
let x ="shlok"
console.log(x);
console.log(typeof(x));

let y = 78
console.log(y);
console.log(typeof(y));

let z = true
console.log(typeof(z));

let b;
console.log(typeof(b));

let c = 57.45;
console.log(typeof(c));



//refernce type

let course = {
    id : 123,
    title : "AI & ML",
    price : 243
}

console.log(course);
console.log(typeof(course));


let arr = [23,44,56,78];
let arr2 = ["shlok","devansh","keshav"];
console.log(typeof(arr));

//why it is known as refrence Data Type
let arr3=arr;
arr[0]=20;
console.log(arr);
console.log(arr3);

console.log(a1);
var a1=10;
let a2 = 20;
const a3 =30;
// console.log(this.a1);
// console.log(window.a1);


// we can access var dataType in block scope and not let and const
{
    var s1 =10;
    let s2=20;
    const s3 =30;
}

console.log(s1);


//lexical scope

function add (){
    // let x4 =10; //output will be 10;
    console.log(x4); // output will be 100
}

let x4 =100;
add();


//Async and await functions
setTimeout(()=>{
    console.log("hello");
},4000);

// by default JS is Asynchronous programming


//CallBack Hell
function getData(dataId,nextData){
    // setTimeout(()=>{
    //     console.log("data",dataId)
    //     if(nextData){
    //         nextData();
    //     }
    // },2000)
    return new Promise((resolve,reject)=>{
        console.log("data",dataId)
        if(nextData){
            nextData();
        }
        reject("network error")
        
    })
}

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })

let promise = getData(12);
promise.then((response)=>{
    console.log("success",response);
});

promise.catch((err)=>{
    console.log("reject",err);
});

// let x3 = new Promise((resolve,reject)=>{
//     console.log("hello");
//     resolve("success");    
// })

// x3();