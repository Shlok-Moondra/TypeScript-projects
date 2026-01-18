// simple function in TS
function makeCoffe(type:string,cup:number){
    console.log(`making ${cup} cup of ${type} coffee`)
}
makeCoffe("brew",1)


// making function type number
function coffee():number | string {
    return "25 ruppees"
}
console.log(coffee())


//log function
function logCoffe():void{
    console.log("chai is ready")
}
logCoffe()



//default parameter
function hello(input:string = "world"){
    console.log(input)
}
hello()



//if exist value function
function helloWorld(input?:string){
    console.log(input)
}
helloWorld()




// function which look complex but note number defined for function will always check if return type is number or not
function chai(order:{
    type : string;
    sugar : number;
    strong : boolean
}):number{
    console.log(`Order: ${order.type}, sugar: ${order.sugar}, strong: ${order.strong}`)
    return 4
}

console.log(chai({type:"masala",sugar:2,strong:true}))