import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const BASE = "https://www.yukod95.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const services = ["korotkiy-kurs", "chip-karta", "zamena-prav", "priglashenie-na-vizu", "karta-pobytu"]
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({ url: `${BASE}/services/${s}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${BASE}/knowledge`, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({ url: `${BASE}/knowledge/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${BASE}/documents`, changeFrequency: "yearly", priority: 0.3 },
  ]
}
