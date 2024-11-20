

const bicicletas = require(`./bicicletas.json`);




function listaDeBicis() {
    return bicicletas;
}



console.log(listaDeBicis());

const fs = require('fs');

fs.readFile('bicicletas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }
    
    const bicicletas = JSON.parse(data);

    console.log(bicicletas);
});


module.exports = {
    listaDeBicis
};