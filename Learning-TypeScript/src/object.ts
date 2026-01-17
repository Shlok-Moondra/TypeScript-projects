//object
const chai = {
    name : "masala chai",
    price : 20,
    isHot : true
}

type tea = {
    name : string;
    price : number;
    indgredients : string[]
}

const tea1 : tea = {
    name : "masla chai",
    price : 20,
    indgredients : ["ginger","water","sugar"]
}



// duck typing
type cup = {size:string};
let smallCup : cup = {size:"small"};
let meduimCup = {size : "meduim",type : "masala"}

smallCup = meduimCup;

console.log(smallCup);
console.log(meduimCup)



// splitting
type items = {name : string , quantity : number}
type address = {street : string , pin : number}

type order = {
    id : string,
    items : items[],
    address : address
}


function product(pro : order){
    return `product id is ${pro.id} and delivered to ${pro.address.street} and the items are ${pro.items} `
}



