/*
Student Name: Joey S
File Name: script.js
Date: 4/12/22
*/



// self executing function
(function() {
    if(window.localStorage.getItem('menu-links') === null){
      window.localStorage.setItem('menu-links', 'none');
    }
    var x = document.getElementById("menu-links");
    x.style.display = window.localStorage.getItem('menu-links');
})();

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById ("menu-links") ;
    var logo = document.getElementById ("ffc-logo") ;
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

