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


// Obtener el botón por su ID
let miBoton = document.querySelector(".next a");
console.log(miBoton)
// let url="www.google.com"
// Agregar un event listener para el evento "click" del botón
miBoton.addEventListener("click", function(event) {
  // Obtener el valor del atributo "href" del botón
  let href = miBoton.getAttribute("href");
  console.log(href)
  // Verificar si el valor de "href" contiene un signo de gato (#)
  if (href.includes("#")) {
    event.preventDefault()
      // href=miBoton.setAttribute("href",url)
    // alert("no hay mas capitulos")
    // Mostrar una notificación utilizando SweetAlert2
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'No hay mas capitulos aun',
      showConfirmButton: false,
      timer: 5500,
      width: '22em'
    });
    // Prevenir que el botón realice la acción por defecto de redireccionar a una página
    event.preventDefault();
  }
  // Verificar si el valor de "href" es una URL válida
  else if (isValidUrl(href)) {  // Permitir que el botón redirija a la URL
    return true;
  }
  // Si no se cumple ninguna de las condiciones anteriores, mostrar una notificación de error
  else {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Esta novela no esta disponible aun',
      showConfirmButton: false,
      timer:1500,
      width: '22em'
    });
    // Prevenir que el botón realice la acción por defecto de redireccionar a una página
    event.preventDefault();
  }
});
// Función para verificar si una cadena es una URL válida
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

//mostra disqus
 function mostrar(){
  document.getElementById('disqus_thread').style.display='flex'
}


// const currentChapter = parseInt(window.location.pathname.match(/Capi(\d+)_itsems\.html/)[1]);
  
//   // Calcular el número de capítulo siguiente
//   const nextChapter = currentChapter + 1;
  
//   // Actualizar el enlace Next con la URL del siguiente capítulo
//   const nextLink = document.getElementById('next-link');
//   nextLink.setAttribute('href', `Capi${nextChapter}_itsems.html`);




// p.innerHTML = `Copyright © ${anio} Shigatsu Translation`;
