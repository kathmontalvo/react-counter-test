import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async await', () => {
  
  test('debe retornar url de la img ', async () => {
    const url = await getImagen();
    console.log(url);
    
    expect(url.includes('https://media')).toBe(true);
    
  })
  
})
