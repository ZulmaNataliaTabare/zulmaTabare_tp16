
const { listaDeBicis } = require('./datosBici');




let dhBici = {
    
    bicicletas :  listaDeBicis((bicicletas) => {
    console.log(bicicletas);
}),
    buscarBici: function (id) {
        return this.bicicletas.filter(bici => bici.id === id )
    }, 

    
},






