const fs = require('fs');

function registrar(nombre, edad, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        color: color,
        enfermedad: enfermedad
    };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('Cita registrada con éxito.');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    if (Array.isArray(citas) && !citas.length) {
        console.log('No hay elementos');
    } else {
        console.log('Cargando Datos');
        citas.forEach((cita, index) => {
            console.log(`Cita Num: ${index}`);
            console.log(cita);
        });
    }
}

module.exports = {
    registrar,
    leer,
};
