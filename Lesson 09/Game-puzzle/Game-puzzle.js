function ChangeTop() {
    num = parseInt(document.getElementById("image1").name);
    if (num != 3){
        num = num + 1;
    }
    else {
        num = 1;
    }
    srcnow = "image/top0"+num+".jpg"
    document.getElementById("image1").src = srcnow;
    document.getElementById("image1").name = num;
    return num;
}
function ChangeUpTop() {
    num = parseInt(document.getElementById("image2").name);
    if (num != 3){
        num = num + 1;
    }
    else {
        num = 1;
    }
    srcnow = "image/uptop0"+num+".jpg"
    document.getElementById("image2").src = srcnow;
    document.getElementById("image2").name = num;
    return num;
}
function ChangeCenter() {
    num = parseInt(document.getElementById("image3").name);
    if (num != 3){
        num = num + 1;
    }
    else {
        num = 1;
    }
    srcnow = "image/center0"+num+".jpg"
    document.getElementById("image3").src = srcnow;
    document.getElementById("image3").name = num;
    return num;
}
function ChangeUpBottom() {
    num = parseInt(document.getElementById("image4").name);
    if (num != 3){
        num = num + 1;
    }
    else {
        num = 1;
    }
    srcnow = "image/upbottom0"+num+".jpg"
    document.getElementById("image4").src = srcnow;
    document.getElementById("image4").name = num;
    return num;
}
function ChangeBottom() {
    num = parseInt(document.getElementById("image5").name);
    if (num != 3){
        num = num + 1;
    }
    else {
        num = 1;
    }
    srcnow = "image/bottom0"+num+".jpg"
    document.getElementById("image5").src = srcnow;
    document.getElementById("image5").name = num;
    return num;
}
function KeyClick(num) {
    switch (num) {
        case 1:
            ChangeTop();
            break;
        case 2:
            ChangeUpTop();
            break;
        case 3:
            ChangeCenter();
            break;
        case 4:
            ChangeUpBottom();
            break;
        case 5:
            ChangeBottom();
            break;
    }
    num1 = document.getElementById("image1").name;
    num2 = document.getElementById("image2").name;
    num3 = document.getElementById("image3").name;
    num4 = document.getElementById("image4").name;
    num5 = document.getElementById("image5").name;
    if (num1 ==num2 && num2 == num3 && num3 == num4 && num4 == num5){
        document.getElementById("all").className = "form-wrap1"
    }
    else {
        document.getElementById("all").className = "form-wrap"
    }
}