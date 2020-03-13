//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best Bed and Breakfast of this side of the Mississippi!"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best Bed and Breakfast in Utah!"

let message = `Hello ${userName} welcome to the finest lodging in Utah!`

document.querySelector('#greeting').innerText = message