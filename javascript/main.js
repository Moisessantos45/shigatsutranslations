//click movimiento
// window.addEventListener('mousemove', function(event) {
//   var cursorX = event.clientX;
//   var cursorY = event.clientY;
//   var div = document.getElementById('miDiv');
//   var divX = div.offsetLeft + (div.offsetWidth / 2);
//   var divY = div.offsetTop + (div.offsetHeight / 2);
//   var distanciaX = cursorX - divX;
//   var distanciaY = cursorY - divY;
//   div.style.backgroundPosition = (distanciaX / 10) + 'px ' + (distanciaY / 10) + 'px';
// });

document.addEventListener("DOMContentLoaded", function() {
  let footer = document.querySelectorAll(".footer p");
  let p = footer[1];
  p.innerHTML="";
  let fecha = new Date();
  let anio = fecha.getFullYear();
  console.log(anio);
  p.innerHTML = `Copyright © ${anio} Shigatsu Translation`;
});

///menu
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
///modo oscuro
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

//loadirn con img
const preloader=document.querySelector(".preloader");
window.addEventListener("load",()=>{
  preloader.style.display="none";
} )

let link = document.querySelectorAll(".volumes a")
console.log(link)
link.forEach(lin => {
    if (lin.href === "#" || lin.href.endsWith("#")) {
        lin.addEventListener("click", evt => {
            evt.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Links no disponible',
                showConfirmButton: false,
                timer: 3500,
                width: '20em'
            });
        })
    } else {
        lin.setAttribute("target", "_blank")
    }
})


//mostra disqus
 function mostrar(){
  document.getElementById('disqus_thread').style.display='flex'
}

const elementos = document.querySelectorAll('.pre');

elementos.forEach(elemento => {
  const texto = elemento.textContent;
  const caracteres = texto.split('');

  let nuevoContenido = '';
  let i = 0;

  while (i < caracteres.length) {
    if (caracteres[i] === '☆') {
      nuevoContenido += `<span class="centrarEstrella">${caracteres[i]}</span>`;
    } else if (caracteres[i] === '$' && caracteres[i + 1] === '$') {
      nuevoContenido += `<span class="centrarEstrella">${caracteres[i] + caracteres[i + 1]}</span>`;
      i++;
    } else {
      nuevoContenido += caracteres[i];
    }

    i++;
  }

  elemento.innerHTML = nuevoContenido;
});


// p.innerHTML = `Copyright © ${anio} Shigatsu Translation`;
