
const { listaDeBicis } = require('./datosBici');

    let dhBici = {

    bicicletas : listaDeBicis(), 
    

    buscarBici: function(id) {
        const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
        return biciEncontrada ? biciEncontrada : null;
    },

    venderBici : function(id) {
        
        const biciEncontrada = this.buscarBici(id);
        
        if ( biciEncontrada) {

            biciEncontrada.vendida = true;
            return biciEncontrada;
        }else{
            return "Bicicleta no encontrada";
        }
            
        },

        biciParaLaVenta : function () {
            return this.bicicletas.filter(bici => bici.vendida === false);
        },

        bicisVendidas: function () {
            return this.bicicletas.filter(bici => bici.vendida === true)
        },
    
        totalDeVentas: function () {
            return this.bicisVendidas().reduce((acumulador,valorActual) => {
                return acumulador + valorActual.precio;
            },0)
        },

        aumentoDeBici: function(aumento) {
            return this.bicicletas.map(bici => {
                return {...bici, precio: bici.precio + (bici.precio * aumento / 100)
                };
            });
        },

        biciPorRodado : function (nroRodado){
            return this.bicicletas.filter(bici => bici.rodado === nroRodado) 
        },

        listarTodasLasBicis : function () {
            for (const bicicleta of this.bicicletas) { 
            console.log (`ID: ${bicicleta.id}, Marca: ${bicicleta.marca}, Modelo: ${bicicleta.modelo}, Precio: ${bicicleta.precio}, Vendida: ${bicicleta.vendida}`); 
            }

        }

        
    };




// console.log(dhBici.buscarBici(5));

// console.log(dhBici.venderBici(15));

// console.log (dhBici.biciParaLaVenta());

// console.log (dhBici.totalDeVentas());

// console.log (dhBici.aumentoDeBici(10));

// console.log (dhBici.biciPorRodado(26));

// console.log (dhBici.listarTodasLasBicis());