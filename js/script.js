let navToggler = document.getElementById("nav-toggler");
let navBar = document.getElementById("nav");
let header = document.getElementById("header");
let menuTabs = document.getElementById("menu-tabs");

window.addEventListener("load",()=>{
  // page Loader
  document.querySelector(".pageLoader").classList.add("fade-out");
  setTimeout(()=>{
    document.querySelector(".pageLoader").style.display = "none";
  },1000)
  AOS.init();
})

navToggler.onclick = () => {
  toggleNav();
};

document.onclick = (e) => {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
};

window.addEventListener("scroll", () => {
  if (this.pageYOffset > 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

menuTabs.onclick = (e) => {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    let target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    let menuSection = document.querySelector(".menu-section");
    menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
    menuSection.querySelector(target).classList.add("active")
    AOS.init();
  }
};

//////////////////////////////////////// Funciones

const toggleNav = () => {
  navToggler.classList.toggle("active");
  navBar.classList.toggle("open");
};
