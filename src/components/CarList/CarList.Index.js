import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard.Index";
import "./carList.scss";

import { selectOptions } from "./constants";

class CarList extends PureComponent {
  componentDidMount() {
    window.addEventListener("scroll", this.onScrollEvent);
    this.loadCars();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollEvent);
  }

  onScrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.loadCars();
    }
  };

  loadCars = () => {
    const { error, isLoading, hasMore, startIndex, endIndex } = this.props;
    if (error || isLoading || !hasMore) return;
    this.props.onGetCarsDetail(startIndex, endIndex);
  };

  renderCars = cars => {
    if (cars && cars.length > 0) {
      return cars.map(car => {
        return <CarCard {...{ car }} key={car.id} />;
      });
    } else {
      return <div>unavailable car data....</div>;
    }
  };

  renderOptions = options => {
    if (options.length > 0) {
      return options.map((val, index) => {
        return (
          <option key={index} value={val}>
            {val}
          </option>
        );
      });
    }
  };

  handleSort = e => {
    const option = e.target.value;
    this.props.onSortCars(option);
  };

  displayMsg = hasMore => {
    if (!hasMore) {
      return (
        <div className="container--footer">
          <h2 className="container--footer__self">no more data....</h2>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="container--header">
            <div className="container--header__text-select">
              <span>Sort Method :-</span>
              <select onChange={this.handleSort}>
                {this.renderOptions(selectOptions)}
              </select>
            </div>
          </div>
          <div className="container--main">
            {this.renderCars(this.props.cars)}
          </div>
          {this.displayMsg(this.props.hasMore)}
        </div>
      </>
    );
  }
}

CarList.propTypes = {
  cars: PropTypes.array
};

export default CarList;
