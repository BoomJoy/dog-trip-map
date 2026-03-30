import type { DogFriendlyPlace } from '@/lib/types';

export function PlaceList({ places }: { places: DogFriendlyPlace[] }) {
  if (places.length === 0) {
    return <p className="card" style={{ padding: 16 }}>未找到符合条件的地点，请放宽筛选条件。</p>;
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {places.map((place) => (
        <article key={place.id} className="card" style={{ padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>{place.name}</h3>
          <p style={{ margin: '4px 0' }}>
            {place.region} · {place.city} · 约 {place.driveMinutesFromShanghai} 分钟车程
          </p>
          <p style={{ margin: '4px 0', color: '#4b5563' }}>{place.summary}</p>
          <p style={{ margin: '4px 0', color: '#4b5563' }}>宠物规则：{place.dogRules}</p>
          <small>标签：{place.tags.join(' / ')}</small>
        </article>
      ))}
    </div>
  );
}
