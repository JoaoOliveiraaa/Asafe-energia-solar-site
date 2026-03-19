import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | ASAFE Energia Solar",
  description:
    "Fique por dentro das novidades sobre energia solar, dicas de economia e sustentabilidade no blog da ASAFE Energia Solar.",
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Blog
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Noticias e artigos sobre energia solar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Dicas, novidades e conteudo educativo sobre energia solar, economia
            e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid gap-8 overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative h-64 overflow-hidden lg:h-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                Destaque
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-block w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                {featuredPost.category}
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime} de leitura
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ler artigo completo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} de leitura
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
