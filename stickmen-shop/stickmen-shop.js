const productsDict = {
    "Basic": 1,
    "Bizarre": 3,
    "Sword": 3,
    "Big": 3,
    "Gun": 5,
    "Cow": 5,
    "Alien": 10,
    "Super": 10,
    "Crazed": 10,
}

const cart = {
    "Basic": 0,
    "Bizarre": 0,
    "Sword": 0,
    "Big": 0,
    "Gun": 0,
    "Cow": 0,
    "Alien": 0,
    "Super": 0,
    "Crazed": 0,
}


let cartPrice = 0;
let cartAmount = 0;
let wallet = 0;
if (localStorage.getItem('wallet') !== null) {
    wallet = localStorage.getItem('wallet')
}

document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);

function addToCart(name) {
    if (wallet - productsDict[name] < 0) {
        return;
    }
    wallet = wallet - productsDict[name];
    document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
    cartPrice += productsDict[name];
    cartAmount += 1;
    document.getElementById("amountInCart").innerHTML = cartAmount;
    localStorage.setItem("cartAmount", String(cartAmount));
    localStorage.setItem("cartPrice", String(cartPrice));
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("wallet", wallet)
}



let index = 0;

function displayImages() {
    const images = document.getElementsByClassName("image");

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    index++;

    if (index > images.length) {
        index = 1;
    }

    images[index-1].style.display = "block";

    setTimeout(displayImages, 3000);
}

displayImages();

function closeDiv() {
    document.getElementById("featured-section").style.display = "none";
}



