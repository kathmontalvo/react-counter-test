import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas en <CounterApp />', () => {
  
  let wrapper = shallow( <CounterApp /> ); // se duplica para que al momento de escribir tests, identifique sus propiedades

  beforeEach(()=> {

    wrapper = shallow( <CounterApp /> );

  })

  test('debe renderizar correctamente con su valor por default', () => {
    
    expect(wrapper).toMatchSnapshot();

  })
  
  test('debe mostrar el valor de 100', () => {
    const value = 100
    const wrapper = shallow( <CounterApp value = { value } /> );

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe(`${value}`);

  });

  test('debe incrementar con el boton de +1', () => {
    
    const btn1 = wrapper.find('button').at(0);
    btn1.simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
    
  });
  
  test('debe decrementar con el boton de -1', () => {
    
    const btn1 = wrapper.find('button').at(2);
    btn1.simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
    
  });

  test('debe colocar el valor por defecto con reset', () => {
    
    const value = 122
    const wrapper = shallow( <CounterApp value = { value } /> );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');

    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe(`${value}`);
  })
  
  
})
