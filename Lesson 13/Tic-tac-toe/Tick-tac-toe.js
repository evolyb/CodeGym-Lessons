let tableArray = [['','',''],['','',''],['','','']];
let mark = 'X'
let winPlayer = "";
let winID = "";
let howWin = "";
let isOver =false;
let countStep = 0;
let gameType = "1";
let rPossibleWin = -1;
let cPossibleWin = -1;
let rPossibleLose = -1;
let cPossibleLose = -1;
let Score1 = 0;
let Score2 = 0;

function selectGameType() {
    gameType = document.getElementById("gameType").value;
    if (gameType === "1"){
        document.getElementById("Player1").innerText = "Player 01"
        document.getElementById("Player2").innerText = "Super Computer 01"
    } else {
        document.getElementById("Player1").innerText = "Player 01"
        document.getElementById("Player2").innerText = "Player 02"
    }
    Score1 = 0;
    Score2 = 0;
    updateScore();
}
function updateScore() {
    document.getElementById("Score1").innerHTML = Score1;
    document.getElementById("Score2").innerHTML = Score2;
}

function DisplayTable() {
    for (let i = 0; i <=2 ; i++) {
        for (let j = 0; j <= 2 ; j++) {
            let ID = "X"+i+j;
            document.getElementById(ID).innerHTML = tableArray[i][j];
            document.getElementById(ID).style.backgroundColor = defaultStatus
            isOver = false;
            countStep = 0;
            document.getElementById("output").innerHTML = "";
            resetPossible();
        }
    }
}
function ClearTable() {
    tableArray = [['','',''],['','',''],['','','']];
    mark = "X";
    DisplayTable();
}
function inputPlayer(r,c) {
    // if (checkInputAlready(r,c)) return;
    if (isOver) return;
    let ID = 'X'+r+c;
    countStep++;
    if (mark === 'X'){
        document.getElementById(ID).innerHTML = 'X';
        tableArray[r][c] = 'X';
        mark = 'O';
    } else {
        document.getElementById(ID).innerHTML = 'O';
        tableArray[r][c] = 'O';
        mark = 'X';
    }
    if (checkWinner(r,c)){
        document.getElementById("output").innerHTML = winPlayer + " is winner";
        changeColor();
        isOver = true;
        if (winPlayer === "X"){
            Score1++;
        } else Score2++;
        updateScore();
    }
}
function checkInputAlready(r,c) {
    return tableArray[r][c] !== "";
}
function checkWinner(r,c) {
    winPlayer = tableArray[r][c];
    if (tableArray[r][0] === tableArray[r][1] && tableArray[r][0] === tableArray[r][2]) {
        winID = r;
        howWin = "row";
        return true;
    }
    if (tableArray[0][c] === tableArray[1][c] && tableArray[0][c] === tableArray[2][c]){
        winID = c;
        howWin = "col";
        return true;
    }
    if (tableArray[1][1] === "") return false;
    if (tableArray[0][0] === tableArray[1][1] && tableArray[0][0] === tableArray[2][2]){
        howWin = "1";
        return true;
    }
    howWin ="2";
    return tableArray[0][2] === tableArray[1][1] && tableArray[0][2] === tableArray[2][0];
}
function changeColor() {
    switch (howWin) {
        case "row":
            for (let i = 0; i <=2 ; i++) {
                let ID = "X"+winID+i;
                document.getElementById(ID).style.backgroundColor="green";
            }
            break;
        case "col":
            for (let i = 0; i <=2 ; i++) {
                let ID = "X"+i+winID;
                document.getElementById(ID).style.backgroundColor="green";
            }
            break;
        case "1":
            for (let i = 0; i <=2 ; i++) {
                let ID = "X"+i+i;
                document.getElementById(ID).style.backgroundColor="green";
            }
            break;
        case "2":
            for (let i = 0; i <=2 ; i++) {
                let ID = "X"+i+(2-i);
                document.getElementById(ID).style.backgroundColor="green";
            }
            break;
    }
}

function inputMark(r,c) {
    if (!checkInputAlready(r,c))
    {
        inputPlayer(r,c);
        if (gameType !== "1") return;
        if (countStep <=8){
            computerMove();
        }
    }
}

function computerMove() {
    if (tableArray[1][1] === "") {
        rPossibleWin = 1;
        cPossibleWin = 1;
    } else if (tableArray[1][1] === "X" && countStep <2){
        rPossibleWin = 0;
        cPossibleWin = 2;
    } else {
        checkPossibleLose();
        checkPossibleWin();
        if (rPossibleWin === -1 && rPossibleLose === -1){
            checkSpecial()
        }
    }
    if (rPossibleWin === -1 && rPossibleLose === -1){
        do {
            rPossibleWin = Math.floor(Math.random()*3);
            cPossibleWin = Math.floor(Math.random()*3);
        } while (checkInputAlready(rPossibleWin,cPossibleWin));
    }
    if (rPossibleWin !== -1){
        inputPlayer(rPossibleWin,cPossibleWin);
        resetPossible();
    } else {
        inputPlayer(rPossibleLose,cPossibleLose);
        resetPossible();
    }

}
function resetPossible() {
    rPossibleWin = -1;
    cPossibleWin = -1;
    rPossibleLose = -1;
    cPossibleLose = -1;
}
function checkPossibleWin() {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (tableArray[i][j] === "") {
                tableArray[i][j] = "O";
                if (checkWinner(i, j)) {
                    rPossibleWin = i;
                    cPossibleWin = j;
                }
                tableArray[i][j] = "";
            }
        }
    }
}
function checkPossibleLose() {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (tableArray[i][j] === "") {
                tableArray[i][j] = "X";
                if (checkWinner(i, j)) {
                    rPossibleLose = i;
                    cPossibleLose = j;
                }
                tableArray[i][j] = "";
            }
        }
    }
}
function checkSpecial() {
    if (tableArray[0][1] === "X" && tableArray[1][0] === "X" && !checkInputAlready(0,0)) {
        rPossibleWin = 0;
        cPossibleWin = 0;
    }
    if (tableArray[0][1] === "X" && tableArray[1][2] === "X" && !checkInputAlready(0,2)) {
        rPossibleWin = 0;
        cPossibleWin = 2;
    }
    if (tableArray[2][1] === "X" && tableArray[1][2] === "X" && !checkInputAlready(2,2)) {
        rPossibleWin = 2;
        cPossibleWin = 2;
    }
    if (tableArray[2][1] === "X" && tableArray[1][0] === "X" && !checkInputAlready(2,0)) {
            rPossibleWin = 2;
            cPossibleWin = 0;
    }
}
