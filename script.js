let arr = [];
let num = 300000;
let num2 = 0;

if (localStorage.total) {
  num2 = JSON.parse(localStorage.getItem("total"));
  num = num - num2;
  console.log(typeof num2, num);
}

bal.innerHTML = `$${num}.00`;
ttlExp.innerHTML = `$${num2}.00`;

if (localStorage.items) {
  arr = JSON.parse(localStorage.getItem("items"));
}

function Add() {
  if(num2 >= 300000){
    setTimeout(() => {
      alertInsufficientFunds.innerHTML = "";
    }, 2500);
    alertInsufficientFunds.innerHTML = "Insufficient funds!";
    console.log("Insufo");
    return;
  }
  if (
    ProductName.value !== "" &&
    ProductCost.value !== "" &&
    Quantity.value !== ""
  ) {
    let calc = ProductCost.value * Quantity.value;
    console.log("calc:", calc);
    num = num - calc;
    num2 = num2 + calc;
    console.log("num2:", num2);
    bal.innerHTML = `$${num}.00`;
    ttlExp.innerHTML = `$${num2}.00`;
    let obj = {
      Name: ProductName.value,
      Cost: ProductCost.value,
      Quantity: Quantity.value,
      Total: calc,
    };
    ProductName.value = "";
    ProductCost.value = "";
    Quantity.value = "";
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("items", JSON.stringify(arr));
    localStorage.setItem("total", JSON.stringify(num2));
    setTimeout(() => {
      alertProductAdded.innerHTML = "";
    }, 2500);
    alertProductAdded.innerHTML = "Item added successfully!";
    console.log("Item added successfully ma!");
  } else {
    setTimeout(() => {
      errorFeedback.innerHTML = "";
    }, 2500);
    errorFeedback.innerHTML = `<p>Please fill up all the inputs!</p>`;
    console.log("Please fill up all the inputs!");
    
  }
}

function dashBoard() {
  alertActiveMessage.innerHTML = `You are currently active on DASH BOARD page!`;
  setTimeout(() => {
    alertActiveMessage.innerHTML = ``;
  }, 2500);
}
