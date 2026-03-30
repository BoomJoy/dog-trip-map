import type { DogFriendlyPlace } from '@/lib/types';

export interface MapApiProvider {
  name: string;
  loadScript: () => Promise<void>;
  renderMarkers: (places: DogFriendlyPlace[]) => Promise<void>;
}

export const mockMapProvider: MapApiProvider = {
  name: 'mock-provider',
  async loadScript() {
    // TODO: 后续接入高德 / 百度 / 腾讯地图 JS SDK
  },
  async renderMarkers(places) {
    void places;
    // TODO: 后续根据 map SDK 的 marker API 渲染点位
  }
};
