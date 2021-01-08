describe('Pruebas en el archivo', () => {
    
    test('deben de ser iguales los dos strings ', () => {
        
        const message = 'Hola Mundo';
    
        const message2 = `Hola Mundo`;
    
        expect(message).toBe(message2); // ===
    })
    
})


