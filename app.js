
const { listaDeBicis } = require('./datosBici');

let dhBici = {
    bicicletas: [],
    
    inicializarBicis: function(callback) {
        listaDeBicis((bicicletas) => {
            this.bicicletas = bicicletas;
            if (callback) callback();
        });
    },
    
    buscarBici: function(id) {
        const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
        return biciEncontrada ? biciEncontrada : null;
    }
};


dhBici.inicializarBicis(() => {
    const resultado = dhBici.buscarBici(10);
    console.log(resultado);
});





