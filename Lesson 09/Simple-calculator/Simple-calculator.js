function addnum(num) {
    let numbernow = document.getElementById("monitor-now").value;
    if (numbernow == "0"){
        numbernow = ""
    }
        numbernow = numbernow + num;
    document.getElementById("monitor-now").value = numbernow;
    return numbernow;
}
function delnum() {
    numbernow = "0";
    document.getElementById("monitor-now").value = numbernow;
    return "0";
}
function Keypress(num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            addnum(num);
             break;
        case "C":
            delnum();
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
                firstnum = parseInt(document.getElementById("monitor-now").value);
                document.getElementById("monitor-now").value = "0";
                operator = num;
                break;
        case '=':
            secondnum = parseInt(document.getElementById("monitor-now").value);
            switch (operator) {
                case '+':
                    resultnow = firstnum + secondnum;
                    break;
                case '-':
                    resultnow = firstnum - secondnum;
                    break;
                case 'x':
                    resultnow = firstnum * secondnum;
                    break;
                case '/':
                    resultnow = firstnum / secondnum;
                    break;
            }

            document.getElementById("monitor-now").value = resultnow;
            }

    }
