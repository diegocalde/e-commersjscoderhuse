     const listaLibros=[
    {id:1,titulo:"naranja mecanica",precio:2000,cantidad:1,img:"images/descarga(1).jpg"},
    {id:2,titulo:"alicia atravez del espejo",precio:1500,cantidad:1,img:"images/descarga(3).jpg"},
    {id:3,titulo:"asuntos de honor",precio:1200,cantidad:1,img:"images/images(1).jpg"},
    {id:4,titulo:"la ultima daga",precio:390,cantidad:1,img:"images/images(2).jpg"},
    {id:5,titulo:"codigo de ladrones",precio:1300,cantidad:1,img:"images/images(5).jpg"},
    {id:6,titulo:"la pequeña eve",precio:480,cantidad:1,img:"images/images(8).jpg"},
    {id:7,titulo:"historias extraordinarias",precio:100,cantidad:1,img:"images/images(9).jpg"},
    {id:8,titulo:"neimhaim",precio:400,cantidad:1,img:"images/images(12).jpg"},
    {id:9,titulo:"la divina comedia",precio:500,cantidad:1,img:"images/images(13).jpg"},
    {id:10,titulo:"el bosque de alaira",precio:800,cantidad:1,img:"images/images(14).jpg"}
    ]

  const arrformtJason = JSON.stringify(listaLibros);
  localStorage.setItem("listalibros",arrformtJason);