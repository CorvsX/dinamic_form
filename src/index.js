let usuarios = [];

const addBtn = document.querySelector(".btn-primary");
const card = document.querySelector(".card");
const container = document.getElementById("usuariosContainer");
const errorContainer = document.getElementById("errorContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

addBtn.addEventListener("click", () => {
  if (!validarFormulario()) return;

  const datosUsuario = obtenerDatosFormulario();

  if (!validarCorreoUnico(datosUsuario.correo)) return;

  agregarUsuario(datosUsuario);

  limpiarFormulario();
});

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  mostrarUsuariosFiltrados(searchTerm);
});

function validarFormulario() {
  let valido = true;
  const inputs = card.querySelectorAll(".form-control");

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valido = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  if (!valido) {
    mostrarError("Todos los campos son obligatorios.");
  }

  return valido;
}

function validarCorreoUnico(correo) {
  const existe = usuarios.some(usuario => usuario.correo === correo);

  if (existe) {
    mostrarError("El correo ya está registrado. Intenta con otro.");
    return false;
  }

  return true;
}

function obtenerDatosFormulario() {
  const inputs = card.querySelectorAll(".form-control");

  return {
    nombre: inputs[0].value.trim(),
    correo: inputs[1].value.trim(),
    edad: parseInt(inputs[2].value.trim(), 10),
  };
}

function agregarUsuario(usuario) {
  usuarios.push(usuario);

  const nuevaCardHTML = `
    <div class="card" style="max-width: 250px;">
      <div class="card-header">
        <h5 class="mb-0">${usuario.nombre}</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" value="${usuario.nombre}" disabled>
        <input type="email" class="form-control" value="${usuario.correo}" disabled>
        <input type="number" class="form-control" value="${usuario.edad}" disabled>
        <button type="button" class="btn btn-danger mt-2">🗑️ Eliminar</button>
      </div>
    </div>
  `;

  container.innerHTML += nuevaCardHTML;

  const botonesEliminar = container.querySelectorAll(".btn-danger");
  botonesEliminar[botonesEliminar.length - 1].addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".card");
    const correo = tarjeta.querySelector("input[type='email']").value;
    eliminarUsuario(correo, tarjeta);
  });
}

function eliminarUsuario(correo, tarjeta) {
  usuarios = usuarios.filter(usuario => usuario.correo !== correo);

  tarjeta.remove();
}

function mostrarError(mensaje) {
  errorContainer.textContent = mensaje;
  const inputs = card.querySelectorAll(".form-control");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      errorContainer.textContent = "";
    });
  });
}

// function limpiarFormulario() {
//   const inputs = card.querySelectorAll(".form-control");
//   inputs.forEach(input => {
//     input.value = "";
//     input.classList.remove("is-invalid");
//   });
// }

function mostrarUsuariosFiltrados(searchTerm) {
  const cards = container.querySelectorAll(".card");
  cards.forEach(card => {
    const nombreUsuario = card.querySelector("h5").textContent.toLowerCase();
    if (nombreUsuario.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
