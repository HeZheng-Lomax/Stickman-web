function randomize_bug() {
    document.getElementById("bug").style.left= (90*Math.random()) + "%";
    document.getElementById("bug").style.top= (80*Math.random()) + "%";
}

function bug_hit() {
    wallet += income;
    document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
    localStorage.setItem("wallet", wallet)
    randomize_bug()
}

let income = 1;
let wallet = 0;
document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
randomize_bug()

