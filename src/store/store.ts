import { create } from 'zustand';
import { City } from '../types/types';

interface AppState {
  query: string;
  setQuery: (newQuery: string) => void;
  selectedCity?: City;
  favorites: Partial<City>[];
  setSelectedCity: (city: City) => void;
  setFavorites: (favorites: Partial<City>[]) => void;
}

const useWeatherStore = create<AppState>((set) => ({
  query: '',
  setQuery: (newQuery) => set({ query: newQuery }),
  selectedCity: undefined,
  setSelectedCity: (city) => set({ selectedCity: city }),
  favorites: [],
  setFavorites: (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    set({ favorites });
  }
  
}));

export default useWeatherStore;
 