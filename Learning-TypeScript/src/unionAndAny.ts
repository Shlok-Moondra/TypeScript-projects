
// this is a standard example of union by default,or predefined datatypes
let codeNo: string | number = "1M"
console.log(codeNo)


// these are custom dataTypes we are providing
let apiResponse : "pending" | "success" | "error" = "pending"
apiResponse = "pending"
console.log(apiResponse)


let numList = ["10","20","28","30"]


//let currFolder = in this it is showing ANY means any value could come
let currFolder: string | undefined;// this shows only few valuescan come 

for(let order of numList){
    if(order == "30"){
        currFolder = order;
        break;
    }
}

console.log(currFolder);
