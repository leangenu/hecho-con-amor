const productos = [
    {
      id: 1,
      nombre: "Venecitas",
      precio: 1000,
    },
    {
      id: 2,
      nombre: "Pegamentos",
      precio: 800,
    },
    {
      id: 3,
      nombre: "Herramientas",
      precio: 6000,
    },
    {
      id: 4,
      nombre: "Mesas",
      precio: 2000,
    },
    {
      id: 5,
      nombre: "Espejos",
      precio: 900,
    },
    {
      id: 6,
      nombre: "Mates",
      precio: 400,
    },
  ];
  
  let contadorCarrito = 0;
  const carrito = [];
  
  const productoCatalogo = (producto) => {
    return `
      <div class="col">
        <div class="card">
          <img src="../imagenes/js/${producto.nombre}.jpg"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
          </div>
        </div>
      </div>`;
  };
  
  const productoCarrito = (producto) => {
    return `
      <div class="col">
        <div class="card">
          <img
            src="../imagenes/js/${producto.nombre}.jpg"  
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
          </div>
        </div>
      </div>`;
  };
  
  const verCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogo = "";
  
    for (const producto of productos) {
      catalogo += productoCatalogo(producto);
    }
  
    catalogoNodo.innerHTML = catalogo;
    botonesCatalogo();
  };
  const  mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("Total");
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) {
      carritoHTML += productoCarrito(producto);
      precio += producto.precio;
    }
  
    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
  };
  
  const botonesCatalogo = () => {
    for (const producto of productos) {
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const productoCarrito = {
          nombre: producto.nombre,
          idCompra: contadorCarrito,
          precio: producto.precio,
        };
  
        contadorCarrito += 1  ;
        carrito.push(productoCarrito);
        mostrarCarrito();
      });
    }
  };
  
  const botonesCarrito = () => {
    for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        carrito.splice(index, 1);
        mostrarCarrito();
      });
    }
  };
  
 verCatalogo();

 