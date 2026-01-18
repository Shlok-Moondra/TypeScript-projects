const chai:string[] = ["Masala","Ginger","Lemon"]
const price:number[] = [20,25,30]

const ratings:Array<number> = [4.5,3.8,5.0]


type chai = {
    name:string;
    price:number
}

const menu : chai[] = [
    {name:"Masala",price:20},
    {name:"Ginger",price:25},
    {name:"Lemon",price:30}
]

console.log(menu)

//Read only array which can be defined but can't be changed

const cities : readonly string[] = ["Delhi","jaipur"]
console.log(cities);
//cities.push("mumbai") this is not allowed


// 2D array

const table : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(table);


//tuple
const chaiType : [string,number] = ["Masala",20]
console.log(chaiType);

// optional values syntax

const coffee : [string,number,boolean?] = ["Brew",20]
console.log(coffee);



//Enum
enum cupSize{
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

function chaiOrder(size:cupSize){
    console.log(`The size of the cup is ${size}`)
}

chaiOrder(cupSize.SMALL)
chaiOrder(cupSize.MEDIUM)
chaiOrder(cupSize.LARGE)



