"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie, Shield, BarChart2, Megaphone } from "lucide-react"
import { getConsent, setConsent, OPEN_SETTINGS_EVENT, type ConsentChoice } from "@/lib/consent"
import { loadMetaPixel } from "@/lib/meta-pixel"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Согласие уже есть — запускаем пиксель (если человек его разрешил)
    if (getConsent() === "accepted") loadMetaPixel()

    let timer: ReturnType<typeof setTimeout> | undefined
    if (!getConsent()) {
      // Небольшая задержка перед появлением
      timer = setTimeout(() => setVisible(true), 1200)
    }

    // Ссылка «Настройки cookie» в подвале снова открывает баннер
    const open = () => { setExpanded(true); setLeaving(false); setVisible(true) }
    window.addEventListener(OPEN_SETTINGS_EVENT, open)
    return () => { if (timer) clearTimeout(timer); window.removeEventListener(OPEN_SETTINGS_EVENT, open) }
  }, [])

  function dismiss(choice: ConsentChoice) {
    setLeaving(true)
    setTimeout(() => {
      setConsent(choice)
      if (choice === "accepted") loadMetaPixel()
      setVisible(false)
      setLeaving(false)
    }, 400)
  }

  if (!visible) return null

  return (
    <>
      {/* Затемнённый фон — лёгкий. Клик мимо баннера = отказ от необязательных cookie */}
      <div
        className={`fixed inset-0 z-[9990] bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-400 ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => dismiss("declined")}
      />

      {/* Баннер — снизу по центру */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className={`fixed bottom-4 left-1/2 z-[9991] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 transition-all duration-400 ease-out sm:bottom-6 ${
          leaving
            ? "translate-y-8 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl">

          {/* Верхняя полоска — акцентный цвет */}
          <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/70 to-accent/40" />

          <div className="p-6">
            {/* Заголовок */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Cookie className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 id="cookie-title" className="font-serif text-lg font-bold text-foreground">
                    {"Мы используем файлы cookie"}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {"Для работы сайта и рекламы"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => dismiss("declined")}
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Закрыть и отказаться от необязательных cookie"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Основной текст */}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Необходимые cookie нужны для работы сайта. С вашего согласия мы также используем Meta Pixel (Facebook), чтобы измерять эффективность рекламы. Согласие можно отозвать в любой момент по ссылке «Настройки cookie» внизу сайта."}
            </p>

            {/* Раскрывающиеся детали */}
            {expanded && (
              <div className="mt-4 rounded-xl bg-secondary p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{"Необходимые — всегда активны"}</p>
                      <p className="text-xs text-muted-foreground">{"Базовая работа сайта и запоминание вашего выбора в этом окне."}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{"Статистика — без cookie"}</p>
                      <p className="text-xs text-muted-foreground">{"Vercel Analytics считает посещения анонимно, не сохраняет файлы на вашем устройстве и не узнаёт вас."}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Megaphone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{"Маркетинговые — только с согласия"}</p>
                      <p className="text-xs text-muted-foreground">{"Meta Pixel (Meta Platforms Ireland Ltd.): cookie _fbp, данные о посещении передаются Meta для измерения и показа рекламы."}</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/documents#privacy"
                  className="mt-3 block text-xs text-accent underline-offset-2 hover:underline"
                >
                  {"Политика конфиденциальности →"}
                </Link>
              </div>
            )}

            {/* Кнопка "подробнее" */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs text-accent transition-colors hover:text-accent/80"
            >
              {expanded ? "Скрыть детали ↑" : "Подробнее о cookie ↓"}
            </button>

            {/* Кнопки действий — равнозначные, отказ так же прост, как согласие */}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => dismiss("accepted")}
                className="flex-1 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#3d7dca]"
              >
                {"Принять все"}
              </button>
              <button
                onClick={() => dismiss("declined")}
                className="flex-1 rounded-xl border-2 border-accent py-3 text-sm font-semibold text-accent transition-all hover:scale-[1.02] hover:bg-accent/5"
              >
                {"Только необходимые"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/** Ссылка для подвала: снова открыть настройки cookie */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      {"Настройки cookie"}
    </button>
  )
}
