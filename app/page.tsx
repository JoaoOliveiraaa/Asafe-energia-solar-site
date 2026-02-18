import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { ServicesPreviewSection } from "@/components/sections/services-preview"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function Page() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
