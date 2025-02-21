 
import React, { useCallback, useState } from "react";
import { SearchWrapper, Title, SearchButton } from "./style";
import useWeatherStore from "../../store/store";
import { useCitySearch } from "../../hooks/useCitySearch";

const Header: React.FC = () => {
   const setQuery = useWeatherStore((state) => state.setQuery);
  const [search, setSearch] = useState("");
   const { isLoading, isFetching } = useCitySearch();
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
   };

  const onSearchClick = useCallback(() => {
     if (search) {
      setQuery(search);
    }
  }, [search,setQuery]);

 

  return (
    <SearchWrapper>
      <Title>Select a city:</Title>
      <input
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={handleInputChange}
        disabled={isLoading || isFetching}
      />
      <SearchButton
      disabled={isLoading || isFetching}
        onClick={onSearchClick}
      >
        {(isLoading || isFetching )? "Loading" :"Search"   }
      </SearchButton>
       
    </SearchWrapper>
  );
};

export default Header;
