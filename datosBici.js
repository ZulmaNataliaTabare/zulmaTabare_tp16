
const fs = require('fs');

function listaDeBicis() {
    const data = fs.readFileSync('bicicletas.json', 'utf8');
    return JSON.parse(data);
}

module.exports = {
    listaDeBicis
};
