document.addEventListener("DOMContentLoaded", function () {

    // Mostrar los datos del almacenamiento local en una tabla
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

    // Eliminar todos los datos del almacenamiento local
    const btnEliminarCompleto = document.querySelector('#btn-eliminar');
    btnEliminarCompleto.addEventListener('click', () => {
        localStorage.clear();
        const tabla = document.querySelector('.table-custom');
        const filas = tabla.querySelectorAll('tbody tr');
        filas.forEach(fila => fila.remove());
    });

    // Eliminar un dato del almacenamiento local
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
});