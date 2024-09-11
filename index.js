var yourName = prompt('Hi. What is your name?');

var firstchar = yourName.slice(0,1);
var UppercaseFirstChar = firstchar.toUpperCase();
var restofname = yourName.slice(1,yourName.length);
var restofname = restofname.toLowerCase();
var capitalizedName = UppercaseFirstChar + restofname
alert('Hello, ' +  capitalizedName + '. Welcome to MARKY STUDIOS'); 

document.querySelectorAll("#btn").addEventListener("click", function() {
        
    Document.querySelectorAll("#btn").classList.add("pressed")
    });

