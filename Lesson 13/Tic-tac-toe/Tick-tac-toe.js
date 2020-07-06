let now = 1;
let nut = "X"
let arr = [["","",""],["","",""],["","",""]];
let rwin = "";
let cwin = "";
let crosswin1 = "";
let crosswin2 ="";
let whichwin = "";
function Add(r,c,nutnow) {
    let ID = "X"+r+c;
    document.getElementById(ID).value = nutnow;
    arr[r-1][c-1] = nutnow;
}
function AddRand(r,c) {
    if (arr[r-1][c-1] === ""){
        if (now === 1){
            nut = "X";
            now = 0;
        } else {
            nut = 'O'
            now = 1;
        }
        Add(r,c,nut);
        if (CheckMate(r-1,c-1)){
            document.getElementById("output").innerHTML = whichwin + " WIN";
            FillColor();
        }
    } else {
        alert("Ô này đã được chọn");
    }
}
function CheckMate(r,c) {
    if (arr[r][0] === arr[r][1] && arr[r][0] === arr[r][2]){
        rwin = r;
        whichwin = arr[r][0];
        return true;
    }
    if (arr[0][c] === arr[1][c] && arr[0][c] === arr[2][c]){
        whichwin = arr[0][c];
        cwin = c;
        return true;
    }
    if (arr[1][1] !== ""){
        if (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) {
            crosswin1 = 1;
            whichwin = arr[1][1];
            return true;
        }
        if (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0]) {
            crosswin2 = 1;
            whichwin = arr[1][1];
            return true;
        }
    }
    return false;
}

function Reset() {
    arr = [["","",""],["","",""],["","",""]];
    now = 1;
    nut = "X"
    arr = [["","",""],["","",""],["","",""]];
    rwin = "";
    cwin = "";
    crosswin1 = "";
    crosswin2 ="";
    whichwin = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let ID = 'X'+i+j;
            document.getElementById(ID).value = "";
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let ID = 'Y'+i+j;
            document.getElementById(ID).style.backgroundColor = "white";
        }
    }

}
function FillColor() {
    if (rwin !== "") {
        for (let i = 1; i <= 3; i++) {
            let ID = "Y" + (rwin + 1) + i;
            document.getElementById(ID).style.backgroundColor = "red";
        }
    } else if (cwin !== "") {
        for (let i = 1; i <= 3; i++) {
            let ID = "Y" + i + (cwin + 1);
            document.getElementById(ID).style.backgroundColor = "red";
        }
    } else if (crosswin1 !==""){
        document.getElementById("Y11").style.backgroundColor = "red";
        document.getElementById("Y22").style.backgroundColor = "red";
        document.getElementById("Y33").style.backgroundColor = "red";
    } else {
        document.getElementById("Y13").style.backgroundColor = "red";
        document.getElementById("Y22").style.backgroundColor = "red";
        document.getElementById("Y31").style.backgroundColor = "red";
    }
}