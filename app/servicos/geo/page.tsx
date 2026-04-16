import type { Metadata } from 'next'
import { GeoClient } from './GeoClient'

export const metadata: Metadata = {
  title: 'GEO — Visibilidade em IA (ChatGPT e Gemini)',
  description:
    'Adapte sua marca para a nova era. O seu negócio na ponta da língua do ChatGPT, Gemini e Perplexity com nossas estratégias de Generative Engine Optimization.',
}

export default function GeoPage() {
  return <GeoClient />
}
