import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles, getArticleBySlug } from "@/lib/articles"
import { ArrowLeft } from "lucide-react"
import { ArticleBody } from "@/components/article-lightbox"
import { FloatingButtons } from "@/components/floating-buttons"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Yukon KOD 95`,
    description: article.excerpt,
  }
}

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
}

function renderMarkdown(content: string): string {
  const lines = content.trim().split("\n")
  const blocks: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trimEnd()
    if (line === "") { i++; continue }

    if (line.startsWith("## ")) {
      blocks.push(`<h2 class="font-serif text-3xl font-bold text-foreground mt-10 mb-4 sm:text-4xl">${applyInline(line.slice(3))}</h2>`)
      i++; continue
    }
    if (line.startsWith("### ")) {
      blocks.push(`<h3 class="font-serif text-2xl font-bold text-foreground mt-7 mb-3">${applyInline(line.slice(4))}</h3>`)
      i++; continue
    }
    if (line === "---") {
      blocks.push(`<hr class="my-10 border-border" />`)
      i++; continue
    }
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].trimEnd().startsWith("- ")) {
        items.push(`<li class="flex items-start gap-3"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"></span><span>${applyInline(lines[i].trimEnd().slice(2))}</span></li>`)
        i++
      }
      blocks.push(`<ul class="flex flex-col gap-2 my-4">${items.join("")}</ul>`)
      continue
    }
    if (line.startsWith("✅") || line.startsWith("❌")) {
      const items: string[] = []
      while (i < lines.length && (lines[i].trimEnd().startsWith("✅") || lines[i].trimEnd().startsWith("❌"))) {
        const raw = lines[i].trimEnd()
        const isOk = raw.startsWith("✅")
        const text = applyInline(raw.replace(/^[✅❌]\s*/, ""))
        const icon = isOk ? `<span class="shrink-0 text-lg leading-tight">✅</span>` : `<span class="shrink-0 text-lg leading-tight">❌</span>`
        items.push(`<li class="flex items-start gap-3">${icon}<span class="text-muted-foreground">${text}</span></li>`)
        i++
      }
      blocks.push(`<ul class="flex flex-col gap-2 my-4">${items.join("")}</ul>`)
      continue
    }
    if (line.startsWith("<")) {
      let html = ""
      while (i < lines.length && lines[i].trimEnd() !== "") {
        html += lines[i] + "\n"
        i++
      }
      html = html.replace(/<img /g, '<img data-zoomable="true" ')
      // Кнопки с data-lead-modal в HTML из articles.ts
      html = html.replace(
        /<button data-lead-modal="enroll"([^>]*)>/g,
        '<button data-lead-modal="enroll"$1>'
      )
      blocks.push(html.trim())
      continue
    }
    if (line.startsWith("|")) {
      const rows: string[] = []
      let isHeader = true
      while (i < lines.length && lines[i].trimEnd().startsWith("|")) {
        const row = lines[i].trimEnd()
        if (/^\|[-\s|]+\|$/.test(row)) { i++; isHeader = false; continue }
        const cells = row.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
        if (isHeader) {
          rows.push(`<tr>${cells.map(c => `<th class="py-3 px-4 text-sm font-semibold text-foreground bg-secondary text-left">${c.trim()}</th>`).join("")}</tr>`)
          isHeader = false
        } else {
          rows.push(`<tr class="border-t border-border">${cells.map(c => `<td class="py-3 px-4 text-sm text-muted-foreground">${c.trim()}</td>`).join("")}</tr>`)
        }
        i++
      }
      blocks.push(`<div class="my-6 overflow-x-auto rounded-xl border border-border"><table class="w-full">${rows.join("")}</table></div>`)
      continue
    }
    {
      const paragraphLines: string[] = []
      while (i < lines.length && lines[i].trimEnd() !== "") {
        const cur = lines[i].trimEnd()
        if (paragraphLines.length > 0 && /^\*\*(Схема|Шаг)\s/.test(cur)) break
        paragraphLines.push(cur)
        i++
        if (i < lines.length && /^\*\*(Схема|Шаг)\s/.test(lines[i].trimEnd())) break
      }
      blocks.push(`<p class="text-base leading-relaxed text-muted-foreground">${applyInline(paragraphLines.join(" "))}</p>`)
    }
  }
  return blocks.join("\n")
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  let htmlContent = renderMarkdown(article.content)
  htmlContent = htmlContent.replace(/<img /g, '<img data-zoomable="true" ')

  return (
    <>
      <Header />
      <main>
        <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/65" />
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-3xl font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              {article.title}
            </h1>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <Link href="/knowledge" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80">
              <ArrowLeft className="h-4 w-4" />
              {"Назад к базе знаний"}
            </Link>

            {/* ArticleBody перехватывает data-lead-modal кнопки */}
            <ArticleBody html={htmlContent} />

            {/* CTA блок — LeadButton клиентский компонент, безопасен в серверной странице */}
            <div className="mt-12 rounded-2xl bg-foreground p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                {"Нужна помощь с оформлением?"}
              </h3>
              <p className="mt-3 text-primary-foreground/70">
                {"Мы поможем пройти весь путь — от медосмотра до получения КОД 95"}
              </p>
              <LeadButton
                title="Все просто!"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
              >
                {"Связаться с нами"}
              </LeadButton>
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
