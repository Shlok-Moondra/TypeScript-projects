// // class declaration

// class chai{
//     flavor : string;
//     price : number

//     // constructor(flavor:string,price:number){
//     //     this.flavor = flavor
//     //     this.price = price
//     // }
//     constructor(flavor:string,price:number){
//         this.flavor = flavor
//         console.log(this);
        
//     }
// }

// const MasalaChai = new chai("Ginger",20)



// Access modifiers
class coffe{
    public flavor :string ="Masala"

    private secreteIngredients : string = "brew"

    reveal(){
        return this.secreteIngredients //OK
    }   
}


//protected access modifiers
class shop{
    protected shopName ="coffee Corner"
}

class branch extends shop{
    getName(){
        return this.shopName
    }
}

const cof = new coffe()
console.log(cof.reveal())

const data = new branch()
console.log(data.getName())


//readOnly property in class

class cup{
    readonly capacity : number

    constructor(capacity:number){
        this.capacity = capacity
        console.log(capacity);
        
    }
}

const amt = new cup(250)

// controlled gates like getter and setter.

class mordernCoffee{
    private _sugar = 2

    get sugar(){
        return this._sugar
        
    }

    set sugar(value:number){
        if(value > 5) throw new Error ("itna meetha maat kha");
        this._sugar = value
        console.log(this._sugar)
    }
}

const c = new mordernCoffee()
console.log(c.sugar)


// static keyword
class ekCoffee{
    static shopName = "Bhai coffee"

    constructor(size:number){

    }
}

console.log(ekCoffee.shopName)

// composition

class Engine{
    start(){
        console.log("engine is starting");
    }
}

class car{
    private engine:Engine
    constructor(){
        this.engine=new Engine();
    }

    drive():void{
        this.engine.start();
        console.log("Car is driving");
    }

}

const s = new car();
console.log(s.drive())