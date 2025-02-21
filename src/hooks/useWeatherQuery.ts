// api.ts
import { useQuery } from '@tanstack/react-query';

async function fetchWeather(lat?: string, lon?: string) {
  if (!lat || !lon) return null
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  if (!res.ok) {
    throw new Error('Error fetching weather');
  }
  return res.json();
}

export function useWeatherQuery(lat?: string, lon?: string) {
  return useQuery({
    queryKey: ['weather', {lat,lon}],
    queryFn: () => fetchWeather(lat,lon),
    enabled: !!lat || !!lon
  });
}
