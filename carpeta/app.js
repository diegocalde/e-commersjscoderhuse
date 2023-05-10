class libroController {
  constructor() {
    this.listaLibros = []; // const libros= listalibros[]
  }

  levantar() {
    let obtenerListaJSON = localStorage.getItem("listaLibros");

    if (obtenerListaJSON) {
      this.listaLibros = JSON.parse(obtenerListaJSON);
    }
  }
  renderizarProductos() {
    const contenedor_libros = document.getElementById("contenedor_libros");
    const contenedor_carrito = document.getElementById("contenedor_carrito");
    this.listaLibros.forEach((libro) => {
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

    this.listaLibros.forEach((libro) => {
      let comprarlibro = document.getElementById(`${libro.id}`);
      comprarlibro.addEventListener("click", agregarAlCarrito);
    });
  }
}

const controladorLibro = new libroController();
controladorLibro.levantar();
controladorLibro.renderizarProductos();

const listaCarrito = [];
function agregarAlCarrito(e) {
  const arrayProductos = JSON.parse(localStorage.getItem("listaLibros"));
  const encontrado = arrayProductos.find((p) => p.id === parseInt(e.target.id));
  listaCarrito.push(encontrado);
  /**se borra todo **/
  contenedor_carrito.innerHTML = "";
  /**en lista carrito se agregan del html del modal los libros pusheados  **/
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
          <button onClick = "eliminarDelCarrito(${libro.id})" class="btn btn-danger"> Eliminar del Carrito </button>
        </div>
      </div>
    </div>
  </div>
    
    `;
  });
}
const eliminarDelCarrito = (id) => {
  const listaLibro = listaCarrito.find((listaLibros) => listaLibros.id === id);
  listaCarrito.splice(listaCarrito.indexOf(listaLibros), 1);
};
eliminarDelCarrito();
