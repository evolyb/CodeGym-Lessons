function Calculate(operator) {
    var result = 0;
    var firstnumber = parseFloat(document.getElementById("firstnum").value);
    var secondnumber = parseFloat(document.getElementById("secondnum").value);

    if (operator == "add"){
        result = firstnumber + secondnumber;
    }
    if (operator == "sub"){
        result = firstnumber - secondnumber;
    }
    if (operator == "mul"){
        result = firstnumber * secondnumber;
    }
    if (operator == "div"){
        result = firstnumber / secondnumber;
    }

    document.getElementById("result").value = result;

}