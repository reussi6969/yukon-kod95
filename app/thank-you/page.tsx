"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Phone, Mail } from "lucide-react"

export default function ThankYouPage() {
  
  useEffect(() => {
    // Отправляем чистый Лид только при загрузке этой страницы
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-20 text-center">
      <div className="flex flex-col items-center gap-5 max-w-md w-full">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 border border-green-200">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="font-serif text-4xl font-bold text-foreground">
          Спасибо!
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground">
          Ваша заявка отправлена. Менеджер позвонит вам с пн по пт с 09:00 до 16:00.
        </p>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span><Mail className="inline h-4 w-4 mr-1" />kod95@yukon.com.pl</span>
          <span><Phone className="inline h-4 w-4 mr-1" />+48 452 650 325</span>
        </div>

        <Link href="/" className="mt-2 w-full rounded-xl bg-[#4689e1] px-8 py-4 text-base font-semibold text-white">
          Вернуться на главную
        </Link>

      </div>
    </main>
  )
}
