import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Info } from "@/components/info"
import { Team } from "@/components/team"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CookieBanner } from "@/components/cookie-banner"
import { LeadModal } from "@/components/lead-modal"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Info />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
      <LeadModal />
    </>
  )
}
