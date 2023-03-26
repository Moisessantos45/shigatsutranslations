const opciones = [
    { nombre: "kamatte", url: "kamatte.html" },
    { nombre: "yuujin-chara", url: "yuujin.html" },
    { nombre: "it semss", url: "itseems.html" },
    { nombre: "Ordinary Days", url: "ordinary.html" },
    { nombre: "In the After School Library", url: "In_the_After.html" },
    { nombre: "Cursed, Pure Love", url: "cursed_pure.html" },
    { nombre: "My Parent Remarried", url: "My_Parent.html" },
    { nombre: "The Love Comedy Where", url: "TheLove.html" },
    { nombre: "The Cool Tsukishiro-san", url: "TheCool.html" },
    { nombre: "The Story Of How I", url: "TheStory.html" },
    { nombre: "Classmate ga Tsukaima", url: "class.html" },
    { nombre: "What Happens If A Friend’s", url: "What_Happens.html" },
    { nombre: "Ryuu Kusari No Ori -Kokoro ", url: "ryuu.html" }
  ];
  
  const input = document.getElementById("buscar");
  const datalist = document.getElementById("opciones");
  
  opciones.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.nombre;
    optionElement.dataset.url = opcion.url;
    optionElement.target = "_blank";
    datalist.appendChild(optionElement);
  });
  
  input.addEventListener("change", () => {
    const opcionSeleccionada = opciones.find(opcion =>
      opcion.nombre.toLowerCase() === input.value.toLowerCase()
    );
    if (opcionSeleccionada) {
      window.open(opcionSeleccionada.url); // redirigir a la URL de la opción seleccionada en una nueva pestaña
    }
  });