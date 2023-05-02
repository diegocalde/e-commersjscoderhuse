class libroController{
   constructor(){
    this.listaLibros =[]
   }

};
  


levantar(){
  let obtenerListaJSON = localStorage.getItem("listaLibros")

  if(obtenerListaJSON){
      this.listaLibros = JSON.parse(obtenerListaJSON)
  }
};
const controladorLibro = new libroController();
controladorLibro.levantarLibros();

const listaCarrito=[]

 const contenedor_libros = document.getElementById("contenedor_libros");
 const contenedor_carrito = document.getElementById("contenedor_carrito")
 listaLibros.forEach(libro => {
    contenedor_libros.innerHTML+=`
    <div class="card "style="width: 18rem;">
               <img src="${libro.img}" class="card-img-top" alt="${libro.alt}">
              <div class="card-body">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">${libro.precio}</p>
                <a href="#" class="btn btn-primary" id="book${libro.id}">comprar</a>
              </div>
          </div>
    `
 });
/**se recorre el array y con un click se pushea a listaCarrito **/
 listaLibros.forEach(libro=>{
 const comprarlibro= document.getElementById(`book${libro.id}`)
 comprarlibro.addEventListener("click",()=>{
  listaCarrito.push(libro)
  /**se borra todo **/
  contenedor_carrito.innerHTML=""
/**en lista carrito se agregan del html del modal los libros pusheados  **/
  listaCarrito.forEach(libro => {
   contenedor_carrito.innerHTML+=`
   <div class="card mb-3 bg-primary" style="max-width: 540px;">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="${libro.img}" class="img-fluid rounded-start" alt="${libro.alt}">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${libro.titulo}</h5>
         <p class="card-text">${libro.precio}$</p>
       </div>
     </div>
   </div>
 </div>
   
   ` 
  });
 });
 });