const { registrar, leer } = require('./operaciones');

const [operacion, ...datos] = process.argv.slice(2);

switch (operacion) {
    case "registrar":
        if (datos.length === 4) {
            registrar(...datos);
        } else {
            console.log("Error: Debes proporcionar nombre, edad, color y enfermedad para registrar una cita.");
        }
        break;

    case "leer":
        leer();
        break;

    default:
        console.log("Error: Debes ingresar 'registrar' o 'leer'.");
}