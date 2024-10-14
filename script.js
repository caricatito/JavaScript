//Introduccion al DOM
//Ejercicio 1
document.addEventListener("DOMContentLoaded", function () {
    let botonCambiarColor = document.getElementById("botonCambiarColor");
    botonCambiarColor.addEventListener("click", function () {
        let elementosP = document.getElementsByTagName("p");
        for (let i = 0; i < elementosP.length; i++) {
            elementosP[i].style.color = "blue";
        }
    });
});
//Ejercicio 2
document.addEventListener("DOMContentLoaded", function () {
    let botonEnviar = document.getElementById("botonEnviar");
    botonEnviar.addEventListener("click", function () {
        let mensaje = document.getElementById("mensaje").value;
        alert("Has ingresado: " + mensaje)
    });
});

//Eventos en DOM
//Ejercicio 1
document.addEventListener("DOMContentLoaded", function () {
    let miLista = document.getElementById("Lista");
    let elementosLi = miLista.getElementsByTagName("li");
    for (let i = 0; i < elementosLi.length; i++) {
        // Verificar si el evento click ya ha sido agregado
        if (!elementosLi[i].clickHandlerAdded) {
            elementosLi[i].clickHandlerAdded = true;
            elementosLi[i].addEventListener("click", function () {
                console.log(this.textContent);
            });
        }
    }
});
//Ejercicio 2
document.addEventListener("DOMContentLoaded", function () {
    let miInput = document.getElementById("miInput");
    let botonDeshabilitar = document.getElementById("botonDeshabilitar");
    let botonHabilitar = document.getElementById("botonHabilitar");

    botonDeshabilitar.addEventListener("click", function () {
        // Deshabilitar el input
        miInput.disabled = true;
    });

    botonHabilitar.addEventListener("click", function () {
        // Habilitar el input
        miInput.disabled = false;
    });
});

//Local Storage
//Ejercicio 1
document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("formulario");
    let correoGuardadoDiv = document.getElementById("correoGuardado");
    let correoGuardado = localStorage.getItem("correo");

    // Si existe un correo guardado, mostrarlo en el DOM
    if (correoGuardado) {
        correoGuardadoDiv.textContent = "Correo guardado: " + correoGuardado;

        // Agregar un botón para eliminar el correo guardado
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar Correo";
        botonEliminar.addEventListener("click", function () {
            // Eliminar el correo guardado de localStorage
            localStorage.removeItem("correo");
            correoGuardadoDiv.textContent = "";
        });
        correoGuardadoDiv.appendChild(botonEliminar);
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        let correo = document.getElementById("correo").value;

        localStorage.setItem("correo", correo);
        correoGuardadoDiv.textContent = "Correo guardado: " + correo;

        // Agregar un botón para eliminar el correo guardado
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar Correo";
        botonEliminar.addEventListener("click", function () {
            // Eliminar el correo guardado de localStorage
            localStorage.removeItem("correo");
            correoGuardadoDiv.textContent = "";
        });
        correoGuardadoDiv.appendChild(botonEliminar);
    });
});