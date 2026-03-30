# dog-trip-map

一个基于 **Next.js + TypeScript** 的网页项目模板，用于实现：

> 上海出发，搜索江浙沪 3 小时车程内狗狗可去地点。

当前版本先用假数据跑通核心流程：
- 首页筛选条件（关键词、最大驾车时长、区域）
- 地图页展示地点
- API 路由返回筛选结果

## 技术栈

- Next.js (App Router)
- TypeScript
- React

## 目录结构

```text
.
├─ public/
├─ scripts/
│  └─ update-places.ts          # 预留：定时更新数据脚本
├─ src/
│  ├─ app/
│  │  ├─ api/places/route.ts    # 预留：给前端/地图层的数据接口
│  │  ├─ map/page.tsx           # 地图页（当前为假数据地图预览）
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx               # 首页筛选
│  ├─ components/
│  │  ├─ MapCanvas.tsx
│  │  ├─ PlaceList.tsx
│  │  └─ SearchForm.tsx
│  ├─ data/
│  │  └─ mockPlaces.ts          # 假数据
│  └─ lib/
│     ├─ mapProvider.ts         # 预留：地图 SDK 抽象层
│     ├─ placeService.ts        # 过滤逻辑
│     └─ types.ts
├─ package.json
└─ tsconfig.json
```


## 根目录关键文件

本仓库已包含可直接运行 Next.js 项目的关键文件：

- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `next-env.d.ts`
- `src/`（App Router 页面与组件）

## 启动方式

> 首次运行需要安装依赖。

```bash
npm install
npm run dev
```

浏览器打开：

- http://localhost:3000

## 可用命令

```bash
npm run dev          # 本地开发
npm run build        # 生产构建
npm run start        # 启动生产服务
npm run lint         # ESLint
npm run typecheck    # TypeScript 类型检查
npm run update:places
```

## 后续接入真实地图 API 的建议

1. 在 `src/lib/mapProvider.ts` 实现具体地图 provider（如高德、百度、腾讯）。
2. 在 `src/components/MapCanvas.tsx` 中用 provider 渲染 marker。
3. 将 `src/data/mockPlaces.ts` 替换为数据库或远程 API 数据源。
4. 在 `scripts/update-places.ts` 中接入定时任务（如 GitHub Actions / Cron Job）更新数据。

## 维护建议（面向新手）

- 类型优先：新增字段先改 `src/lib/types.ts`。
- 业务逻辑集中：筛选逻辑统一在 `src/lib/placeService.ts`。
- 组件尽量小而清晰：页面只做组合，逻辑放在 `lib`。
- 先保证可运行，再逐步替换真实地图和数据源。


## 维护补充

- 当前仓库默认开发分支为 `work`，请在该分支继续迭代并发起 PR。
