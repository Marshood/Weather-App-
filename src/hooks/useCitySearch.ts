 
 
 import useWeatherStore from '../store/store';
import { useCitySearchQuery } from './useCitySearchQuery';
 
export const useCitySearch = () => {
  const query = useWeatherStore((state) => state.query);
  return useCitySearchQuery(query);
};
