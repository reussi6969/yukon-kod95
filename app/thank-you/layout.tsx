import type { Metadata } from "next"

// Служебная страница — не показываем в поиске
export const metadata: Metadata = {
  title: "Спасибо за заявку",
  robots: { index: false, follow: false },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
