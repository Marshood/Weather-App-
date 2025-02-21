import React from "react";
import { useCitySearch } from "../../hooks/useCitySearch";
import {
  ErrorMessage,
  ResultItem,
  ResultsContainer,
  ResultsList,
  NoResultsFound,
} from "./style";
import Spinner from "../Spinner/Spinner";
import useWeatherStore from "../../store/store";
import { City } from "../../types/types";

const Results = () => {
  const { data, isLoading, error } = useCitySearch();
  const setSelectedCity = useWeatherStore((state) => state.setSelectedCity);
  const selectedCity = useWeatherStore((state) => state.selectedCity);
  const query = useWeatherStore((state) => state.query);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };
  return (
    <ResultsContainer>
      <h2>Results</h2>
      {isLoading ? (
        <Spinner />
      ) : ( query ?
        <>
          {error && <ErrorMessage>Error: {error?.message}</ErrorMessage>}
          {data?.length ? (
            <ResultsList>
              {data.map((city: City) => (
                <ResultItem
                  key={city.place_id}
                  onClick={() => handleCityClick(city)}
                  isSelected={selectedCity?.place_id === city.place_id}
                >
                  {city.display_name}
                </ResultItem>
              ))}
            </ResultsList>
          ) : (
            <NoResultsFound>
              No results found, please try again later!
            </NoResultsFound>
          )}
        </> : <NoResultsFound>
              Search for a city
            </NoResultsFound>
      )}
    </ResultsContainer>
  );
};

export default Results;
