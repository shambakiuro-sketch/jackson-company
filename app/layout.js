import './globals.css'

export const metadata = {
  title: 'Jackson Construction Co., Inc.',
  description: 'Professional construction services in Peabody, Massachusetts',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
