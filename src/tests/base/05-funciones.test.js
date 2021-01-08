import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas de 05-funciones ', () => {
    
    test('getUser Debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();

        expect( user ).toStrictEqual( userTest );
    })

    test('getUsuarioActivo Debe retornar un objeto ', () => {
        
        const nombre = 'Alex';

        const user = getUsuarioActivo( nombre );

        
        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre
        } );
    })
})

