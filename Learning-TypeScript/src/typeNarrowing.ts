// Doing type narrowing with Typeof function
function chai(value: string | number){
    if(typeof value === "string"){
        return`making ${value.toUpperCase()} chai`
    }
    else{
        return `chai order ${value.toFixed(2)}`
    }
}

console.log(chai("masala chai"))
console.log(chai(2.34533))

// checking truthiness
function serveChai(msg?:string){
    if(msg){
        return `serving ${msg}`;
    }
    else{
        return `serving default masala chai`;
    }
}

console.log(serveChai("Ginger chai"));

 //Exhaustive Check

 function type(value: "Masala" | "Ginger" | "Lemon" | number){
    if(value === "Masala"){
        return `serving ${value.toLowerCase()} chai`
    }
    if(value === "Ginger"){
        return `serving ${value.toUpperCase()} chai`
    }
    if(value === "Lemon"){
        return `serving ${value.toLowerCase()} chai`
    }
    if(typeof value === "number"){
        return `serving ${value.toFixed(0)} chai`
    }
 }

 console.log(type("Masala"));
 console.log(type("Ginger"));
 console.log(type("Lemon"));
 console.log(type(23.5637))


// checking through instanceof class

class full{
    serve(){
        return `serving a full chai`
    }
}

class cutting{
    serve(){
        return `serving a cutting chai`
    }
}


function serve(value: full | cutting){
    if(value instanceof full){
        return value.serve()
    }
    if(value instanceof cutting){
        return value.serve()
    }
}

console.log(serve(new full()));
console.log(serve(new cutting()));

// creating and checking one's own types
type Masala= {
    type : "Masala",
    spiceLevel : "High"
}

type Ginger = {
    type : "Ginger",
    spiceLevel : "Medium"
}

type Lemon = {
    type : "Lemon",
    spiceLevel : "Low"
}

type chai = Masala | Ginger | Lemon


function serveChai1( value : chai){
    switch(value.type){
        case "Masala":
            return `serving ${value.spiceLevel} ${value.type} chai`
        case "Ginger":
            return `serving ${value.spiceLevel} ${value.type} chai`
        case "Lemon":
            return `serving ${value.spiceLevel} ${value.type} chai`
    }
}

console.log(serveChai1({type:"Masala",spiceLevel:"High"}));
console.log(serveChai1({type:"Ginger",spiceLevel:"Medium"}));
console.log(serveChai1({type:"Lemon",spiceLevel:"Low"}));