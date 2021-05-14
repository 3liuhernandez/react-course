//import { heroes } from './data/heroes';

//import { heroes } from './data/heroes';

//import  heroes, { owners } from '../data/heroes';
import  heroes from '../data/heroes';

 //console.log( owners );
/* const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => {
        if ( heroe.id === id ) {
            return true;
        }
        else {
            return false;
        }
    } );
} */

/* const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id);
} */

const getHeroeById = ( id ) => heroes.find( ( heroe ) => heroe.id === id);

//console.log( getHeroeById( 2 ) );

// filter
const getHeroeByOwner = ( owner ) => heroes.filter(  ( heroe ) => heroe.owner.toLocaleLowerCase() === owner.toLocaleLowerCase() );

//console.log( getHeroeByOwner( 'marvel' ) );

export {
    getHeroeById,
    getHeroeByOwner
}