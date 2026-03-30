import Link from 'next/link';
import { MapCanvas } from '@/components/MapCanvas';
import { PlaceList } from '@/components/PlaceList';
import { filterPlaces } from '@/lib/placeService';
import type { SearchFilters } from '@/lib/types';

interface MapPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

function toSingle(value: string | string[] | undefined, fallback = ''): string {
  return Array.isArray(value) ? value[0] ?? fallback : value ?? fallback;
}

export default function MapPage({ searchParams = {} }: MapPageProps) {
  const filters: SearchFilters = {
    keyword: toSingle(searchParams.keyword),
    maxDriveMinutes: Number(toSingle(searchParams.maxDriveMinutes, '180')) || 180,
    region: (toSingle(searchParams.region, '全部') as SearchFilters['region'])
  };

  const places = filterPlaces(filters);

  return (
    <main>
      <section className="top-nav">
        <div className="brand">DogTrip Map</div>
        <Link href="/" className="text-link">
          返回筛选页
        </Link>
      </section>

      <section className="card map-header">
        <h1 style={{ marginBottom: 8 }}>地点地图页</h1>
        <p className="section-subtitle">共找到 {places.length} 个地点，可继续调整筛选条件。</p>
      </section>

      <MapCanvas places={places} />
      <section style={{ marginTop: 16 }}>
        <PlaceList places={places} />
      </section>
    </main>
  );
}
