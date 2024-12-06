// Implemenmte clase Nodo y Clase ArbolBinario
class Nodo {
    constructor(tarea) {
        this.tarea = tarea;
        this.izquierda = null;
        this.derecha = null;
    };
};

class ArbolBinario {
    constructor() {
        this.raiz = null;
    };
// Creación de las respectivas funciones para insertar y busquedas 


insertar(tarea) {
    const nuevoNodo = new Nodo(tarea);
    if(this.raiz === null) {
        this.raiz = nuevoNodo;
    } else  {
        this.insertarNodo(this.raiz, nuevoNodo)
    };
  };

//  ordenamos por nivel de importancias los nodos
  insertarNodo(nodo, nuevoNodo){
    if(nuevoNodo.tarea.importancia < nodo.tarea.importancia) {
        if (nodo.izquierda === null) {
            nodo.izquierda = nuevoNodo;
        } else {
            this.insertarNodo(nodo.izquierda, nuevoNodo);
        }; 
        }else {
             if (nodo.derecha === null ) {
                nodo.derecha = nuevoNodo;
        } else {
            this.insertarNodo(nodo.derecha, nuevoNodo);
        };
    };
  };
    inOrden(nodo, callback) {
        if(nodo != null) {
            this.inOrden(nodo.izquierda, callback);
            callback(nodo.tarea);
            this.inOrden(nodo.derecha, callback);
        }
    }
};

// creacion de estancias para el arbolbinario

// const arbolTareas = new ArbolBinario();

// function mostrarTarea(tarea) {
//     console.log(`Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Importancia: ${tarea.importancia}`);
// };

// // insertar tareas

// arbolTareas.insertar({ titulo: 'Tarea 1', descripcion: 'Descripción 1', importancia: 2 });
// arbolTareas.insertar({ titulo: 'Tarea 2', descripcion: 'Descripción 2', importancia: 1 }); 
// arbolTareas.insertar({ titulo: 'Tarea 3', descripcion: 'Descripción 3', importancia: 
// 3 });
// arbolTareas.insertar({ titulo: 'Tarea 4', descripcion: 'Descripción 4', importancia: 
//     1 });
// // recorrer el orden del arbol
// console.log("------------------------");
// arbolTareas.inOrden(arbolTareas.raiz, mostrarTarea);