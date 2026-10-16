import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/keywords";
import KeywordCard from "@/components/KeywordCard";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} 정보 | ${category.title}`,
    description: category.description,
    keywords: category.keywords.flatMap((keyword) => keyword.keywords)
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <main className="container">
      <header className="hero">
        <span>{category.emoji}</span>
        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <p className="season">검색 피크: {category.peakSeason}</p>
      </header>
      <section className="grid">
        {category.keywords.map((keyword) => (
          <KeywordCard key={keyword.slug} href={`/${category.slug}/${keyword.slug}`} title={keyword.title} description={keyword.description} keywords={keyword.keywords} />
        ))}
      </section>
      <nav className="other-categories">
        {categories.filter((item) => item.slug !== category.slug).map((item) => (
          <Link key={item.slug} href={`/${item.slug}`}>{item.emoji} {item.name}</Link>
        ))}
      </nav>
    </main>
  );
}
