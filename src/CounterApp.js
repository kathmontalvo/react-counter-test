import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

  const [counter, setCounter ] = useState(value)

  const handleAdd = (e) => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  }

  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      {/* paso como referencia mi funcion */}
      <button onClick={ handleAdd } > +1 </button> 
      <button onClick={ handleReset } > Reset </button> 
      <button onClick={ handleSubstract } > -1 </button> 
    </>
  )
}

CounterApp.propTypes = {
  value : PropTypes.number
}


export default CounterApp;
