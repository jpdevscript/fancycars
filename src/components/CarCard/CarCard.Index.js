import React from 'react';
import PropTypes from 'prop-types';
import CarImage from './CarImage';
import CarDetails from './CarDetails';
import './carCard.scss';

function CarCard({ car }) {
  const {img, ...carProps} = car;
  return (
    <div className='carcard'>
      <CarImage {...{img}} />
      <CarDetails {...{carProps}} />
    </div>
  )
}

CarCard.propTypes = {
  car: PropTypes.object
}

export default CarCard;