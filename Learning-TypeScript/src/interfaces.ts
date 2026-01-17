type chaiDataType = {
    type : string;
    sugar : number;
    strong : boolean
}

function chai(order: chaiDataType) {
  return `Order: ${order.type}, sugar: ${order.sugar}, strong: ${order.strong}`
}

console.log(chai({ type: "masala", sugar: 2, strong: true }))
