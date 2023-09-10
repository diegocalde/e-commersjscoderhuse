// Define la clase libroController
class libroController {
  constructor() {
    this.listaLibros = []; // Inicializa la lista de libros vacía
  }

  // Método asincrónico para cargar los datos de "cargarlibros.js" usando Fetch
  async levantar() {
    try {
      const response = await fetch("./cargarlibros.json"); // Realiza la solicitud Fetch al archivo cargarlibros.json
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo cargarlibros.json.");
      }
      const data = await response.json(); // Analiza los datos JSON de la respuesta
      this.listaLibros = data; // Asigna los datos a this.listaLibros
      localStorage.setItem("listaLibros", JSON.stringify(this.listaLibros)); // Guarda los datos del libro en el almacenamiento local
    } catch (error) {
      console.error("Error al cargar el archivo cargarlibros.json:", error);
    }
  }

  // Método para renderizar productos en el DOM
  renderizarProductos() {
    const contenedor_libros = document.getElementById("contenedor_libros");
    const contenedor_carrito = document.getElementById("contenedor_carrito");
    this.listaLibros.forEach((libro) => {
      // Agrega tarjetas de productos al contenedor_libros
      contenedor_libros.innerHTML += `
     <div class="card "style="width: 18rem;">
                <img src="${libro.img}" class="card-img-top" alt="${libro.alt}">
               <div class="card-body">
                 <h5 class="card-title">${libro.titulo}</h5>
                 <p class="card-text">precio:${libro.precio}$</p>
                 <button type="button" class="btn btn-primary" id ="${libro.id}">comprar</button>
               </div>
           </div>
     `;
    });

    // Asigna eventos para agregar productos al carrito
    this.listaLibros.forEach((libro) => {
      let comprarlibro = document.getElementById(`${libro.id}`);
      comprarlibro.addEventListener("click", agregarAlCarrito);
    });
  }
}

// Crea una instancia de la clase libroController
const controladorLibro = new libroController();

// Carga los datos de "cargarlibros.js" asincrónicamente y luego renderiza los productos
controladorLibro.levantar().then(() => {
  controladorLibro.renderizarProductos();
});

// Inicializa una lista vacía para el carrito de compras
const listaCarrito = [];

// Función para agregar un libro al carrito
function agregarAlCarrito(e) {
  const arrayProductos = JSON.parse(localStorage.getItem("listaLibros"));
  const encontrado = arrayProductos.find((p) => p.id === parseInt(e.target.id));
  listaCarrito.push(encontrado);

  // Borra el contenido del carrito y luego muestra los libros en el carrito
  contenedor_carrito.innerHTML = "";
  listaCarrito.forEach((libro) => {
    contenedor_carrito.innerHTML += `
    <div class="card mb-3 bg-primary" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${libro.img}" class="img-fluid rounded-start" alt="${libro.alt}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${libro.titulo}</h5>
          <p class="card-text">${libro.precio}$</p>
          <button onClick="eliminarDelCarrito(${libro.id})" class="btn btn-danger"> Eliminar del Carrito </button>
        </div>
      </div>
    </div>
  </div>
    
    `;
  });
}

// Función para eliminar un libro del carrito
function eliminarDelCarrito(id) {
  const index = listaCarrito.findIndex((libro) => libro.id === id);
  if (index !== -1) {
    listaCarrito.splice(index, 1);
    contenedor_carrito.innerHTML = "";
    listaCarrito.forEach((libro) => {
      contenedor_carrito.innerHTML += `
      <div class="card mb-3 bg-primary" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${libro.img}" class="img-fluid rounded-start" alt="${libro.alt}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
            <p class="card-text">${libro.precio}$</p>
            <button onClick="eliminarDelCarrito(${libro.id})" class="btn btn-danger"> Eliminar del Carrito </button>
          </div>
        </div>
      </div>
    </div>
      
      `;
    });
  }
}
function finalizarCompra() {
  if (listaCarrito.length === 0) {
    // Muestra un SweetAlert con un mensaje de agradecimiento
    Swal.fire({
      title: "Error",
      text: "El carrito de compras está vacío. Agregue productos antes de finalizar la compra.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
    else {
      // Calcula el total de la compra
      const totalCompra = calcularTotalCompra();
  
      // Muestra un mensaje de confirmación de compra exitosa junto con el total
      Swal.fire({
        title: "¡Gracias por su compra!",
        text: `Su compra se ha realizado con éxito. Total: $${totalCompra.toFixed(2)}`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
  
  }
  function calcularTotalCompra() {
  let total = 0;
  listaCarrito.forEach( (libro)=> {
total += libro.precio;
  });

 return total;
  }
  // Limpia el carrito de compras
  listaCarrito.length = 0;
  contenedor_carrito.innerHTML = "";
}
// Asigna el evento al botón "Finalizar Compra"
const finalizarCompraButton = document.getElementById("finalizarCompra");
finalizarCompraButton.addEventListener("click", finalizarCompra);

