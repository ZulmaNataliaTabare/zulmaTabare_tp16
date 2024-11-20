

const bicicletas = require(`./bicicletas.json`);




function listaDeBicis() {
    return bicicletas;
}

module.exports = {
    listaDeBicis
};

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
