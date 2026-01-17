let response:any=  "42";

let numericalLength: number = (response as string).length;



//Type assertion example
type book = {
    name: string;
};

let bookString = '{"name":"The diary of CEO"}';
let bookObject = JSON.parse(bookString) as book;
console.log(bookObject);


// unknown vs any

let value:any

value = "chai"
value = [1,2,3,4]
value = 2.5
value.toUpperCase(); // this will give error and doesn't check in runtime
value.toFixed(); // this will give error and doesn't check in runtime


let newvalue: unknown

newvalue = "chai"
newvalue = [1,2,3,4]
newvalue = 2.5
//newvalue.toUpperCase();
//type guard
if(typeof newvalue === "string"){
    newvalue.toUpperCase();
}


// never datatype

type tea = "masala" | "ginger" ;

function serve ( tea:tea){
    switch(tea){
        case "masala":
            return `serving ${tea} tea`
        case "ginger":
            return `serving ${tea} tea`
   
    tea // this represents never 
    default : 
    const _exaustiveCheck:never =tea
    return _exaustiveCheck
     }
}

console.log(serve("masala"))
console.log(serve("ginger"))

