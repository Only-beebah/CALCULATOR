const num1=parseFloat(prompt("enter first number:"));
const operator=(prompt("enter operator(either -, +, *, or /:"));
const num2=parseFloat(prompt("enter second nuber:"));
if (operator =="-") {
    result = num1-num2;
}
else if (operator=="+") {
    result = num1+num2;
}
else if(operator == "*") {
    result = num1 *num2;  
}
else {
    result= num1/num2;
}
window.alert("the answer is" + result);