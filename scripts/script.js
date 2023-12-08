// JavaScript Document
console.log("hi");

var navBar = document.querySelector(".menu");
var stickyNav = navBar.offsetTop;

console.log(navBar);

window.onscroll = function (stickyNav) {
    if (scrollY > 0){
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
};

