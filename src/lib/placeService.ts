import { mockPlaces } from '@/data/mockPlaces';
import type { DogFriendlyPlace, SearchFilters } from '@/lib/types';

export function filterPlaces(filters: SearchFilters): DogFriendlyPlace[] {
  const keyword = filters.keyword.trim().toLowerCase();

  return mockPlaces.filter((place) => {
    const byRegion = filters.region === '全部' || place.region === filters.region;
    const byDrive = place.driveMinutesFromShanghai <= filters.maxDriveMinutes;
    const inText = [place.name, place.city, place.summary, place.tags.join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(keyword);

    return byRegion && byDrive && (keyword.length === 0 || inText);
  });
}
