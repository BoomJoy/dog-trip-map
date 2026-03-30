import type { DogFriendlyPlace } from '@/lib/types';

export function MapCanvas({ places }: { places: DogFriendlyPlace[] }) {
  return (
    <section className="card map-panel">
      <h2 style={{ marginTop: 0 }}>地图预览（当前为假数据渲染）</h2>
      <p className="section-subtitle">后续可在这里对接真实地图 API。当前先用坐标列表模拟 Marker。</p>
      <ul className="marker-list">
        {places.map((place) => (
          <li key={place.id}>
            <strong>{place.name}</strong>：({place.lat.toFixed(4)}, {place.lng.toFixed(4)})
          </li>
        ))}
      </ul>
    </section>
  );
}
