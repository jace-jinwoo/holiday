import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "시즌 키워드 정보 | 성탄절 · 연말 · 해돋이 · 노을",
  description: "크리스마스, 연말, 새해 해돋이, 노을 관련 시즌 정보를 한곳에서 확인하세요."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
