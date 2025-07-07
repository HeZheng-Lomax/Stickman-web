
let total1 = Number(localStorage.getItem("total"));
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('total').innerHTML = "$" + total1.toFixed(2);;
});
function handleButtonClick() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip_code").value;
    let address = document.getElementById("address").value;
    let result = email.includes("@");
    let result_2 = email.includes(".");

    if (Number(name.length) == 0) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your name!";
    } else if (Number(phone.length) !== 10) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML =
            "Please enter your phone number properly!";
    } else if (String(result) == "false" || String(result_2) == "false") {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML =
            "Please enter your email properly!";
    } else if (Number(zip.length) !== 5) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML =
            "Please enter your zip code properly!";
    } else if (Number(address.length) == 0) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML =
            "Please enter your address!";
    } else {
        document.getElementById("output").innerHTML = "Your information saved!";
        document.getElementById("checkout").style.visibility = "visible"
    }
}
function checkout(){
    document.getElementById("thanks").style.visibility = "visible";
}
