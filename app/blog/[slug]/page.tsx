import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: "Post nao encontrado" }
  }

  return {
    title: `${post.title} | ASAFE Energia Solar`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mx-auto max-w-4xl px-6 -mt-8">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </article>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl mb-4">
            Pronto para comecar sua jornada solar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma avaliacao gratuita e descubra quanto voce pode economizar com energia solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contato">Solicitar Orcamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="https://wa.me/5516996011587" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl mb-8 text-center">
              Artigos Relacionados
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full overflow-hidden rounded-xl bg-card shadow-md transition-all hover:shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        {relatedPost.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function formatContent(content: string): string {
  // Convert markdown-style content to HTML
  let html = content
    // Headers
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4">')
    // Line breaks
    .replace(/\n/g, '<br/>')
  
  // Wrap lists in ul tags
  html = html.replace(/(<li>.*<\/li>)+/g, '<ul class="list-disc pl-6 mb-4 space-y-2">$&</ul>')
  
  // Wrap in paragraph if not starting with a tag
  if (!html.startsWith('<')) {
    html = '<p class="mb-4">' + html + '</p>'
  }
  
  return html
}
