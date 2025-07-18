document.addEventListener("DOMContentLoaded", () => {
    const mostrarProductos = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        productosEnCarrito(carrito);

        let seccionProductos = document.getElementById("contenedor-carrito");
        seccionProductos.innerHTML = "";

        if (!carrito.length) {
            let mensajeCarrito = document.createElement("p");
            mensajeCarrito.classList.add("mensaje-carrito");
            mensajeCarrito.textContent = "No hay productos en el carrito";
            seccionProductos.appendChild(mensajeCarrito);
        } else {
            carrito.forEach((elemento, index) => {
                let tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("producto-carrito");

                let imgProducto = document.createElement("img");
                imgProducto.classList.add("img-producto-carrito");
                imgProducto.src = elemento.images[0];

                let tituloProducto = document.createElement("h3");
                tituloProducto.textContent = elemento.title;

                let precioProducto = document.createElement("p");
                precioProducto.textContent = `$${elemento.price}`;

                let btnEliminar = document.createElement("button");
                btnEliminar.classList.add("btn-eliminar-carrito");
                btnEliminar.textContent = "eliminar";

                btnEliminar.addEventListener("click", () => {
                    eliminarProducto(index);
                });

                tarjetaProducto.appendChild(imgProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(btnEliminar);

                seccionProductos.appendChild(tarjetaProducto);
            });
            mostrarBotones();

            precioTotal();
        };
    };

    const mostrarBotones = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let divAcciones = document.getElementById("acciones-carrito");
        divAcciones.innerHTML = "";

        if (carrito.length) {
            let btnVaciar = document.createElement("button");
            btnVaciar.textContent = "Vaciar carrito";
            btnVaciar.addEventListener("click", () => {
                vaciarCarrito();
            });
            let btnFinalizar = document.createElement("button");
            btnFinalizar.textContent = "FInalizar compra";
            btnFinalizar.addEventListener("click", () => {
                let confirmado = confirm("¿Estas seguro de que quieres finalizar la compra?");
                if (confirmado) {
                    alert("gracias por su compra");
                    localStorage.removeItem("carrito");
                    window.location.href = "./index.html";
                }
            });
            let contenedorBotones = document.createElement("div");
            contenedorBotones.classList.add("contenedor-botones");
            contenedorBotones.appendChild(btnVaciar)
            contenedorBotones.appendChild(btnFinalizar)
            divAcciones.appendChild(contenedorBotones);

        };
    };

    const productosEnCarrito = ((carrito) => {
        let contadorCarrito = document.getElementById("contador-carrito");
        contadorCarrito.textContent = carrito.length;
    });

    const eliminarProducto = (indice) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(indice, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Eliminado");
        mostrarProductos();
    };

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        alert("Vaciando carrito");
        mostrarProductos();
        precioTotal();
    };

    const precioTotal = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let divAcciones = document.getElementById("acciones-carrito");
        let totalActual = document.createElement("p");
        totalActual.innerHTML = "$0"

        let totalPrevio = divAcciones.querySelector(".precio-total");
        if (totalPrevio) {
            totalPrevio.remove();
        }

        if (carrito.length) {
            totalActual.classList.add("precio-total");
            totalActual.textContent = `Total:  $${carrito
                .map(producto => producto.price)
                .reduce((suma, precio) => suma + precio, 0)}`;
            divAcciones.appendChild(totalActual)

        } else {
            totalActual.classList.add("precio-total");
            totalActual.textContent = `Total: $0`
            divAcciones.appendChild(totalActual)
        }

    }

    mostrarProductos();
});