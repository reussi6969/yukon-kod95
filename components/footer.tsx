import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Company info — без иконки Instagram */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              {/* Увеличено: text-xl → text-3xl */}
              <span className="font-mono text-2xl font-bold text-foreground">{"YUKON"}</span>
              <span className="font-mono text-2xl font-bold text-accent">
                {"KOD "}
                <span className="font-sans font-black">{"95"}</span>
              </span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {"Помогаем водителям легально работать в Европе. Обучение онлайн, всего 1 визит в Краков."}
            </p>
          </div>

          {/* Документы — порядок: Сертификат, Реквизиты, Политика, Условия, Соглашение */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-3xl font-bold text-foreground">{"Документы"}</h3>
            <div className="flex flex-col gap-3">
              <Link href="/documents#certificate" className="text-base text-muted-foreground transition-colors hover:text-accent">{"Сертификат"}</Link>
              <Link href="/documents#requisites" className="text-base text-muted-foreground transition-colors hover:text-accent">{"Реквизиты компании"}</Link>
              <Link href="/documents#privacy" className="text-base text-muted-foreground transition-colors hover:text-accent">{"Политика конфиденциальности"}</Link>
              <Link href="/documents#terms" className="text-base text-muted-foreground transition-colors hover:text-accent">{"Условия предоставления услуг"}</Link>
              <Link href="/documents#agreement" className="text-base text-muted-foreground transition-colors hover:text-accent">{"Пользовательское соглашение"}</Link>
            </div>
          </div>

          {/* Карта */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-3xl font-bold text-foreground">{"Наш офис"}</h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Yukon KOD 95 office location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=al.+29+Listopada+130%2F421%2C+31-406+Krak%C3%B3w%2C+Polska&zoom=16"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">{"© 2026 Yukon KOD 95. Все права защищены."}</p>
        </div>
      </div>
    </footer>
  )
}
