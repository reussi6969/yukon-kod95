// Meta (Facebook) Pixel. Загружается только после согласия на маркетинговые cookie.
import { getConsent } from "@/lib/consent"

const PIXEL_ID = "1292910256020888"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}

/** Загружает пиксель (один раз) и отправляет PageView. Ничего не делает без согласия. */
export function loadMetaPixel() {
  if (typeof window === "undefined" || getConsent() !== "accepted") return false
  if (window.fbq) return true

  /* eslint-disable */
  // Официальный код Meta Pixel
  ;(function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return
    const n: any = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    })
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = "2.0"
    n.queue = []
    const t = b.createElement(e) as HTMLScriptElement
    t.async = true
    t.src = v
    const s = b.getElementsByTagName(e)[0]
    s.parentNode!.insertBefore(t, s)
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
  /* eslint-enable */

  // Отключаем автоматический сбор кликов (SubscribedButtonClick и т.п.)
  window.fbq!("set", "autoConfig", false, PIXEL_ID)
  window.fbq!("init", PIXEL_ID)
  window.fbq!("track", "PageView")
  return true
}

/** Событие «Заявка» — только если человек согласился на маркетинговые cookie. */
export function trackLead() {
  if (loadMetaPixel()) window.fbq!("track", "Lead")
}
