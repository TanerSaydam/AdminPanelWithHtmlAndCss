const sidenav = document.querySelector(".sidenav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    sidenav.classList.toggle("show");
});
