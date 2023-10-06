document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const errorMessages = {
        id: "El Identificador debe tener 5 dígitos exactos.",
        nombre: "El nombre no puede estar vacío.",
        apellidos: "El apellido no puede estar vacío.",
        telefono: "El teléfono debe tener el formato (###) ###-####.",
        correo: "El correo electrónico no es válido.",
        edad: "La edad debe ser un número positivo.",
        fechaNacimiento: "La fecha de nacimiento debe tener el formato AAAA-MM-DD."
    };

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        resetErrorStyles();

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
    });

    function validateForm(formData) {
        const errors = {};

        for (const field in formData) {
            const value = formData[field];

            if (field === "id" && !/^\d{5}$/.test(value)) {
                errors[field] = errorMessages[field];
            } else if (value.trim() === "") {
                errors[field] = errorMessages[field];
            } else if (field === "telefono" && !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(value)) {
                errors[field] = errorMessages[field];
            } else if (field === "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errors[field] = errorMessages[field];
            } else if (field === "edad" && (isNaN(parseInt(value)) || parseInt(value) <= 0)) {
                errors[field] = errorMessages[field];
            } else if (field === "fechaNacimiento" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                errors[field] = errorMessages[field];
            }
        }

        for (const field in errors) {
            showError(field, errors[field]);
        }

        return errors;
    }

    function showError(fieldName, errorMsg) {
        const field = document.getElementById(fieldName);
        const errorSpan = document.createElement("span");

        errorSpan.classList.add("text-danger");
        errorSpan.innerHTML = errorMsg;

        field.parentNode.appendChild(errorSpan);
    }

    function resetErrorStyles() {
        const errorSpans = document.querySelectorAll(".text-danger");
        errorSpans.forEach(function (errorSpan) {
            errorSpan.remove();
        });
    }
});
