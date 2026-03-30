export type Region = '上海' | '江苏' | '浙江';

export interface SearchFilters {
  keyword: string;
  maxDriveMinutes: number;
  region: '全部' | Region;
}

export interface DogFriendlyPlace {
  id: string;
  name: string;
  region: Region;
  city: string;
  driveMinutesFromShanghai: number;
  dogRules: string;
  tags: string[];
  lat: number;
  lng: number;
  summary: string;
}
