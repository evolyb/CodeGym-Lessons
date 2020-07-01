function CheckLap(num) {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    num3 = document.getElementById("num3");
    if (num1.checked == true && num2.checked == true && num3.checked == true){
        switch (num) {
            case 1:
                document.getElementById("num3").checked = false;
                break;
            case 2:
                document.getElementById("num1").checked = false;
                break;
            case 3:
                document.getElementById("num2").checked = false;
                break;
        }
    }

}