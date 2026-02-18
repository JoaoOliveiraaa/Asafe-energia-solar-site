import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Image
              src="/ASAFEBR.png"
              alt="ASAFE Energia Solar"
              width={200}
              height={120}
              className="h-auto w-auto py-2"
            />
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Transformando o futuro com energia solar. Solucoes completas em energia fotovoltaica
              para residencias, empresas e industrias.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Navegacao
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre Nos" },
                { href: "/servicos", label: "Servicos" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Servicos
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                "Energia Solar Residencial",
                "Energia Solar Comercial",
                "Energia Solar Industrial",
                "Manutencao Preventiva",
                "Projetos Sob Medida",
              ].map((service) => (
                <span
                  key={service}
                  className="text-sm text-secondary-foreground/70"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contato
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+5500000000000"
                className="flex items-start gap-3 text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                (00) 00000-0000
              </a>
              <a
                href="mailto:contato@asafeenergia.com.br"
                className="flex items-start gap-3 text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                contato@asafeenergia.com.br
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>Rua Exemplo, 123 - Centro, Cidade - Estado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} ASAFE Energia Solar. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-secondary-foreground/50 hover:text-accent transition-colors"
            >
              Politica de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-secondary-foreground/50 hover:text-accent transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
