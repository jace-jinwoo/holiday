import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getKeywordPage } from "@/data/keywords";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.keywords.map((keyword) => ({ category: category.slug, slug: keyword.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const category = getCategory(categorySlug);
  const keyword = getKeywordPage(categorySlug, slug);
  if (!category || !keyword) return {};
  return {
    title: `${keyword.title} | ${category.name} 정보`,
    description: keyword.description,
    keywords: keyword.keywords,
    alternates: { canonical: `/${category.slug}/${keyword.slug}` }
  };
}

export default async function KeywordPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const category = getCategory(categorySlug);
  const keyword = getKeywordPage(categorySlug, slug);
  if (!category || !keyword) notFound();

  return (
    <main className="container">
      <nav><Link href="/">홈</Link> / <Link href={`/${category.slug}`}>{category.name}</Link></nav>
      <h1>{keyword.title}</h1>
      <p className="lead">{keyword.description}</p>
      <article>
        {keyword.content.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
      </article>
      <section className="keywords">
        <h2>관련 검색 키워드</h2>
        <ul>{keyword.keywords.map((tag) => (<li key={tag}>#{tag}</li>))}</ul>
      </section>
      <section className="related">
        <h2>함께 보면 좋은 정보</h2>
        <ul>
          {category.keywords.filter((item) => item.slug !== keyword.slug).map((item) => (
            <li key={item.slug}><Link href={`/${category.slug}/${item.slug}`}>{item.title}</Link></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
