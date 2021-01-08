import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-templat-string.test.js', () => {
    
    test('getSaludo debe de retornar hola y el nombre', () => {
        
        const nombre = 'Alex';

        const saludo = getSaludo( nombre );
    
        expect(saludo).toBe( 'Hola '+ nombre );
        
    })
    
    test('getSaludo debe de retornar Hola Carlos si no hay nombre', () => {
        
        const saludo = getSaludo();
    
        expect(saludo).toBe( 'Hola Carlos' );
        
    })
})

