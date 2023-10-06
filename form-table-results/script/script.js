document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");
    const errorList = [];
    const errorMessages = {
        id: "El Identificador debe tener 5 dígitos exactos.",
        nombre: "El nombre no puede estar vacío.",
        apellidos: "El apellido no puede estar vacío.",
        telefono: "El teléfono debe tener el formato (###) ###-####.",
        correo: "El correo electrónico no es válido.",
        edad: "La edad debe ser un número positivo.",
        fechaNacimiento: "La fecha de nacimiento debe tener el formato AAAA-MM-DD."
    };

    mensajeError.style.display = "none";

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        errorList.length = 0;

        const formData = {
            id: formulario.id.value,
            nombre: formulario.nombre.value,
            apellidos: formulario.apellidos.value,
            telefono: formulario.telefono.value,
            correo: formulario.correo.value,
            edad: formulario.edad.value,
            fechaNacimiento: formulario.fechaNacimiento.value
        };

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            const envios = JSON.parse(localStorage.getItem("envios")) || [];
            envios.push(formData);
            localStorage.setItem("envios", JSON.stringify(envios));
            window.location.href = "results.html";
        }

        if (errorList.length > 0) {
            mensajeError.innerHTML = "<strong> errorList encontrados: </strong> <ul>";
            for (let i = 0; i < errorList.length; i++) {
                mensajeError.innerHTML += "<li>" + errorList[i] + "</li>";
            }
            mensajeError.innerHTML += "</ul>";
            mensajeError.style.display = "block";
        } else {
            mensajeError.innerHTML =
                "<strong> Formulario enviado con éxito. </strong>";
            mensajeError.style.display = "block";
        }
    });

    function validateForm(formData) {
        const errors = {};

        for (const field in formData) {
            const value = formData[field];

            if (field === "id" && !/^\d{5}$/.test(value)) {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            } else if (value.trim() === "") {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            } else if (field === "telefono" && !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(value)) {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            } else if (field === "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            } else if (field === "edad" && (isNaN(parseInt(value)) || parseInt(value) <= 0)) {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            } else if (field === "fechaNacimiento" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                errors[field] = errorMessages[field];
                errorList.push(errorMessages[field]);
            }
        }

        return errors;
    }
});
