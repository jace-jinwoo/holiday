import Link from "next/link";

type Props = { href: string; title: string; description: string; keywords: string[] };

export default function KeywordCard({ href, title, description, keywords }: Props) {
  return (
    <article className="card">
      <h3><Link href={href}>{title}</Link></h3>
      <p>{description}</p>
      <div className="tags">
        {keywords.slice(0, 4).map((keyword) => (
          <span className="tag" key={keyword}>#{keyword}</span>
        ))}
      </div>
    </article>
  );
}
