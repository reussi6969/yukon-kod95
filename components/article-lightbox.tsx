"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { openLeadModal } from "@/components/lead-modal"

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = "" }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 p-4" onClick={onClose}>
      <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40" onClick={onClose} aria-label="Закрыть">
        <X className="h-5 w-5" />
      </button>
      <img src={src} alt="Полный размер" className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
      <p className="absolute bottom-4 text-sm text-white/50">{"Нажмите в любом месте или Esc для закрытия"}</p>
    </div>
  )
}

export function ArticleBody({ html }: { html: string }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  useEffect(() => {
    const container = document.getElementById("article-body")
    if (!container) return
    const cleanups: Array<() => void> = []

    // Лайтбокс для изображений
    const imgs = container.querySelectorAll<HTMLImageElement>("img[data-zoomable]")
    imgs.forEach((img) => {
      img.style.cursor = "zoom-in"
      const handler = (e: MouseEvent) => { e.preventDefault(); e.stopPropagation(); setLightboxSrc(img.src) }
      img.addEventListener("click", handler)
      cleanups.push(() => img.removeEventListener("click", handler))
    })

    // Кнопки с data-lead-modal
    const modalBtns = container.querySelectorAll<HTMLElement>("[data-lead-modal]")
    modalBtns.forEach((btn) => {
      const type = btn.getAttribute("data-lead-modal")
      const handler = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        if (type === "contact") {
          openLeadModal("Все просто!")
        } else {
          openLeadModal("Получите консультацию")
        }
      }
      btn.addEventListener("click", handler)
      cleanups.push(() => btn.removeEventListener("click", handler))
    })

    return () => cleanups.forEach((fn) => fn())
  }, [html])

  return (
    <>
      <div id="article-body" className="mt-6" dangerouslySetInnerHTML={{ __html: html }} />
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
