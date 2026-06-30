import type React from "react"

// This is the root layout that wraps everything
// The actual layout with locale support is in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}
