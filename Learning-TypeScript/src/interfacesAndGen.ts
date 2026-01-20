// interfaces

interface chai{
    type:string;
    price:Number
    milk?:boolean
}

const tea : chai ={
    type : "Masala",
    price : 25
}


interface shop {
    readonly id : number;
    shopName : string
}

const s : shop = {id : 34 , shopName : "Coffee corner"}

//s.id = 2 this is not allowed becuase of readOnly property
s.shopName = "chai corner"


//interfaces are majorly used in functions

interface discountCal{
    (price:number):number
}

const apply50 : discountCal = (p) => p*0.5

interface TeaMachine{
    start():void;
    stop():void
}

const machine:TeaMachine = {
   start() {
       console.log("start");
   },
   stop() {
       console.log("stop");
   },
}
console.log(machine);

console.log(machine.start())
console.log(machine.stop())


//index signature

interface chaiRating{
    [flavor:string]:number
}

const r : chaiRating = {
    "Masala":4.5,
    "Ginger":5.0
}
console.log(r)

//unsing interfaces with libraries or with team where multiple interfaces are defined

//library user
interface user{
    name:string
}

//user defined user
interface user{
    age:number
}

const u:user = {
    name:"shlok",
    age:24
}

console.log(u);


interface A {a:string}
interface B {b:string}

interface C extends A,B {}

