 let listaLibros = [
  {
    id: 1,
    titulo: "naranja mecanica",
    precio: 2000,
    cantidad: 1,
    img: "./images/naranja mecanica.jpg",
  },
  {
    id: 2,
    titulo: "alicia atravez del espejo",
    precio: 1500,
    cantidad: 1,
    img: "./images/alicia atravez del espejo.jpg",
  },
  {
    id: 3,
    titulo: "asuntos de honor",
    precio: 1200,
    cantidad: 1,
    img: "./images/asuntos de honor.jpg",
  },
  {
    id: 4,
    titulo: "la ultima daga",
    precio: 390,
    cantidad: 1,
    img: "./images/la ultima daga.jpg",
  },
  {
    id: 5,
    titulo: "codigo de ladrones",
    precio: 1300,
    cantidad: 1,
    img: "./images/codigo de ladrones.jpg",
  },
  {
    id: 6,
    titulo: "la pequeña eve",
    precio: 480,
    cantidad: 1,
    img: "./images/la pequeña eve.jpg",
  },
  {
    id: 7,
    titulo: "historias extraordinarias",
    precio: 100,
    cantidad: 1,
    img: "./images/historias extraordinarias.jpg",
  },
  {
    id: 8,
    titulo: "neimhain",
    precio: 400,
    cantidad: 1,
    img: "./images/neimhain.jpg",
  },
  {
    id: 9,
    titulo: "la divina comedia",
    precio: 500,
    cantidad: 1,
    img: "./images/la divina comedia.jpg",
  },
  {
    id: 10,
    titulo: "el bosque de alaira",
    precio: 800,
    cantidad: 1,
    img: "./images/el bosque de alaira.jpg",
  },
];

const arrformtJason = JSON.stringify(listaLibros);
localStorage.setItem("listaLibros", arrformtJason);
