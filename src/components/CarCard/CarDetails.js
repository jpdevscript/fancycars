import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function CarDetails({ carProps }) {
  const notAtDealership = carProps && carProps.available !== "In Dealership";
  const btnClass = notAtDealership ? "btn__disable" : "btn__active";
  const applyBtnClass = classNames("btn", btnClass);
  return (
    <div className="carcard--details">
      <div className="rows">
        <div className="row-details">
          <div className="row-details--name">Name: {carProps.name}</div>
          <div className="row-details--model">Model: {carProps.model}</div>
          <div className="row-details--year">
            {" "}
            Year: {`${carProps.year} (${carProps.available})`}
          </div>
        </div>
        <div className="row-btn">
          <button className={applyBtnClass} type="button">
            Buy Car
          </button>
        </div>
      </div>
    </div>
  );
}

CarDetails.propTypes = {
  carProps: PropTypes.object
};

export default CarDetails;
