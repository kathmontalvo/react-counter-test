import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', ()=> {

  test('getSaludo debe retornar Hola Boddy', () => {
    
    const name = 'Boddy';
    const greeting = getSaludo( name );

    expect(greeting).toBe('Hola ' + name);
  })

  test('getSaludo debe retornar Hola Carlos si no hay argumentos en el nombre', () => {
    const greeting = getSaludo();

    expect(greeting).toBe('Hola Carlos')
  })
  
})