"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import { getConsent, CONSENT_EVENT } from "@/lib/consent"

const ADDRESS = "al. 29 Listopada 130/421, 31-406 Kraków"
const EMBED_SRC =
  "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=al.+29+Listopada+130%2F421%2C+31-406+Krak%C3%B3w%2C+Polska&zoom=16"
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=al.+29+Listopada+130%2F421%2C+31-406+Krak%C3%B3w"

// Google Maps ставит свои cookie, поэтому карта грузится только после согласия или по клику
export function MapEmbed() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (getConsent() === "accepted") setShow(true)
    const onChange = () => { if (getConsent() === "accepted") setShow(true) }
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  if (show) {
    return (
      <iframe
        title="Yukon KOD 95 — офис на карте"
        src={EMBED_SRC}
        width="100%"
        height="260"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex h-[260px] flex-col items-center justify-center gap-3 bg-background p-6 text-center">
      <MapPin className="h-8 w-8 text-accent" />
      <p className="text-base font-medium text-foreground">{ADDRESS}</p>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3670c2]"
      >
        {"Показать карту"}
      </button>
      <p className="text-xs text-muted-foreground">
        {"Карта загрузится с серверов Google. "}
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
          {"Открыть в Google Maps"}
        </a>
      </p>
    </div>
  )
}
