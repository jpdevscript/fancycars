import { types } from './constants';

export const getCarsDetail = (startIndex, endIndex) => {
  return {
    type: types.GET_CARS_DETAILS,
    startIndex,
    endIndex
  }
}

export const sortCars = (option) => {
  return {
    type: types.SORT_CARS,
    option
  }
}