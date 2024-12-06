// Craación de estancias para las estucturas de datos que estan en otros archivos
const listTareas = new listaEnlazada();
const arbolTareas = new  ArbolBinario();
const tablaHashTareas = new TablaHash();

// Agreagar para el formulario

document.getElementById('task-form').addEventListener('submit', function(e){
    e.preventDefault();
    const titulo = document.getElementById('task-title').value;
    const descripcion = document.getElementById('task-desc').value;
    const importancia = parseInt(document.getElementById('task-importance').value,10);
    // agregamos tareas a la estructuras de datos
    listTareas.agregar
})