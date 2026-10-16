import Link from "next/link";
import { categories } from "@/data/keywords";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>시즌 키워드 정보</h1>
        <p>성탄절 · 연말 · 해돋이 · 노을, 매년 반복 검색되는 시즌 정보를 카테고리별로 정리했습니다.</p>
      </header>
      <section className="grid">
        {categories.map((category) => (
          <article className="card" key={category.slug}>
            <h3>{category.emoji} {category.name}</h3>
            <p>{category.description}</p>
            <Link href={`/${category.slug}`}>{category.name} 정보 보기 →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
