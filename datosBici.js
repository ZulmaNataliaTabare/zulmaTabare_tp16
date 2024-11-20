
const fs = require('fs');



function listaDeBicis(callback) {
fs.readFile('bicicletas.json', 'utf8', (err, data) => {
    
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        
        return;
    }
    
    const bicicletas = JSON.parse(data);

    callback(bicicletas);
}); 
}

console.log(listaDeBicis());


module.exports = {
    listaDeBicis
};