"use strict";

var _this = void 0;

var navToggler = document.getElementById("nav-toggler");
var navBar = document.getElementById("nav");
var header = document.getElementById("header");
var menuTabs = document.getElementById("menu-tabs");
window.addEventListener("load", function () {
  // page Loader
  document.querySelector(".pageLoader").classList.add("fade-out");
  setTimeout(function () {
    document.querySelector(".pageLoader").style.display = "none";
  }, 1000);
  AOS.init();
});

navToggler.onclick = function () {
  toggleNav();
};

document.onclick = function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
};

window.addEventListener("scroll", function () {
  if (_this.pageYOffset > 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

menuTabs.onclick = function (e) {
  if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
    var target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    var menuSection = document.querySelector(".menu-section");
    menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
    AOS.init();
  }
}; //////////////////////////////////////// Funciones


var toggleNav = function toggleNav() {
  navToggler.classList.toggle("active");
  navBar.classList.toggle("open");
};