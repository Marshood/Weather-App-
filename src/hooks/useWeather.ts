import useWeatherStore from "../store/store";
import { useWeatherQuery } from "./useWeatherQuery";

export const useWeather = () => {
  const selectedCity = useWeatherStore((state) => state.selectedCity);
  return useWeatherQuery(selectedCity?.lat, selectedCity?.lon);
};
