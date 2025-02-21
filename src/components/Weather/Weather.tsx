import React, { useEffect, useState } from "react";
import { WeatherContainer, CityName, WeatherInfo, ErrorMessage, FavoriteButton } from "./style";
import useWeatherStore from "../../store/store";
import { useWeather } from "../../hooks/useWeather";
import Spinner from "../Spinner/Spinner";
import { NoResultsFound } from "../Results/style";
import { City } from "../../types/types";

const Weather = () => {
  const selectedCity = useWeatherStore((state) => state.selectedCity);
  const { data, isLoading, error } = useWeather();
  const [favorites, setFavorites] = useState<Partial<City>[]>([])
  const setFavoritesState = useWeatherStore((state) => state.setFavorites);

  const temperature = data?.current_weather?.temperature;
  const windspeed = data?.current_weather?.windspeed;

  const temperatureUnits = data?.current_weather_units?.temperature;
  const windspeedUnits = data?.current_weather_units?.temperature;
  

  const isFavorite =
  selectedCity && favorites?.some((fav) => fav.place_id === selectedCity.place_id);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error("Error parsing favorites from localStorage", e);
      }
    }
  }, []);

  const handleFavoriteToggle = () => {
    if (!selectedCity) return;
    let updatedFavorites: any[];
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.place_id !== selectedCity.place_id);
    } else {
      updatedFavorites = [...favorites, {lat:selectedCity.lat,lon:selectedCity.lon , display_name : selectedCity?.display_name , place_id: selectedCity.place_id}];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoritesState(updatedFavorites);
  };

  return (
    <>
      <WeatherContainer>
        <CityName>{selectedCity?.name ?? selectedCity?.display_name}</CityName>

  
        {isLoading ? (
          <Spinner />
        ) : (selectedCity ?
          <>
            {error && <ErrorMessage>Error: {error?.message}</ErrorMessage>}
            {selectedCity && (
        <FavoriteButton onClick={handleFavoriteToggle}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </FavoriteButton>
      )}
            {data && temperature && temperatureUnits ? (
              <WeatherInfo>
                Temperature: {`${temperature}  ${temperatureUnits}`}
              </WeatherInfo>
            ) : (
              <NoResultsFound>
                Temperature data is currently unavailable
              </NoResultsFound>
            )}
            {data && windspeed && windspeedUnits ? (
              <WeatherInfo>
                Wind: {`${windspeed}  ${windspeedUnits}`}
              </WeatherInfo>
            ) : (
              <NoResultsFound>
                Wind data is currently unavailable
              </NoResultsFound>
            )}
          </> :
            <NoResultsFound>
            Select city to display temperature
          </NoResultsFound>
        )}
      </WeatherContainer>
    </>
  );
};

export default Weather;
