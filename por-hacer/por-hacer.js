const fs = require("fs");

let tareas = [];

const getTareas = () => {
    cargarDB();
    return tareas;
}

const cargarDB = () => {
    try {
        tareas = require("../db/data.json");    
    } catch (error) {
        tareas = [];
    }
}

const guardarDB = () => {
    
    let data = JSON.stringify(tareas);
    fs.writeFile("db/data.json", data, (err) => {
        if(err) throw new Error("No se pudo guardar", err);
    });
}

const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    tareas.push(tarea);
    guardarDB();

    return tarea;
};

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(!(index < 0)) {
        tareas[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}

const borrar = (descripcion) => {
    
    cargarDB();

    let nuevasTareas = tareas.filter(tarea => tarea.descripcion !== descripcion);

    if(!(nuevasTareas.length === tareas.length)) {

        tareas = nuevasTareas;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    crear,
    actualizar,
    borrar,
    getTareas
}