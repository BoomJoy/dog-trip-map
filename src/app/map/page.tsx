import Link from 'next/link';
import { MapCanvas } from '@/components/MapCanvas';
import { PlaceList } from '@/components/PlaceList';
import { filterPlaces } from '@/lib/placeService';
import type { SearchFilters } from '@/lib/types';

interface MapPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function toSingle(value: string | string[] | undefined, fallback = ''): string {
  return Array.isArray(value) ? value[0] ?? fallback : value ?? fallback;
}

export default async function MapPage({ searchParams }: MapPageProps) {
  const params = await searchParams;

  const filters: SearchFilters = {
    keyword: toSingle(params.keyword),
    maxDriveMinutes: Number(toSingle(params.maxDriveMinutes, '180')) || 180,
    region: (toSingle(params.region, '全部') as SearchFilters['region'])
  };

  const places = filterPlaces(filters);

  return (
    <main>
      <h1 style={{ marginBottom: 8 }}>地点地图页</h1>
      <p style={{ color: '#4b5563', marginTop: 0 }}>共找到 {places.length} 个地点。</p>
      <MapCanvas places={places} />
      <section style={{ marginTop: 16 }}>
        <PlaceList places={places} />
      </section>
      <p style={{ marginTop: 18 }}>
        <Link href="/">返回筛选页</Link>
      </p>
    </main>
  );
}
