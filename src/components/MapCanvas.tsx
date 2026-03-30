import type { DogFriendlyPlace } from '@/lib/types';

export function MapCanvas({ places }: { places: DogFriendlyPlace[] }) {
  return (
    <section className="card" style={{ padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>地图预览（当前为假数据渲染）</h2>
      <p style={{ color: '#4b5563' }}>
        后续可在这里对接真实地图 API。当前先用坐标列表模拟 Marker。
      </p>
      <ul style={{ paddingLeft: 16, marginBottom: 0 }}>
        {places.map((place) => (
          <li key={place.id} style={{ marginBottom: 6 }}>
            {place.name}：({place.lat.toFixed(4)}, {place.lng.toFixed(4)})
          </li>
        ))}
      </ul>
    </section>
  );
}
