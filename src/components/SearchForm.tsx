'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';

export function SearchForm() {
  const router = useRouter();
  const query = useSearchParams();

  const defaults = useMemo(
    () => ({
      keyword: query.get('keyword') ?? '',
      maxDriveMinutes: query.get('maxDriveMinutes') ?? '180',
      region: query.get('region') ?? '全部'
    }),
    [query]
  );

  const [keyword, setKeyword] = useState(defaults.keyword);
  const [maxDriveMinutes, setMaxDriveMinutes] = useState(defaults.maxDriveMinutes);
  const [region, setRegion] = useState(defaults.region);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      keyword,
      maxDriveMinutes,
      region
    });

    router.push(`/map?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} className="card search-card">
      <label className="form-label">
        关键词
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="如：露营、草地、杭州"
          className="form-input"
        />
      </label>

      <label className="form-label">
        最大驾车时长（分钟）
        <input
          value={maxDriveMinutes}
          onChange={(event) => setMaxDriveMinutes(event.target.value)}
          type="number"
          min={30}
          max={240}
          step={15}
          className="form-input"
        />
      </label>

      <label className="form-label">
        区域
        <select value={region} onChange={(event) => setRegion(event.target.value)} className="form-input">
          <option value="全部">全部</option>
          <option value="上海">上海</option>
          <option value="江苏">江苏</option>
          <option value="浙江">浙江</option>
        </select>
      </label>

      <button type="submit" className="primary-btn">
        搜索狗狗可去地点
      </button>
    </form>
  );
}
