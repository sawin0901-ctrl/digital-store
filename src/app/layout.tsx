import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Digital Store",
  description: "Интернет-магазин цифровых товаров",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}