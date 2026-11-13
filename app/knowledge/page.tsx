import Link from "next/link"
import { Header } from "@/components/header"
import { FloatingButtons } from "@/components/floating-buttons"
import { LeadModal } from "@/components/lead-modal"
import { Footer } from "@/components/footer"
import { articles } from "@/lib/articles"

export const metadata = {
  title: "База знаний — Yukon KOD 95",
  description: "Полезные статьи о КОД 95, работе в Европе и оформлении документов для водителей.",
}

function renderTitle(title: string) {
  const parts = title.split(/(95)/g)
  return (
    <>
      {parts.map((part, i) =>
        part === "95" ? (
          <span key={i} className="font-sans font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-foreground py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-serif text-5xl font-bold text-primary-foreground">
              {"База знаний"}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 sm:text-lg">
              {"Полезные статьи для водителей — без воды, только польза"}
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/knowledge/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {renderTitle(article.title)}
                    </h2>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground sm:text-sm">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 text-base font-semibold text-accent sm:text-sm">
                      {"Читать →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <LeadModal />
    </>
  )
}
