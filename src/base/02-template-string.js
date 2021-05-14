

const nombre = 'ELiu';
const apellido = 'hernandez';

const nombreCompleto = `${ nombre } ${ apellido }`;
console.log(nombreCompleto);

function saludo(nombre){
    return 'hola ' + nombre;
}

console.log(`Este es un texto: ${ saludo( nombre ) } `);