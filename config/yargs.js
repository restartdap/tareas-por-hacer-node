
const descripcion = {
    demand: true, 
    alias: "d", 
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    default: true, 
    alias: "c", 
    desc: "Marca como completada o pendiente una tarea"
}

const argv = require("yargs")
                .command("crear", "Crea una nueva tarea", {
                    descripcion
                })
                .command("actualizar", "Actualiza una tarea existente", {
                    descripcion,
                    completado
                })
                .command("eliminar", "Elimina una tarea existente", {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}