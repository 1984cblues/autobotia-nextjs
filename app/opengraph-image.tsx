import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Autobotia — Especialistas em SEO, GEO e AEO'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '8px solid #1d4ed8',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '28px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
            }}
          >
            AUTOBOTIA
          </div>
          <div
            style={{
              background: '#1d4ed8',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 700,
              padding: '6px 14px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            SEO • GEO • AEO
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
            }}
          >
            SEU CLIENTE PESQUISOU E NÃO TE ACHOU.
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#9ca3af',
              fontWeight: 500,
            }}
          >
            Dominância no Google, Maps, ChatGPT e Gemini.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            borderTop: '1px solid #262626',
            paddingTop: '28px',
          }}
        >
          <div
            style={{
              color: '#60a5fa',
              fontSize: '22px',
              fontWeight: 700,
            }}
          >
            autobotia.com.br
          </div>
          <div
            style={{
              color: '#737373',
              fontSize: '20px',
            }}
          >
            Sites de Alta Performance & Visibilidade Digital
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
