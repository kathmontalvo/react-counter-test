import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle = 'Soy un subtitle' }) => {

  
  return (
    <div>
      <h1>{ saludo }!!</h1>
      <p>{ subtitle }</p>
      {/* <pre> {JSON.stringify(obj, null, 3)} </pre> */}
    </div>
  )
}

// PROPTYPES
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitle: 'Soy un subtitle'
}

export default PrimeraApp;