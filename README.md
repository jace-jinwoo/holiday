# Seasonal Keywords Site

Next.js(App Router) 기반 시즌성 정보 사이트입니다.

- 카테고리: 성탄절, 연말, 해돋이, 노을
- 카테고리별 정보 페이지: 각 22개, 총 88개
- 페이지: 카테고리 허브 4개 + 세부 정보 88개 + 홈 1개
- SEO: 메타 타이틀/설명/키워드, canonical, sitemap 자동 생성

## 실행

```bash
npm install
npm run dev
```

## 배포

`.env.local`에 실제 도메인을 설정하세요.

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 콘텐츠 관리

`data/keywords.ts`에서 페이지 제목, 설명, 타깃 키워드, 본문을 수정하면 라우트와 사이트맵이 자동 반영됩니다.
