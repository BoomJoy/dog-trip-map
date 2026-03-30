import Link from 'next/link';
import { SearchForm } from '@/components/SearchForm';

export default function Home() {
  return (
    <main>
      <h1 style={{ marginBottom: 8 }}>上海出发 · 狗狗友好出行地图</h1>
      <p style={{ color: '#4b5563', marginTop: 0 }}>
        搜索江浙沪 3 小时车程内可带狗狗去的地点（当前使用假数据）。
      </p>
      <SearchForm />
      <p style={{ marginTop: 16 }}>
        或直接查看 <Link href="/map">地图页</Link>
      </p>
    </main>
  );
}
