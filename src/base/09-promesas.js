
import { getHeroeById } from './base/08-imp-exp'

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {

        const heroe = getHeroeById(2);
        resolve( heroe );

        reject( 'No se pudo conseguir el heroe' );

    }, 2000);
} );

promesa.then( (heroe) => {
    console.log('heroe:', heroe);
})
.catch( err => console.warn( err ) ); */

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById( id );
            if( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se pudo conseguir el heroe' );
            }

        }, 1000);
    } );
}

getHeroeByIdAsync( 1 )
    .then( console.log )
    .catch( console.warn )