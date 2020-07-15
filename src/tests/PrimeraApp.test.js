import React from 'react';
// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";

describe('<Pruebas en PrimeraApp />', () => {
  
  // test('deberia mostrar el msj Hola, soy Boddy perrito ', () => {
  //   const saludo = 'Hola, soy Boddy perrito';

  //   const { getByText } = render( <PrimeraApp saludo={saludo} /> );

  //   expect(getByText(saludo)).toBeInTheDocument();

  // })

  test('debe mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = 'Hola, soy Boddy perrito';
    const wrapper = shallow(<PrimeraApp saludo= {saludo} />);
    
    //esperaria q se renderice de la manera correcta
    expect(wrapper).toMatchSnapshot();

  })

  test('debe mostrar el subtitulo q se envia por props', () => {

    const saludo = 'Hola, soy Boddy perrito';
    const subtitle = 'Un perrito muy bonito';
    
    const wrapper = shallow(
      <PrimeraApp 
        saludo= {saludo} 
        subtitle = {subtitle}
        />
    );
    // lo siguiente funciona como un querySelector
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitle);
    
    
  })
  
  
  
})
