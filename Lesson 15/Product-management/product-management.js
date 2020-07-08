let producArr = ["Sony Xperia","Samsung Galaxy","Nokia 6"]
function DisplayProduct() {
    let data = "<table>"

    for (let i = 0; i < producArr.length ; i++) {
        num = i;
        let EditButton = "<input class='Button' type='button' value='Edit' onclick='EditProduct("+num+")'>";
        let DeleteButton = "<input class='Button' type='button' value='Delete' onclick='DeleteProduct("+num+")'>";
        data = data + "<tr><td class='productDisplay'>"+producArr[i]+"</td><td>"+EditButton+"</td><td>"+DeleteButton+"</td></tr>"
    }
    document.getElementById("DisplayTable").innerHTML = data +"</table>"
    countProduct();
}

function AddProduct() {
    let newProduct = document.getElementById("inputNew").value;
    if (newProduct !== "" && !CheckLap()){
        producArr.push(newProduct);
        DisplayProduct();
        document.getElementById("inputNew").value ="";
    }
}
function CheckLap() {
    let newProduct = document.getElementById("inputNew").value;
    if (newProduct !== ""){
        for (let i = 0; i < producArr.length ; i++) {
            if (producArr[i] === newProduct){
                alert("Sản phẩm đã tồn tại");
                return true;
            }
        }
    }
    return false;
}
function EditProduct(num) {
    let newName = prompt("Nhập tên mới cho sản phẩm");
    if (newName !== "" && newName !== null){
        for (let i = 0; i < producArr.length ; i++) {
            if (producArr[i] === newName){
                alert("Tên sản phẩm này đã tồn tại, chọn tên khác");
                return;
            }
        }
    } else return;
    producArr[num] = newName;
    DisplayProduct();
}
function DeleteProduct(num) {
    producArr.splice(num,1);
    DisplayProduct();
}
function countProduct() {
    let num = producArr.length;
    document.getElementById("countProduct").innerHTML = "Product Name: "+num+" sản phẩm."
}