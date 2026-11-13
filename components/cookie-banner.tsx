"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie, Shield, BarChart2 } from "lucide-react"

const STORAGE_KEY = "yukon_cookie_consent"

type ConsentState = "accepted" | "declined" | null

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Небольшая задержка перед появлением
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function dismiss(choice: ConsentState) {
    setLeaving(true)
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, choice ?? "declined")
      setVisible(false)
      setLeaving(false)
    }, 400)
  }

  if (!visible) return null

  return (
    <>
      {/* Затемнённый фон — лёгкий */}
      <div
        className={`fixed inset-0 z-[9990] bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-400 ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => dismiss("declined")}
      />

      {/* Баннер — снизу по центру */}
      <div
        className={`fixed bottom-4 left-1/2 z-[9991] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 transition-all duration-400 ease-out sm:bottom-6 ${
          leaving
            ? "translate-y-8 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">

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
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {"Мы используем файлы cookie"}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {"Для корректной работы сайта и аналитики"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => dismiss("declined")}
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Основной текст */}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Мы используем cookie для обеспечения работы сайта и анализа посещаемости (Vercel Analytics). Ваши данные не передаются третьим лицам в рекламных целях."}
            </p>

            {/* Раскрывающиеся детали */}
            {expanded && (
              <div className="mt-4 rounded-xl bg-secondary p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{"Необходимые cookie"}</p>
                      <p className="text-xs text-muted-foreground">{"Обеспечивают базовую работу сайта. Всегда активны."}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{"Аналитические cookie"}</p>
                      <p className="text-xs text-muted-foreground">{"Vercel Analytics — анонимная статистика посещений. Помогает улучшать сайт."}</p>
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

            {/* Кнопки действий */}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => dismiss("accepted")}
                className="flex-1 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#3d7dca]"
              >
                {"Принять все"}
              </button>
              <button
                onClick={() => dismiss("declined")}
                className="flex-1 rounded-xl border-2 border-border py-3 text-sm font-semibold text-muted-foreground transition-all hover:scale-[1.02] hover:border-accent/40 hover:text-foreground"
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
