
const cart2 = {
    "one":"Basic",
    "two":"Bizarre",
    "three":"Sword",
    "four": "Big",
    "five": "Gun",
    "six": "Cow",
    "seven": "Alien",
    "eight": "Super",
    "nine": "Crazed",
}

let subtotal = Number(localStorage.getItem("cartPrice"));
const priceDict = JSON.parse(localStorage.getItem("price"));
const cart = JSON.parse(localStorage.getItem("cart"));

function totalling() {
    let tax = subtotal * .0625;
    let total = Number(subtotal)+ tax;
    document.getElementById('cost').innerHTML = subtotal + '.00';
    document.getElementById('tax').innerHTML = tax.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    localStorage.setItem("total", String(total));
}

totalling();



//make the boxes appear only if item is selected in the shop
function appear(){
    for (const key in cart2){
        let box = document.getElementById(key);
        if(parseInt(cart[cart2[key]]) <= 0){
            box.style.display = "none";
        }
        else{
            box.style.display = "block";
        }
    }
}
appear();

//event listener basically just loads the functions inside first
document.addEventListener('DOMContentLoaded', function() {
    console.log(cart);
    //console.log(price);

    document.getElementById('Basic').value = cart.Basic
    document.getElementById('Bizarre').value = cart.Bizarre
    document.getElementById('Sword').value = cart.Sword
    document.getElementById('Big').value = cart.Big
    document.getElementById('Gun').value = cart.Gun
    document.getElementById('Cow').value = cart.Cow
    document.getElementById('Alien').value = cart.Alien
    document.getElementById('Super').value = cart.Super
    document.getElementById('Crazed').value = cart.Crazed

    appear();
    totalling();
});
    function addone(inputId) {
        appear();
        let inputField = document.getElementById(inputId);
        // Increment the value by 1

        inputField.value = parseInt(inputField.value) + 1;
        subtotal += Number(priceDict[inputId]);
        cart[inputId] += 1;
        totalling();
        localStorage.setItem("cartPrice", String(subtotal))
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    function minusone(inputId) {
        appear();
        let inputField = document.getElementById(inputId);
        // parse int makes the string status of the inputfield into an int
        if(parseInt(inputField.value) > 0){
            inputField.value = parseInt(inputField.value) - 1;
            subtotal = subtotal - Number(priceDict[inputId]);
            cart[inputId] = cart[inputId] - 1;
            totalling();
            localStorage.setItem("cartPrice", String(subtotal));
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
            inputField.value = 0;
        }
    }

//new changes
