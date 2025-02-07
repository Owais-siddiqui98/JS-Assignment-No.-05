
function divideNumbers(){
    let num1 = parseFloat(prompt("Enter the first number:"))
    let num2 = parseFloat(prompt("Enter the second number:"))

    let result = num1/num2;

    if(num2 == 0){
        alert("Math Error")
    }else{
    alert(`Your result is ${result}`)
}
}
