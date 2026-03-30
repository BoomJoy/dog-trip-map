import Link from 'next/link';
import { SearchForm } from '@/components/SearchForm';

const featuredPlaces = [
  {
    name: '杭州 · 西溪湿地',
    drive: '约 2.5 小时',
    vibe: '水网步道 · 拍照友好 · 轻松遛狗'
  },
  {
    name: '苏州 · 太湖沿线',
    drive: '约 2 小时',
    vibe: '湖岸绿道 · 观景野餐 · 周末短途'
  },
  {
    name: '莫干山 · 山脚民宿区',
    drive: '约 2.8 小时',
    vibe: '轻徒步 · 山景草地 · 宠物友好住宿'
  },
  {
    name: '安吉 · 竹海周边',
    drive: '约 3 小时',
    vibe: '自然氧吧 · 林间散步 · 轻户外'
  }
];

const highlights = ['精选狗狗友好地', '覆盖江浙沪', '3 小时短途优先'];

export default function Home() {
  return (
    <main>
      <section className="top-nav">
        <div className="brand">DogTrip Map</div>
        <Link href="/map" className="text-link">
          地图总览
        </Link>
      </section>

      <section className="hero">
        <span className="hero-badge">🐶 宠物友好 · 周末出游 · 轻户外</span>
        <h1 className="section-title" style={{ marginTop: 16 }}>
          上海出发，找到 3 小时车程内适合带狗狗去的地方
        </h1>
        <p className="section-subtitle">
          用关键词、时长和区域快速筛选周边目的地，先用假数据跑通流程，后续可无缝接入真实地图 API。
        </p>

        <div className="chip-row">
          {highlights.map((item) => (
            <span key={item} className="meta-chip">
              {item}
            </span>
          ))}
        </div>

        <SearchForm />
      </section>

      <section style={{ marginTop: 26 }}>
        <div className="section-head-row">
          <div>
            <h2 className="section-title" style={{ fontSize: 22, marginBottom: 6 }}>
              热门推荐地点
            </h2>
            <p className="section-subtitle">先从这些典型周末目的地开始探索</p>
          </div>
          <Link href="/map" className="text-link">
            查看完整地图 →
          </Link>
        </div>

        <div className="recommend-grid">
          {featuredPlaces.map((place) => (
            <article key={place.name} className="recommend-card">
              <h3>{place.name}</h3>
              <p>{place.drive}</p>
              <p>{place.vibe}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
