


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        calle: 12,
        av: 15,
    }
};

const persona2 = { ...persona }
persona2.nombre = 'Marly';

console.log( persona );
console.log( persona2 );