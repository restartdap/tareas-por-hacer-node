const colors = require("colors");

const {argv} = require("./config/yargs");
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "listar":
        let tareas = porHacer.getTareas();

        console.log("====== Tareas por Hacer ======\n".green);

        for (const tarea of tareas) {
            console.log("Tarea: ".white + `${tarea.descripcion}`.yellow);
            console.log("Completada: ".white + `${tarea.completado}`.yellow);
            console.log("==============================".red);
        }

        console.log("\n==============================".green);
    break;
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;
    case "eliminar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
        console.log("Comando No Reconocido");
    break;
}
