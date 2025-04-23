// set up text to print, each item in array is new line
var aText = new Array(
    "I'm Aaditya Mittal — a multidisciplinary designer blending animation, VFX, VR, and graphic design to tell bold visual stories across mediums."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();

// var beepOne = $("#beep")[0];
// $(".loader")
//     .mouseenter(function () {
//         beepOne.play();
//     });

//POPUP EVENT
let popup = document.getElementById("popup");
function openPopup() {
    // function required() {
    //     var empt = document.forms["form1"]["lastName"]["email"]["mobile"]["textarea"].value;
    //     if (empt == "") {
    //         alert("Please input a Value");
    //         return false;
    //     }
    //     else {

    //         return true;
    //     }
    // }
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// window.onscroll = function () { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

//Get Data
// const firstNameInput = document.querySelector("#firstname");
// const lastNameInput = document.querySelector("#lastname");
// const emailInput = document.querySelector("#email");
// const mobileInput = document.querySelector("#mobile");
// const messageInput = document.querySelector("#message"); 
