import React from "react";
import PropTypes from "prop-types";

function CarImage({ img }) {
  return (
    <div className="carcard--img">
      <img
        className="carcard--img__layout"
        src={`../assets/images/${img}`}
        alt={`alt-${img}`}
      />
    </div>
  );
}

CarImage.propTypes = {
  img: PropTypes.string
};

export default CarImage;
