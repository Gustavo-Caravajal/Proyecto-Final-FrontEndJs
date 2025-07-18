document.addEventListener("DOMContentLoaded", () => {
    //trae los elementos de carrito y los parsea a objetos de js, si carrito devuelve null asigna la lista vacia
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productosOriginales = [];
    //funcion que tendra el fetch, promises
    let contenedorProductos = document.getElementById("contenedor-productos");
    let buscador = document.getElementById("buscador")
    const mostrarProductos = (lista) => {
        contenedorProductos.innerHTML = "";

        for (const producto of lista) {

            let tarjetaProducto = document.createElement("article");
            tarjetaProducto.classList.add("tarjeta-producto");

            let imagenProducto = document.createElement("img");
            imagenProducto.classList.add("imagen-producto");
            imagenProducto.src = producto.images[0];
            imagenProducto.alt = producto.description;

            let tituloProducto = document.createElement("h3");
            tituloProducto.classList.add("titulo-producto");
            tituloProducto.textContent = producto.title;

            let precioProducto = document.createElement("p");
            precioProducto.textContent = `$${producto.price}`;

            let btnAgregar = document.createElement("button");
            btnAgregar.classList.add("boton-producto");
            btnAgregar.textContent = "Agregar"
            btnAgregar.addEventListener("click", () => {
                alert(`${producto.title} agregado al carrito`);
                agregarProducto(producto);
                actualizarAgregados();
            });

            tarjetaProducto.appendChild(imagenProducto);
            tarjetaProducto.appendChild(tituloProducto);
            tarjetaProducto.appendChild(precioProducto)
            tarjetaProducto.appendChild(btnAgregar);

            contenedorProductos.appendChild(tarjetaProducto);
        }
    };

    const renderizarProductos = () => {
        url = "https://dummyjson.com/products/category/laptops?limit=12";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                productosOriginales = data.products;
                mostrarProductos(productosOriginales)
            })
            .catch((err) => console.error("Error: ", err));
    };


    const agregarProducto = (producto) => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    const actualizarAgregados = () => {
        const contadorCarrito = document.getElementById("contador-carrito");
        contadorCarrito.textContent = carrito.length;
    };

    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        let filtrados = productosOriginales.filter(producto => producto.title.toLowerCase().includes(texto));
        mostrarProductos(filtrados);
    });


    renderizarProductos();
    actualizarAgregados();
});