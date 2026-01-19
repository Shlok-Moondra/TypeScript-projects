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

