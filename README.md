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
6. El funcionamiento de `script-results` se basa en tres principales partes: la primera está encargada de mostrar los datos del almacenamiento local en la tabla, la segunda tiene como finalidad eliminar todos los datos del almacenamiento local, y la tercera se encarga de eliminar un dato específico de una fila del almacenamiento local.


   ```javascript
   const tablaResultados = document.getElementById("tablaResultados");
   const envios = JSON.parse(localStorage.getItem("envios")) || [];
   envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${envio.id}</td>
        <td>${envio.nombre}</td>
        <td>${envio.apellidos}</td>
        <td>${envio.telefono}</td>
        <td>${envio.correo}</td>
        <td>${envio.edad}</td>
        <td>${envio.fechaNacimiento}</td>
        <td><button type="button" class="btn btn-danger btn-eliminar">Eliminar</button></td>
   `;
     tablaResultados.appendChild(fila);
   });
   ```


   En el bloque de código anterior, se emplea exclusivamente para presentar los datos en la tabla de la página de resultados. Inicialmente, se obtiene una referencia al elemento HTML de la tabla identificado 
   por el ID "tablaResultados". Posteriormente, se recopilan y transforman los datos almacenados en el almacenamiento local bajo la clave "envios" en un arreglo de objetos. Finalmente, se itera a través de 
   estos objetos y se generan filas de tabla HTML que contienen sus respectivas propiedades, las cuales se añaden a la tabla "tablaResultados".


   ```javascript
   const btnEliminarCompleto = document.querySelector('#btn-eliminar');
    btnEliminarCompleto.addEventListener('click', () => {
        localStorage.clear();
        const tabla = document.querySelector('.table-custom');
        const filas = tabla.querySelectorAll('tbody tr');
        filas.forEach(fila => fila.remove());
    });
   ```


   Este segundo bloque de código, se encarga de eliminar completamente los datos almacenados en el almacenamiento local y todas las filas de una tabla en la página web cuando se hace clic en un botón. Primero, 
   se obtiene una referencia al botón con el ID "btn-eliminar" y se añade un evento de escucha para cuando se haga clic en él. Cuando se activa este evento, se borran todos los datos en el almacenamiento local 
   utilizando `localStorage.clear()`, se localiza la tabla en la página por su clase "table-custom", se seleccionan todas las filas dentro de su cuerpo y se eliminan una por una, vaciando así la tabla y  
   borrando todos los datos almacenados de manera visual y en el almacenamiento local.


   ```javascript
   const btnEliminarFila = document.querySelectorAll('.btn-eliminar');
    btnEliminarFila.forEach(btn => {
        btn.addEventListener('click', () => {
            const fila = btn.closest('tr');
            const indice = fila.rowIndex - 1;

            const envios = JSON.parse(localStorage.getItem('envios')) || [];

            envios.splice(indice, 1);
            localStorage.setItem('envios', JSON.stringify(envios));

            fila.remove();
        });
    });
   ```


   Este último bloque de código permite la eliminación de filas de una tabla en la página web cuando se hace clic en un botón "eliminar" asociado a cada fila. Para cada botón de eliminación, se agrega un 
   evento de clic que identifica la fila correspondiente, calcula su índice en la tabla, elimina el objeto relacionado en los datos almacenados en el almacenamiento local, actualiza el almacenamiento local con 
   los nuevos datos y, finalmente, elimina visualmente la fila de la tabla en la página web.

   
   
