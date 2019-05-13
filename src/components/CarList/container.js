import { connect } from 'react-redux';
import CarList from './CarList.Index.js';
import { getCarsDetail, sortCars } from "./actions";

const mapStateToProps = state => {
  return {
    cars: state.carData.cars,
    isLoading: state.carData.isLoading,
    hasMore: state.carData.hasMore,
    error: state.carData.error,
    startIndex: state.carData.startIndex,
    endIndex: state.carData.endIndex
  }
}
const mapDispatchToProps = dispatch => ({
    onGetCarsDetail: (...args) => dispatch(getCarsDetail(...args)),
    onSortCars: (option) => dispatch(sortCars(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(CarList);