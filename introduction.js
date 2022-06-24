
let myName = "Ajeyemi Alajede"
let myHeight = "1.6cm"
let myCountry = "Nigeria"

let message = "Name: " + myName + "\n\nHeight:"+ myHeight + " \n\nCountry: " + myCountry;

alert(message)
console.log(message)

document.getElementById("myName").innerHTML = myName
document.getElementById("myHeight").innerHTML = myHeight
document.getElementById("myCountry").innerHTML = myCountry