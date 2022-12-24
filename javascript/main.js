const mobileNav = document.querySelector('.mobile-nav')
const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')
const closeBtn = document.querySelector('.close-btn')

mobileNav.addEventListener('click', (e) => {
  navlinks.classList.toggle('mobile-menu')
  if (e.target === menuBtn) {
    menuBtn.replaceWith(closeBtn)
    closeBtn.style.display = 'block'
  }
  if (e.target === closeBtn) {
    closeBtn.replaceWith(menuBtn)
  }
})

const bdark=document.querySelector("#bdark");
const body=document.querySelector("body");
load();

bdark.addEventListener("click",e=>{
body.classList.toggle("darkmode");
store(body.classList.contains("darkmode"));
});

function load(){
const darkmode= localStorage.getItem("darkmode");
if (!darkmode){
    store("false");
}
else if (darkmode=="true"){
    body.classList.add("darkmode");
}
}
function store(value){
    localStorage.setItem("darkmode",value);
}

const preloader=document.querySelector(".preloader");
window.addEventListener("load",()=>{
  preloader.style.display="none";
} )
