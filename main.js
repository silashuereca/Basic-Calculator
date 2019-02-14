function calc() {
  let a = parseInt(document.querySelector("#value1").value); // parseInt() turns strings into intergers or "not a string";
  let b = parseInt(document.querySelector("#value2").value);
  let op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") { // this grabs the value from the drop down function 
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "squar") {
    calculate = Math.pow((a+b), 2);
  }

  document.querySelector("#result").innerHTML = calculate;

}