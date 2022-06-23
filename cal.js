let operation = prompt("Enter the operation you want to perform: +, -, * or / ");

let numberOne = parseInt(prompt("Enter the first number:"));
let numberTwo = parseInt(prompt("Enter the second number:"));

if (operation == '+') {
    alert(numberOne + numberTwo);

}   else if (operation == '-') {
    alert(numberOne - numberTwo);
    
}   else if (operation == '*') {
    alert(numberOne * numberTwo);

}   else if (operation == '/') {
    alert(numberOne / numberTwo);
}else alert("Invalid Operations")