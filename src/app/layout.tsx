import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '狗狗江浙沪出行地图',
  description: '上海出发，搜索江浙沪 3 小时车程内狗狗可去地点'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
