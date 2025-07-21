// Base de datos de productos

let pedidos = "PEDIDOS INMEDIATOS EN BARRAQUILLA Y SOLEDAD"

let talla_l = 'Talla L'
let talla_xl = 'Talla Xl'

let precioCamisas = 38000

const productos = [
  {

    // CATERGOIA "tecnología"
    id: 1,
    nombre: "🧊 AirPods Pro 2",
    descripcion: "Auriculares inalámbricos de alta gama con cancelación activa de ruido, audio espacial y diseño ergonómico. Ideales para música, llamadas y uso diario.",
    precio: 95000,
    precioAnterior: 100000,
    categoria: "Tecnología",
    disponible: true,
    imagenes: [
      'img/tecnologia/airpord1.jpg',
      'img/tecnologia/airpord2.jpg'
    ],
    imagen: "img/tecnologia/airpord1.jpg", // Imagen principal para compatibilidad
    caracteristicas: [
      "Cancelación de ruido activa",
      "Audio espacial con seguimiento dinámico de la cabeza",
      "Chip H2 para mejor calidad de sonido y eficiencia",
      pedidos


    ],

  }, 

  {
  id: 2,
  nombre: "🎧 AirPord Max - Gris Espacial",
  descripcion: "Audífonos inalámbricos de alta gama con sonido envolvente, cancelación activa de ruido y diseño elegante en color gris. Perfectos para disfrutar de una experiencia auditiva premium.",
  precio: 17000,
  precioAnterior: 199000,
  categoria: "Tecnología",
  disponible: true,
  imagenes: [
    'img/tecnologia/airpord_max_gris1.jpg',
    'img/tecnologia/airpord_max_gris2.jpg',
    'img/tecnologia/airpord_max_gris3.jpg'
  ],
  imagen: 'img/tecnologia/airpord_max_gris1.jpg', // Imagen principal
  caracteristicas: [
    "Cancelación activa de ruido con modo ambiente",
    "Sonido de alta fidelidad con graves potentes",
    "Diseño en aluminio anodizado con diadema de malla",
    "Hasta 20 horas de batería con uso continuo",
    "Controles físicos intuitivos en el auricular",
    "Color gris espacial – moderno y sofisticado"
  ]
}
,

  {

    id: 3,
    nombre: "Mouse G950",
    descripcion: "Mouse ergonómico con iluminación RGB y sensor de alta precisión. Perfecto para gamers, diseñadores o uso de oficina prolongado.",
    precio: 50000,
    precioAnterior: 70000,
    categoria: "Tecnología",
    disponible: true,
    imagenes: [
      "img/tecnologia/mouse1.png?height=400&width=400&text=Smartphone+Frontal",
      "img/tecnologia/mouse3.jpg?height=400&width=400&text=Smartphone+Perfil",
    ],
    imagen: "img/tecnologia/mouse2.jpg", // Imagen principal para compatibilidad
    caracteristicas: [
      "Sensor óptico de 7200 DPI ajustables",
      "Diseño ergonómico y ambidiestro",
      "Iluminación LED RGB personalizable",
      "7 botones programables",
      "Conexión USB Plug & Play",
      pedidos
    ],
  },


//---------------------------------------------------------------------------------------------

  // CATEGORIA GORRAS
  {
    id: 10,
    nombre: "Gorra New Era 59FIFTY Upside Down AOP Angels - Roja",
    descripcion: "Rompe las reglas del estilo con la New Era 59FIFTY Upside Down AOP Angels en rojo. Un modelo edición especial que destaca por su diseño invertido y estampado all-over, perfecto para verdaderos fanáticos del streetwear y el béisbol. Con el logo de los Angels girado, esta gorra es una declaración de actitud y autenticidad.",
    precio: 40000,
    categoria: "Gorras",
    disponible: false,
    imagenes: [ 
      "img/gorras/gorra-roja47.jpg?height=400&width=400&text=Smartphone+Frontal"
 
    ],
    imagen: "img/gorras/gorra-roja47.jpg",
    caracteristicas: [
      "Modelo 59FIFTY original de New Era",
      "Diseño Upside Down con el logo de los Angels al revés",
      "Estampado completo (AOP – All Over Print)",
      "Color: Rojo intenso con detalles en blanco y azul",
      "Visera plana y estructura firme estilo fitted",
      "Logo bordado en 3D de alta calidad",
      pedidos


    ],
  },

   {
    id: 11,
    nombre: "Gorra Coach",
    descripcion: "Gorra de estilo urbano premium, confeccionada con materiales resistentes y diseño exclusivo. Ideal para un look casual o deportivo.",
    precio: 40000,
    categoria: "Gorras",
    disponible: false,
    imagenes: [
      "img/gorras/gorra-coach.jpg?height=400&width=400&text=Smartphone+Frontal",
    ],
    imagen: "img/gorras/gorra-coach.jpg",
    caracteristicas: [
      "Ajuste trasero con correa metálica",
      "Material: algodón peinado de alta calidad",
      "Diseño unisex",
      "Ventilación en paneles laterales",
      pedidos,
    ],
  },

   {
    id: 12,
    nombre: "Gorra West con Llamas",
    descripcion: "Destaca tu estilo con la Gorra West con llamas, una prenda con carácter único y energía ardiente. Perfecta para quienes no temen sobresalir y llevar la moda urbana a otro nivel. Su diseño con bordado de llamas aporta un toque rebelde y llamativo, ideal para combinar con outfits urbanos, streetwear o casuales.",
    precio: 45000,
    categoria: "Gorras",
    disponible: false,
    imagenes: [
      "img/gorras/gorra-west-llamas.jpg?height=400&width=400&text=Laptop+Abierta",
   
    ],
    imagen: "img/gorras/gorra-west-llamas.jpg",
    caracteristicas: [
      "Diseño exclusivo con llamas bordadas en alta definición 🔥",
      "Material resistente y de alta calidad (algodón + poliéster)",
      "Visera curva que protege del sol con estilo 🧢",
      "Cierre ajustable tipo velcro para mayor comodidad",
      "Unisex – ideal para hombres y mujeres",
      "Ideal para looks urbanos, conciertos, skate, moda callejera",
      '💬 Frase para usar en tu post:🔥 ¡Tu actitud necesita una gorra que haga juego! 🔥',
      pedidos,
    ],
  },

   {
    id: 13,
    nombre: "Gorra West (Bless)",
    descripcion: "Gorra edición especial con estilo moderno y mensaje positivo. Un accesorio ideal para quienes buscan una mezcla de moda y actitud.",
    precio: 45000,
    categoria: "Gorras",
    disponible: true,
    imagenes: [
      "img/gorras/gorra-west-bless.jpg?height=400&width=400&text=Laptop+Abierta",

    ],
    imagen: "img/gorras/gorra-west-bless.jpg",
    caracteristicas: [
      "Mensaje “Blessed” bordado",
      "Composición: algodón + poliéster",
      "Cierre trasero ajustable",
      "Comodidad ligera para uso prolongado",
      "Diseño único con significado espiritual",
      pedidos
    ],
  },





  //---------------------------------------------------------------------------------------------


  // CATEGORIA CAMISAS
  {
    id: 20,
    nombre: "Camiseta Angel",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55.0000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
      "img/camisetas/azul.jpg"
    
    ],
    imagen: "img/camisetas/azul.jpg",
    caracteristicas: [
     pedidos,
     talla_l
    ],

  },

    // CATEGORIA CAMISAS  
  {
    id: 21,
    nombre: "Camiseta ",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
      'img/camisetas/camisa-pajaro2.jpg',
      'img/camisetas/camisa-pajaro.jpg'

    ],
    imagen: "img/camisetas/camisa-pajaro2.jpg",
    caracteristicas: [
     pedidos ,
     talla_xl
    ],

  },


    // CATEGORIA CAMISAS
  {
    id: 23,
    nombre: "Camiseta Marron",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
    "img/camisetas/camisa-marron-1.jpg",
    "img/camisetas/camisa-marron-3.jpg"
    ],
    imagen: "img/camisetas/camisa-marron-1.jpg",
    caracteristicas: [
     pedidos ,
     talla_xl
    ],

  },


    {
    id: 24,
    nombre: "Camiseta ",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
      'img/camisetas/camisa-negra-red2.jpg',
      'img/camisetas/camisa-negra-red.jpg',

    ],
    imagen: "img/camisetas/camisa-negra-red2.jpg",
    caracteristicas: [
     pedidos ,
     talla_l
    ],

  },


  
    {
    id: 26,
    nombre: "Camiseta ",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
      "img/camisetas/camiseta-negra-1.jpg"
    ],
    imagen: "img/camisetas/camiseta-negra-1.jpg",
    caracteristicas: [
        talla_xl,
        pedidos

      
    ],

  },



  
  
    {
    id: 29,
    nombre: "Camiseta ",
    descripcion: "Camiseta ",
    precio: precioCamisas,
    precioAnterior: 55000,
    categoria: "CAMISAS",
    disponible: false, // No disponible
    imagenes: [
      "img/camisetas/camisa1.jpg", 


    ] ,
    imagen: "img/camisetas/camisa.png",
    caracteristicas: [
     pedidos , 
     talla_l
    ],

  },


//---------------------------------------------------------------------------------------------

  // CATEGORIA Belleza y Cuidado Personal
{
  id: 30,
  nombre: "Jabón de Rosas  Artesanal ",
  descripcion: "Jabón artesanal en forma de rosa. Hidrata, suaviza, regenera y calma la piel. Ideal para todo tipo de piel.",
  precio: 12000,  // Asumiendo pesos colombianos
  categoria: "Belleza y Cuidado Personal",
  disponible: true,
  imagenes: [
    "img/jabones/jabon_rosas1.jpg",
  ],
  imagen: "img/jabones/jabon_rosas1.jpg",
  caracteristicas: [
    "Hidrata, suaviza y relaja",
    "Regenera la piel",
    "Ideal para todo tipo de piel",
    "Alivia la piel irritada o sensible"
  ]
},

{
  id: 31,
  nombre: "Jabón de Carbón Activado",
  descripcion: "Jabón artesanal con carbón activado. Limpia, purifica y controla el exceso de grasa e impurezas. Ideal para pieles grasas.",
  precio: 12000,
  categoria: "Belleza y Cuidado Personal",
  disponible: true,
  imagenes: [
    "img/jabones/jabon_carbon_activado1.jpg"
  ],
  imagen: "img/jabones/jabon_carbon_activado1.jpg",
  caracteristicas: [
    "Desintoxica la piel",
    "Limpia y purifica profundamente",
    "Ideal para pieles grasas",
    "Controla el exceso de grasa e impurezas"
  ]
}, 

{
  id: 32,
  nombre: "Jabón de Avena Artesanal",
  descripcion: "Jabón artesanal en forma de rosa con avena natural. Exfolia suavemente, nutre e hidrata la piel. Ideal para pieles sensibles o con irritaciones.",
  precio: 12000,
  categoria: "Belleza y Cuidado Personal",
  disponible: true,
  imagenes: [
    "img/jabones/jabon_avena1.jpg"
  ],
  imagen: "img/jabones/jabon_avena1.jpg",
  caracteristicas: [
    "Exfolia y nutre",
    "Alivia la piel con irritaciones",
    "Ideal para todo tipo de piel",
    "Suaviza e hidrata la piel"
  ]
}




]

// Función para obtener solo productos disponibles
function obtenerProductosDisponibles() {
  return productos.filter((producto) => producto.disponible === true)
}

// Función para obtener un producto por ID (solo si está disponible)
function obtenerProductoPorId(id) {
  const producto = productos.find((producto) => producto.id === id)
  return producto && producto.disponible ? producto : null
}

// Función para obtener productos por categoría (solo disponibles)
function obtenerProductosPorCategoria(categoria) {
  return productos.filter((producto) => producto.categoria === categoria && producto.disponible === true)
}

// Función para buscar productos (solo disponibles)
function buscarProductos(termino) {
  return productos.filter(
    (producto) =>
      producto.disponible === true &&
      (producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(termino.toLowerCase())),
  )
}

// Función para obtener todas las categorías (solo de productos disponibles)
function obtenerCategorias() {
  const productosDisponibles = productos.filter((producto) => producto.disponible === true)
  return [...new Set(productosDisponibles.map((producto) => producto.categoria))]
}
