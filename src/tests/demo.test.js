
describe('Pruebas en el archivo demo.test.js', () => {

  test('deben ser iguales los strings', () => {
    
    // 1. inicializacion
    const message = 'Hola chikis';
  
    // 2. estimulo
    const message2 = `Hola chikis`
  
    // 3. Observar el comportamiento
    expect(message).toBe(message2);
  
  })

})
