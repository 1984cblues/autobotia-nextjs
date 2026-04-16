import { z } from 'zod'

export const SimuladorSchema = z.object({
  objetivo: z.enum(
    ['seo_tradicional', 'seo_local', 'geo', 'cricao_site'],
    {
      required_error: 'Por favor, selecione seu principal objetivo.',
      invalid_type_error: 'Objetivo inválido selecionado.',
    }
  ),
  siteUrl: z
    .string()
    .url({ message: 'Por favor, insira uma URL válida (ex: https://seusite.com.br).' })
    .optional()
    .or(z.literal('')), // allows empty string if they don't have a site
  porte: z.enum(
    ['autonomo', 'pequena', 'media', 'grande'],
    {
      required_error: 'Por favor, selecione o porte da sua empresa.',
    }
  ),
  nome: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
    .max(100, { message: 'O nome é muito longo.' }),
  email: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido.' }),
  whatsapp: z
    .string()
    .min(10, { message: 'Por favor, insira o DDD e o número completo (ex: 11999999999).' })
    .regex(/^[0-9\-\+\s]+$/, { message: 'Apenas números são permitidos no telefone.' })
})

export type SimuladorInput = z.infer<typeof SimuladorSchema>
