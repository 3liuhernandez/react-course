const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const userState = ( nombre ) => {
    return [ nombre, () => { console.log('hola mundo') } ];
}

//const arr = userState( 'goku' );

const [ nombre, setNombre ] = userState('Goku');

console.log( nombre );
setNombre();