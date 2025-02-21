// api.ts
import { useQuery } from '@tanstack/react-query';

async function fetchCities(query: string) {
  if (!query) return [];
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`
  );
  if (!res.ok) {
    throw new Error('Error fetching cities');
  }
  return res.json();
}

export function useCitySearchQuery(query: string) {
  return useQuery({
    queryKey: ['citySearch', query],
    queryFn: () => fetchCities(query),
    enabled: !!query
  });
}
