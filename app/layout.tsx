import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCursor } from '@/components/ui/FloatingCursor'
import { NoiseBackground } from '@/components/ui/NoiseBackground'

import { ThemeProvider } from '@/components/blog/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.autobotia.com.br'),
  title: {
    default: 'Autobotia | Dominância em SEO, GEO e AEO',
    template: '%s | Autobotia',
  },
  description:
    'Especialistas em visibilidade digital: SEO, SEO Local, Otimização para IAs (GEO) e AEO. Colocamos sua marca como a resposta principal no Google, ChatGPT e Gemini.',
  keywords: [
    'SEO',
    'SEO Local',
    'GEO',
    'AEO',
    'visibilidade em IA',
    'ChatGPT',
    'Google Meu Negócio',
    'site profissional',
    'otimização para IA',
  ],
  authors: [{ name: 'Autobotia' }],
  creator: 'Autobotia',
  publisher: 'Autobotia',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.autobotia.com.br',
    siteName: 'Autobotia',
    title: 'Autobotia | Dominância em Pesquisa e IA',
    description:
      'Da primeira página do Google às recomendações do ChatGPT e Gemini. Especialistas em SEO, GEO e AEO.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autobotia — Especialistas em SEO, GEO e AEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autobotia | Dominância em Pesquisa e IA',
    description: 'Especialistas em SEO Clássico, SEO Local e Otimização Gerativa (GEO).',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.autobotia.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1E40AF" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NoiseBackground />
          <FloatingCursor />

          <a href="#main-content" className="skip-link" style={{ position:'absolute',left:'-9999px',top:'auto',width:1,height:1,overflow:'hidden' }}>
            Pular para o conteúdo principal
          </a>

          {/* WhatsApp floating button */}
          <a
            href="https://wa.me/5511922908507"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Falar no WhatsApp"
            style={{ position:'fixed', bottom:'1.75rem', right:'1.75rem', zIndex:999, width:'3.25rem', height:'3.25rem', borderRadius:'50%', background:'#25d366', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.4)' }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.136 1.535 5.874L.057 23.215c-.074.297.099.596.396.669a.52.52 0 0 0 .124.015c.099 0 .198-.025.297-.074l5.541-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.021-1.374l-.36-.213-3.713.979.994-3.628-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
            </svg>
          </a>

          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
