var num1 = "";
var num2 = "";
var operator = "";
var result = "";
var input = "";

$("button").on("click", function(){
    input = this.value;
    if(input === "ac") {
        num1 = "";
        num2 = ""
        result = "0.";
        operator = "";
        $("#display").text(result);
    } else if (!isNaN(input) || input === "." && input != "ce") {
        if(operator === "") {
            num1 += input;
            $("#display").text(num1);
        } else if (operator !== "") {
            num2 += input;
            $("#display").text(num2);
        }
    } else if(input === "+" || input === "-" || input === "x" || input === "/") {
        operator = input;
    } else if(input === "=") {
        if(operator === "+") {
            result = Number(num1) + Number(num2);
        } else if(operator === "-") {
            result = Number(num1) - Number(num2);
        } else if(operator === "x") {
            result = Number(num1) * Number(num2);
        } else if(operator === "/") {
            result = Number(num1) / Number(num2);            
        }
        $("#display").text(result);
    }
})