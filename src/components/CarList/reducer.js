import { types, displayCars } from './constants';
import createReducer from "../../utils/createReducer";

const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
    cars: [],
    isLoading: false,
    errValue: '',
    error: false,
    hasMore: true,
    startIndex: 0,
    perRequest: 10,
    endIndex: 10
});

const loadCarsData = (state, { carsData }) => {
  const sIndex = state.endIndex;
  const eIndex = state.endIndex + state.perRequest;
  if ([...state.cars].length > displayCars) {
    return Immutable.merge(state, {hasMore: false});
  }
  return Immutable.merge (state, {cars: [...state.cars ,...carsData], startIndex: sIndex, endIndex: eIndex});;
}

const doSortCars = (state, { option }) => {
  const sortedCars = [...state.cars].sort((a, b) => {
    return (a[option] > b[option]) ? 1 : -1;
  });
  return Immutable.merge (state, {cars: sortedCars});
}

const handlers = {
  [types.LOAD_CARS_DATA]: loadCarsData,
  [types.SORT_CARS]: doSortCars
}

export default createReducer(initialState, handlers);