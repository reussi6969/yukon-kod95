"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, Phone, User, Send, CheckCircle } from "lucide-react"

// SSR-безопасная функция открытия модала
export function openLeadModal(title?: string) {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { title } }))
}

type Status = "idle" | "loading" | "success" | "error"

function validateName(v: string) {
  if (!v.trim()) return "Введите имя"
  if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(v)) return "Только буквы"
  if (v.trim().length > 20) return "Не более 20 символов"
  return ""
}

function validatePhone(v: string) {
  const digits = v.replace(/[^0-9]/g, "")
  if (!digits) return "Введите номер"
  if (digits.length < 9) return "Минимум 9 цифр"
  if (digits.length > 12) return "Максимум 12 цифр"
  return ""
}

export function LeadModal() {
  const [open, setOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [title, setTitle] = useState("Получите консультацию")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [nameError, setNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [nameTouched, setNameTouched] = useState(false)
  const [phoneTouched, setPhoneTouched] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setTitle(detail?.title || "Получите консультацию")
      setOpen(true)
      setLeaving(false)
      setStatus("idle")
      setName(""); setPhone(""); setAgreed(false)
      setNameError(""); setPhoneError("")
      setNameTouched(false); setPhoneTouched(false)
    }
    window.addEventListener("open-lead-modal", handler)
    return () => window.removeEventListener("open-lead-modal", handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = "" }
  }, [open])

  const close = useCallback(() => {
    setLeaving(true)
    setTimeout(() => { setOpen(false); setLeaving(false) }, 350)
  }, [])

  function handleNameChange(v: string) {
    const filtered = v.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/g, "").slice(0, 20)
const capitalized = filtered.charAt(0).toUpperCase() + filtered.slice(1)
setName(capitalized)
    if (nameTouched) setNameError(validateName(filtered))
  }

  function handlePhoneChange(v: string) {
    let filtered = v.replace(/[^0-9+]/g, "")
    if (filtered.indexOf("+") > 0) filtered = filtered.replace(/\+/g, "")
    if (filtered.split("+").length > 2) filtered = "+" + filtered.replace(/\+/g, "")
    setPhone(filtered)
    if (phoneTouched) setPhoneError(validatePhone(filtered))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ne = validateName(name)
    const pe = validatePhone(phone)
    setNameError(ne); setPhoneError(pe)
    setNameTouched(true); setPhoneTouched(true)
    if (ne || pe || !agreed) return
    setStatus("loading")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (res.ok) {
  window.location.href = "/thank-you"
} else {
  setStatus("error")
}
    } catch { setStatus("error") }
  }

  if (!open) return null

  return (
    <>
      <div
        className={`fixed inset-0 z-[9980] bg-foreground/70 backdrop-blur-sm transition-opacity duration-350 ${leaving ? "opacity-0" : "opacity-100"}`}
        onClick={close}
      />
      <div
        className={`fixed left-1/2 top-1/2 z-[9981] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-350 ease-out ${leaving ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        <div className="overflow-hidden rounded-3xl bg-foreground border border-white/25 shadow-2xl">
          <div className="px-5 pt-5 pb-4 sm:px-7 sm:pt-7 sm:pb-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl sm:text-4xl">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75 sm:text-base sm:text-lg">
                  {"Оставьте свои контакты, мы с вами свяжемся!"}
                </p>
              </div>
              <button onClick={close}
                className="ml-3 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="bg-background px-5 pb-5 pt-4 rounded-t-3xl sm:px-7 sm:pb-7 sm:pt-6">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{"Заявка отправлена!"}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{"Мы свяжемся с вами в ближайшее время. Спасибо!"}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-name" className="hidden text-base font-medium text-foreground sm:block">{"Ваше имя"}</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input id="lead-name" type="text" placeholder="Ваше имя" value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={() => { setNameTouched(true); setNameError(validateName(name)) }}
                      className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all bg-secondary sm:py-3 sm:text-base ${nameError && nameTouched ? "border-red-400 focus:ring-red-300" : "border-border focus:border-accent focus:ring-accent/20"}`}
                    />
                  </div>
                  {nameError && nameTouched && <p className="text-xs font-medium text-red-500">{nameError}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-phone" className="hidden text-base font-medium text-foreground sm:block">{"Номер телефона"}</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input id="lead-phone" type="tel" placeholder="+48 000 000 000" value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => { setPhoneTouched(true); setPhoneError(validatePhone(phone)) }}
                      className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all bg-secondary sm:py-3 sm:text-base ${phoneError && phoneTouched ? "border-red-400 focus:ring-red-300" : "border-border focus:border-accent focus:ring-accent/20"}`}
                    />
                  </div>
                  {phoneError && phoneTouched && <p className="text-xs font-medium text-red-500">{phoneError}</p>}
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3 transition-colors hover:bg-secondary/60">
                  <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="peer absolute opacity-0" />
                    <div className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all ${agreed ? "border-accent bg-accent" : "border-border bg-background"}`}>
                      {agreed && <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                  </div>
                  <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {"Я согласен с "}
                    <Link href="/documents#privacy" target="_blank" className="font-medium text-accent underline-offset-2 hover:underline" onClick={(e) => e.stopPropagation()}>
                      {"политикой конфиденциальности"}
                    </Link>
                    {" и даю согласие на обработку моих персональных данных."}
                  </span>
                </label>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{"Что-то пошло не так. Попробуйте ещё раз."}</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className={`mt-1 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all sm:py-4 sm:text-base ${status === "loading" ? "cursor-not-allowed bg-muted text-muted-foreground" : "bg-accent hover:scale-[1.02] hover:bg-[#3d7dca] active:scale-[0.98]"}`}>
                  {status === "loading" ? (
                    <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{"Отправляем..."}</>
                  ) : (
                    <><Send className="h-4 w-4" />{"Оставить заявку"}</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
