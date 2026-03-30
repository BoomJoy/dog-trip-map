import { NextRequest, NextResponse } from 'next/server';
import { filterPlaces } from '@/lib/placeService';
import type { SearchFilters } from '@/lib/types';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const filters: SearchFilters = {
    keyword: params.get('keyword') ?? '',
    maxDriveMinutes: Number(params.get('maxDriveMinutes') ?? 180),
    region: (params.get('region') as SearchFilters['region']) ?? '全部'
  };

  const data = filterPlaces(filters);

  return NextResponse.json({
    filters,
    count: data.length,
    places: data,
    meta: {
      source: 'mock',
      updatedAt: new Date().toISOString()
    }
  });
}
