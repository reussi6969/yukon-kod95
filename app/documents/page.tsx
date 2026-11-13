"use client"

import { useState, useEffect, Suspense } from "react"
import { ChevronDown, ZoomIn } from "lucide-react"
import { Header } from "@/components/header"
import { FloatingButtons } from "@/components/floating-buttons"
import { LeadModal } from "@/components/lead-modal"
import { Footer } from "@/components/footer"

// ── Фото сертификата с лайтбоксом ──────────────
function CertificateImage() {
  const [open, setOpen] = useState(false)
  // ⬇️ ЗАМЕНИ НА РЕАЛЬНУЮ ССЫЛКУ НА ФОТО СЕРТИФИКАТА (например с postimg.cc)
  const src = "https://i.postimg.cc/LX7WY7Cs/6e4aff91-1.png"

  return (
    <>
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-300 hover:shadow-xl"
        onClick={() => setOpen(true)}
        style={{ maxWidth: 520 }}
      >
        <img src={src} alt="Сертификат Yukon KOD 95" className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{"Нажмите на изображение, чтобы открыть в полном размере"}</p>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(false)}>
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40" onClick={() => setOpen(false)}>✕</button>
          <img src={src} alt="Сертификат — полный размер" className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

// ── Данные секций — порядок: Сертификат, Реквизиты, остальные ──
type SectionDef = { id: string; title: string; content: React.ReactNode }

const sections: SectionDef[] = [
  {
    id: "certificate",
    title: "Сертификат",
    content: (
      <div className="flex flex-col gap-5">
        <p className="text-base leading-relaxed text-muted-foreground">
          {"Сертификат подтверждает, что компания Yukon KOD 95 является авторизованным партнёром аккредитованного учебного центра и осуществляет деятельность в соответствии с требованиями польского законодательства."}
        </p>
        <CertificateImage />
      </div>
    ),
  },
  {
    id: "requisites",
    title: "Реквизиты компании",
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        {/* ⚠️ ЗАПОЛНИ КВАДРАТНЫЕ СКОБКИ СВОИМИ РЕАЛЬНЫМИ ДАННЫМИ */}
        {[
          { label: "Полное название", value: "YUKON INTERNATIONAL GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ" },
          { label: "Форма собственности", value: "Spółka z ograniczoną odpowiedzialnością" },
          { label: "NIP", value: "9452250355", mono: true },
          { label: "REGON", value: "520517663", mono: true },
          { label: "KRS", value: "0000934640", mono: true },
          { label: "Юридический адрес", value: "al. 29 Listopada 130/421,\n31-406 Kraków, Polska" },
          { label: "Email", value: "kod95@yukon.com.pl" },
          { label: "Телефон", value: "+48 452 650 325" },
        ].map(({ label, value, mono }) => (
          <div key={label} className="rounded-xl bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
            <p className={`mt-2 text-base font-medium text-foreground ${mono ? "font-mono" : ""}`} style={{ whiteSpace: "pre-line" }}>{value}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "privacy",
    title: "Политика конфиденциальности",
    content: (
      <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> 23 марта 2026 г.</p>
        {[
          { h: "1. Администратор данных", p: "Администратором персональных данных является YUKON INTERNATIONAL GROUP Sp. z o.o., al. 29 Listopada 130/421, 31-406 Kraków, Polska. NIP: 9452250355. Контакт: kod95@yukon.com.pl" },
          { h: "2. Какие данные мы собираем", ul: ["Имя и фамилия","Номер телефона","Адрес электронной почты","Данные водительского удостоверения (для оказания услуг)","Технические данные (IP-адрес, тип браузера) — автоматически"] },
          { h: "3. Цели и правовые основания", ul: ["Выполнение договора (ст. 6(1)(b) GDPR) — обработка заявки и оказание услуг","Законный интерес (ст. 6(1)(f) GDPR) — ответы на запросы, маркетинг","Согласие (ст. 6(1)(a) GDPR) — рассылки (если вы дали согласие)"] },
          { h: "4. Срок хранения", p: "Данные хранятся в течение срока оказания услуг и 5 лет после его окончания — согласно польскому закону о бухгалтерском учёте." },
          { h: "5. Ваши права", p: "По GDPR вы вправе получить доступ к данным, исправить, удалить их, ограничить обработку, а также подать жалобу в надзорный орган — Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa." },
          { h: "6. Передача данных третьим лицам", p: "Данные могут передаваться учебным центрам-партнёрам, органам власти Польши (WORD, GITD), IT-провайдерам (хостинг, CRM) на основании договоров обработки данных." },
        ].map(({ h, p, ul }) => (
          <div key={h}>
            <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{h}</h3>
            {p && <p>{p}</p>}
            {ul && <ul className="mt-1 flex flex-col gap-1.5 pl-4">{ul.map(i => <li key={i}>• {i}</li>)}</ul>}
          </div>
        ))}
        <p className="text-sm">Политика обновлена: <strong>23 марта 2026 г.</strong></p>
      </div>
    ),
  },
  {
    id: "terms",
    title: "Условия предоставления услуг",
    content: (
      <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> 23 марта 2026 г.</p>
        {[
          { h: "1. Стороны", p: "Исполнитель: YUKON INTERNATIONAL GROUP Sp. z o.o., al. 29 Listopada 130/421, 31-406 Kraków. Заказчик: физическое лицо, оставившее заявку на сайте." },
          { h: "2. Предмет договора", p: "Исполнитель оказывает услуги по организации получения квалификации КОД 95: консультация, организация медосмотра, доступ к учебной платформе, сопровождение при подаче документов." },
          { h: "3. Порядок оказания услуг", ul: ["Заказчик оставляет заявку и проходит консультацию","Стороны согласовывают объём и стоимость","Заказчик вносит оплату по выставленному счёту","Исполнитель организует прохождение курса"] },
          { h: "4. Стоимость и оплата", p: "Стоимость определяется индивидуально и указывается в счёте. Оплата в польских злотых (PLN)." },
          { h: "5. Ответственность", p: "Исполнитель организует процесс согласно польскому законодательству. Решения государственных органов (WORD, GITD) находятся вне зоны ответственности Исполнителя." },
          { h: "6. Отказ от услуг", p: "До начала обучения — возврат полной стоимости за вычетом фактических расходов. После начала — пропорционально неоказанной части." },
          { h: "7. Применимое право", p: "Договор регулируется законодательством Польши. Споры рассматриваются судом по месту нахождения Исполнителя." },
        ].map(({ h, p, ul }) => (
          <div key={h}>
            <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{h}</h3>
            {p && <p>{p}</p>}
            {ul && <ul className="mt-1 flex flex-col gap-1.5 pl-4">{ul.map(i => <li key={i}>• {i}</li>)}</ul>}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "agreement",
    title: "Пользовательское соглашение",
    content: (
      <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> 23 марта 2026 г.</p>
        {[
          { h: "1. Принятие условий", p: "Используя сайт, вы соглашаетесь с настоящим соглашением. Если вы не согласны — прекратите использование сайта." },
          { h: "2. Использование сайта", ul: ["Сайт предназначен для ознакомления с услугами и оформления заявок","Запрещено копирование материалов без письменного согласия","Запрещено использование сайта в незаконных целях"] },
          { h: "3. Интеллектуальная собственность", p: "Все материалы сайта (тексты, изображения, логотип, дизайн) являются собственностью YUKON INTERNATIONAL GROUP Sp. z o.o. и охраняются законодательством ЕС об авторском праве." },
          { h: "4. Ограничение ответственности", p: "Сайт предоставляется «как есть». Компания не гарантирует бесперебойную работу и не несёт ответственности за ущерб от его использования." },
          { h: "5. Cookies", p: "Сайт использует файлы cookie для корректной работы и аналитики (Vercel Analytics). Продолжая использовать сайт, вы соглашаетесь с cookie." },
          { h: "6. Изменения соглашения", p: "Компания вправе изменять соглашение в любое время. Актуальная версия всегда доступна на этой странице." },
        ].map(({ h, p, ul }) => (
          <div key={h}>
            <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{h}</h3>
            {p && <p>{p}</p>}
            {ul && <ul className="mt-1 flex flex-col gap-1.5 pl-4">{ul.map(i => <li key={i}>• {i}</li>)}</ul>}
          </div>
        ))}
      </div>
    ),
  },
]

// ── Аккордеон — один открытый за раз ───────────
function AccordionList() {
  const [openId, setOpenId] = useState<string | null>(null)

  // При загрузке страницы — читаем хэш из URL и скролим к нужной плашке
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (!hash) return
    // Небольшая задержка чтобы DOM успел отрисоваться
    setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 400)
    // Плашки остаются закрытыми — пользователь сам откроет нужную
  }, [])

  function toggle(id: string) {
    const el = document.getElementById(id)
    setOpenId((prev) => {
      // Если закрываем — просто закрываем с анимацией
      if (prev === id) return null
      // Если открываем новую — закрываем старую мгновенно (через state)
      // и сразу открываем новую
      return id
    })
    // Скролим к плашке сразу — старая уже "исчезла" мгновенно
    requestAnimationFrame(() => {
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => {
        const isOpen = openId === section.id
        return (
          <div
            key={section.id}
            id={section.id}
            // scroll-mt чтобы плашка не уходила под хедер при скролле
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(section.id)}
              className="flex w-full items-center justify-between gap-3 px-5 py-5 text-left transition-colors hover:bg-secondary/50"
            >
              <span className="font-serif text-xl font-bold text-foreground sm:text-3xl min-w-0 flex-1">
                {section.title}
              </span>
              <ChevronDown
                className={`h-6 w-6 shrink-0 self-start mt-1 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden ${
                isOpen
                  ? "max-h-[3000px] opacity-100 transition-all duration-500 ease-in-out"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-border px-7 py-7">
                {section.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Страница ────────────────────────────────────
export default function DocumentsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-foreground py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-serif text-5xl font-bold text-primary-foreground">
              {"Документы"}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              {"Правовые документы компании Yukon KOD 95"}
            </p>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <AccordionList />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <LeadModal />
    </>
  )
}
