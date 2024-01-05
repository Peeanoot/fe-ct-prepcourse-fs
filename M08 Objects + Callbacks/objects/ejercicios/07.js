// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: {
      propiedad4: 'Valor 3.4',
      propiedad5: 'Valor 3.5',
      propiedad6: {
        propiedad9: function() {
          return 'valor7';
        },
      },
    },
  };
module.exports = objetoAnidado;
