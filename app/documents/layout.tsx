import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Документы: реквизиты, политика конфиденциальности, условия",
  description: "Реквизиты YUKON INTERNATIONAL GROUP Sp. z o.o., сертификат, политика конфиденциальности, условия предоставления услуг и пользовательское соглашение.",
  alternates: { canonical: "/documents" },
}

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
