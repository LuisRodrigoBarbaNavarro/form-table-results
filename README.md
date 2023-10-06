# Práctica 3 I Formularios Validados Con JavaScript - Parte 2 - Tabla De Resultados 🐈

### Información Básica

**Nombre:** Barba Navarro Luis Rodrigo

**Fecha (Creación):** 05/10/23

**Descripción:** Este repositorio presenta tres versiones de formularios de validación de la segunda práctica, con la adición de una tabla de resultados efectuada en JavaScript:

1. [Versión Básica](https://luisrodrigobarbanavarro.github.io/form-table-results/form-table-results/index-1.html): Implementación simple de validación de datos.
2. [Versión con Observaciones](https://luisrodrigobarbanavarro.github.io/form-table-results/form-table-results/index-2.html): Muestra mensajes detallados de error debajo de cada campo.
3. [Versión con Resaltado de Errores](https://luisrodrigobarbanavarro.github.io/form-table-results/form-table-results/index-3.html): Resalta los errores directamente en los campos de texto.

### Preguntas
1. Los arreglos en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Los elementos de un arreglo se indexan numéricamente, comenzando desde 0, y pueden contener cualquier tipo de datos, incluyendo números, cadenas, objetos u otros arreglos.
---
2. El almacenamiento del navegador en JavaScript consta de dos tipos principales: **sessionStorage** y **localStorage**. Ambos permiten a las aplicaciones web almacenar datos en el lado del cliente. Las ventajas y desventajas son las siguientes:

   - `sessionStorage`:
     - Ventajas: Los datos se almacenan solo durante la sesión actual del navegador y se eliminan cuando se cierra la pestaña o el navegador. Tiene una capacidad de almacenamiento de alrededor de 5-10 MB por dominio.
     - Desventajas: Los datos no persisten más allá de la sesión actual y están limitados a un solo navegador o ventana.

   - `localStorage`:
     - Ventajas: Los datos se almacenan de forma persistente en el navegador y están disponibles incluso después de cerrar y volver a abrir el navegador. Tiene una capacidad de almacenamiento de alrededor de 5-10 MB por dominio.
     - Desventajas: Los datos no son compartidos entre diferentes pestañas o ventanas del navegador y pueden llenar el almacenamiento local si se abusa de él.

   Métodos de acceso en JavaScript para `sessionStorage` y `localStorage`:

   - Para almacenar datos:
     ```javascript
     localStorage.setItem("clave", "valor");
     sessionStorage.setItem("clave", "valor");
     ```

   - Para recuperar datos:
     ```javascript
     var dato = localStorage.getItem("clave");
     var dato2 = sessionStorage.getItem("clave");
     ```

   - Para eliminar datos:
     ```javascript
     localStorage.removeItem("clave");
     sessionStorage.removeItem("clave");
     ```
---
3. JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y legible por humanos. Se utiliza comúnmente para representar objetos y estructuras de datos en JavaScript y en muchas otras tecnologías. Es un formato de texto que consiste en pares de clave-valor y se utiliza para transmitir datos entre un servidor y un cliente, o para almacenar configuraciones y estructuras de datos.
---
4. `JSON.parse()` se utiliza para convertir una cadena JSON en un objeto JavaScript:
   ```javascript
   var stringJSON = '{"nombre": "Rodrigo", "edad": 21}';
   var object = JSON.parse(stringJSON);
   ```

   `JSON.stringify()` se utiliza para convertir un objeto JavaScript en una cadena JSON:
   ```javascript
   var object = { nombre: "Rodrigo", edad: 21 };
   var stringJSON = JSON.stringify(object);
   ```
---
5. `window.location.href` es una propiedad que se utiliza para obtener o cambiar la URL completa de la página actual en un navegador web:

   ```javascript
   var url = window.location.href;
   ```
---
