// Согласие на cookie (RODO / Prawo komunikacji elektronicznej).
// Маркетинговые скрипты (Meta Pixel) запускаются ТОЛЬКО после «Принять все».

// v2: старое согласие (до ноября 2026) не упоминало Meta Pixel, поэтому спрашиваем заново
const CONSENT_KEY = "yukon_consent_v2"
const LEGACY_KEY = "yukon_cookie_consent"

export type ConsentChoice = "accepted" | "declined"

export const CONSENT_EVENT = "yukon-consent-change"
export const OPEN_SETTINGS_EVENT = "yukon-open-cookie-settings"

export function getConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed?.choice === "accepted" || parsed?.choice === "declined" ? parsed.choice : null
  } catch {
    return null
  }
}

export function setConsent(choice: ConsentChoice) {
  const previous = getConsent()
  try {
    // Дата сохраняется как подтверждение, когда было дано/отозвано согласие
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, date: new Date().toISOString() }))
    localStorage.removeItem(LEGACY_KEY)
  } catch {}

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { choice } }))

  // Согласие отозвано — удаляем рекламные cookie и перезагружаем страницу, чтобы пиксель выгрузился
  if (previous === "accepted" && choice === "declined") {
    for (const name of ["_fbp", "_fbc"]) {
      const host = window.location.hostname
      const domains = ["", host, "." + host, "." + host.replace(/^www\./, "")]
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`
      }
    }
    window.location.reload()
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))
}
