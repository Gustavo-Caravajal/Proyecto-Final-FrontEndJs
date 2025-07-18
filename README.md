# Laptop Store

Este proyecto es una tienda web de laptops desarrollada con HTML, CSS y JavaScript sin frameworks.

## HTML

- Se utiliza estructura semántica con etiquetas como `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
- Se definen páginas como `index.html` y `carrito.html`.
- Se incluyen íconos mediante la CDN de Font Awesome.

## CSS

- Se aplica diseño con Flexbox para organizar el contenido.
- Se usan clases personalizadas para dar estilo a botones, tarjetas de productos, formularios, etc.
- Se utiliza `:hover` para efectos visuales en botones y enlaces.
- Se define una paleta de colores oscuros con acentos amarillos para contraste.

## JavaScript

- Se manipula el DOM con `createElement`, `appendChild`, `textContent`, `classList`, etc.
- Se gestiona el carrito con `localStorage`:
  - Guardar y recuperar productos.
  - Eliminar un producto individual.
  - Vaciar el carrito completo.
  - Calcular y mostrar el total con `reduce()`.
  - Actualizar el contador del carrito.
- Se usan eventos (`addEventListener`) para los botones del carrito.
- Se muestra un mensaje si el carrito está vacío.
- Se redirige al usuario a la página principal al finalizar la compra.

## Funcionalidad

- El usuario puede agregar productos desde la tienda (en otra página).
- En `carrito.html` puede ver los productos agregados, eliminarlos, vaciar el carrito o finalizar la compra.
- El estado del carrito se conserva entre sesiones gracias a `localStorage`.

