var chai = ["Masala", "Ginger", "Lemon"];
var price = [20, 25, 30];
var ratings = [4.5, 3.8, 5.0];
var menu = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 25 },
    { name: "Lemon", price: 30 }
];
console.log(menu);
//Read only array which can be defined but can't be changed
var cities = ["Delhi", "jaipur"];
console.log(cities);
//cities.push("mumbai") this is not allowed
// 2D array
var table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(table);
//tuple
var chaiType = ["Masala", 20];
console.log(chaiType);
// optional values syntax
var coffee = ["Brew", 20];
console.log(coffee);
//Enum
var cupSize;
(function (cupSize) {
    cupSize["SMALL"] = "SMALL";
    cupSize["MEDIUM"] = "MEDIUM";
    cupSize["LARGE"] = "LARGE";
})(cupSize || (cupSize = {}));
function chaiOrder(size) {
    console.log("The size of the cup is ".concat(size));
}
chaiOrder(cupSize.SMALL);
chaiOrder(cupSize.MEDIUM);
chaiOrder(cupSize.LARGE);
