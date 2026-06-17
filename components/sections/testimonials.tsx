import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ElfsightGoogleReviews } from "@/components/elfsight-google-reviews"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Avaliacoes reais de clientes da ASAFE no Google.
          </p>
        </div>

        <ElfsightGoogleReviews />

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Link href="/depoimentos">
              Ver todos os depoimentos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
