import './globals.css'

export const metadata = {
  title: 'SECES — Stop Guessing.',
  description:
    "SECES shows you exactly where you're losing money — and what to fix. Not a tool. A decision system.",
  keywords: ['business analysis', 'revenue optimization', 'decision system', 'growth strategy'],
  openGraph: {
    title: 'SECES — Stop Guessing.',
    description: "SECES shows you exactly where you're losing money — and what to fix.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SECES — Stop Guessing.',
    description: "SECES shows you exactly where you're losing money — and what to fix.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
