const con = document.getElementById("con")

// const ruble = document.getElementById("Dollar")
// const sum = document.getElementById("So'm")

const res = document.getElementById("res")

function converter() {
    res.innerHTML = parseInt(con.value) * 59,75
}

function sum() {
    res.innerHTML = parseInt(con.value) / 59,75
}