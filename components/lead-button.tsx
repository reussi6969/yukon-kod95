"use client"

import { openLeadModal } from "@/components/lead-modal"

interface LeadButtonProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function LeadButton({ title, children, className }: LeadButtonProps) {
  return (
    <button
      onClick={() => openLeadModal(title)}
      className={className}
    >
      {children}
    </button>
  )
}
