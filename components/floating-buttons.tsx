"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, X, MessageCircle } from "lucide-react"
import { openLeadModal } from "@/components/lead-modal"

const PHONE = "+48452650325"
const PHONE_DISPLAY = "+48 452 650 325"
const TELEGRAM = "https://t.me/MarynaKod95"
const WHATSAPP = "https://wa.me/48452650325"
const VIBER = "viber://chat?number=%2B48452650325"

export function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chatOpen) return
    const handler = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setChatOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [chatOpen])

  return (
    <>
      {/* Анимации — дышат по очереди: телефон вверх, чат вниз и наоборот */}
      <style>{`
        @keyframes breathe-up {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
        @keyframes breathe-down {
          0%, 100% { transform: scale(1.12); }
          50% { transform: scale(1); }
        }
        .btn-breathe-up {
          animation: breathe-up 2.2s ease-in-out infinite;
        }
        .btn-breathe-down {
          animation: breathe-down 2.2s ease-in-out infinite;
        }
        /* При hover — останавливаем анимацию, показываем scale */
        .btn-breathe-up:hover,
        .btn-breathe-down:hover {
          animation: none;
          transform: scale(1.15);
        }
      `}</style>

      <div className="fixed bottom-6 right-4 z-[900] flex w-fit flex-col items-end gap-3 sm:right-6">

        {/* Карточка мессенджеров */}
        {chatOpen && (
          <div ref={cardRef} className="mb-1">
            <div className="rounded-2xl bg-white p-5 shadow-2xl border border-border w-60">
              <div className="flex items-start justify-between mb-4 gap-2">
                <p className="font-serif text-base font-bold text-foreground leading-snug">
                  {"Есть вопросы?"}
                  <br />
                  <span className="text-accent">{"Свяжитесь с нами!"}</span>
                </p>
                <button
                  onClick={() => setChatOpen(false)}
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#2AABEE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                  {"Telegram"}
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  {"WhatsApp"}
                </a>
                <a href={VIBER}
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#7360F2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.5 2 2 6.2 2 11.5c0 2.9 1.4 5.5 3.6 7.2V22l3.6-1.8c.9.2 1.8.3 2.8.3 5.5 0 10-4.3 10-9.5S17.5 2 12 2z" />
                  </svg>
                  {"Viber"}
                </a>
                <a href={`tel:${PHONE}`}
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
                  <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Плавающие кнопки — дышат по очереди */}
        <div className="flex flex-col items-center gap-2.5">
          <a href={`tel:${PHONE}`} aria-label="Позвонить"
            className="btn-breathe-up flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-white shadow-lg transition-shadow hover:shadow-xl">
            <Phone className="h-5 w-5" strokeWidth={2} />
          </a>

          <button onClick={() => setChatOpen((p) => !p)} aria-label="Открыть мессенджеры"
            className="btn-breathe-down flex h-[52px] w-[52px] items-center justify-center rounded-full bg-foreground text-white shadow-lg transition-shadow hover:shadow-xl">
            {chatOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <MessageCircle className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>
    </>
  )
}
