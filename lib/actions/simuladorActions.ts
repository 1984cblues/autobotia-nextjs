'use server'

import { SimuladorSchema, SimuladorInput } from '../validators/simulador'

// Autobotia WhatsApp number
const AUTOBOTIA_WHATSAPP = '5511922908507'

export async function processarSimulador(data: unknown) {
  try {
    // 1. Zod Validation (OWASP 2025 compliant)
    const result = SimuladorSchema.safeParse(data)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      return {
        success: false,
        errors: fieldErrors,
      }
    }

    const validData = result.data

    // 2. Here normally you would save to Database and trigger Nodemailer
    // Mocking email dispatch behavior (we will log to server terminal for now)
    console.log(`[LEAD CAPTURE] Nova submissão de: ${validData.nome}`)
    console.log(`- Email: ${validData.email}`)
    console.log(`- WhatsApp do Lead: ${validData.whatsapp}`)
    console.log(`- Objetivo: ${validData.objetivo}`)
    console.log(`- URL do site atual: ${validData.siteUrl || 'Nenhum'}`)
    console.log(`- Porte da Empresa: ${validData.porte}`)
    console.warn(`[TODO] Configurar Nodemailer/Resend para disparar lead para: contato@autobotia.com.br`)

    // 3. Formatter for WhatsApp Redirect
    const objetivoLabel = {
      seo_tradicional: 'SEO Tradicional',
      seo_local: 'SEO Local',
      geo: 'Visibilidade em IAs (GEO)',
      cricao_site: 'Criação de Site de Alta Performance'
    }[validData.objetivo]

    const textMessage = `Olá equipe Autobotia! Acabei de preencher o simulador no site.\n\n` +
      `*Nome:* ${validData.nome}\n` +
      `*Objetivo:* ${objetivoLabel}\n` +
      `*Site:* ${validData.siteUrl || 'Ainda não possuo'}\n` +
      `*Porte:* ${validData.porte}\n\n` +
      `Gostaria de falar sobre como podemos melhorar minha visibilidade digital.`

    const whatsappUrl = `https://wa.me/${AUTOBOTIA_WHATSAPP}?text=${encodeURIComponent(textMessage)}`

    return {
      success: true,
      whatsappUrl,
      message: 'Dados enviados com sucesso! Redirecionando para o WhatsApp...'
    }
  } catch (error: any) {
    // Generic fallback error
    console.error('[SERVER ACTION ERROR]', error)
    return {
      success: false,
      message: 'Ocorreu um erro interno. Por favor, tente novamente.',
    }
  }
}
