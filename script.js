
const container = document.getElementById("malla-container");
const STORAGE_KEY = "malla_udep_aprobados";

let aprobados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobados));
}

function crearCursoElement(curso) {
  const div = document.createElement("div");
  div.classList.add("course");
  div.dataset.id = curso.id;
  div.textContent = curso.nombre;

  const estaAprobado = aprobados.includes(curso.id);
  const requisitosCumplidos = curso.requisitos.every(r => aprobados.includes(r));

  if (estaAprobado) {
    div.classList.add("completed");
  } else if (requisitosCumplidos) {
    div.classList.add("unlocked");
  } else {
    div.classList.add("locked");
  }

  div.addEventListener("click", () => {
    if (aprobados.includes(curso.id)) {
      aprobados = aprobados.filter(id => id !== curso.id);
    } else if (curso.requisitos.every(r => aprobados.includes(r))) {
      aprobados.push(curso.id);
    } else {
      return; // no desbloqueado aún
    }
    guardarEstado();
    renderizarMalla();
  });

  return div;
}

function renderizarMalla() {
  container.innerHTML = "";
  malla.forEach(bloque => {
    const col = document.createElement("div");
    col.classList.add("ciclo-column");

    const titulo = document.createElement("div");
    titulo.classList.add("ciclo-title");
    titulo.textContent = bloque.ciclo;
    col.appendChild(titulo);

    bloque.cursos.forEach(curso => {
      const cursoEl = crearCursoElement(curso);
      col.appendChild(cursoEl);
    });

    container.appendChild(col);
  });
}

function resetProgress() {
  if (confirm("¿Estás seguro de reiniciar todo tu progreso?")) {
    aprobados = [];
    guardarEstado();
    renderizarMalla();
  }
}

renderizarMalla();
