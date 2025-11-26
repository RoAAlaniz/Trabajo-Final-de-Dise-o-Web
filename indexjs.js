document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const confirmacion = document.getElementById("confirmacion");

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
        confirmacion.textContent = "❌ Por favor, completá todos los campos.";
        confirmacion.style.color = "#ff69b4";
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        confirmacion.textContent = " ❌ Por favor, ingresá un correo válido.";
        confirmacion.style.color = "#ff69b4";
        return;
    }

    confirmacion.textContent = "✅ ¡Mensaje enviado! Te responderemos pronto.";
    confirmacion.style.color = "#ff69b4";

    document.getElementById("form-contacto").reset();
});


//trim() = elimina espacios en blanco al inicio y al final de una cadena de texto