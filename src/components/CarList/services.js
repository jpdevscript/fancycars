import axios from 'axios';

export const fetchCarsData = async (startIndex, endIndex) => {
  const hostName = window.location.hostname;
  const port = window.location.port;

  try {
    const response = await axios.get(`http://${hostName}:${port}/mocks/cars.json`);
    if (response.data.length > 0) {
      return response.data.slice(startIndex,endIndex);
    }
  } catch (error) {
    console.log('error in fetching data...', error);
    return error;
  }
}