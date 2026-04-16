'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import styles from './Simulador.module.css'
import { processarSimulador } from '@/lib/actions/simuladorActions'

export function SimuladorClient() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  // State
  const [formData, setFormData] = useState({
    objetivo: '',
    siteUrl: '',
    porte: '',
    nome: '',
    email: '',
    whatsapp: '',
  })

  // Errors from backend or frontend
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Update field payload
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // clear error for that field
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  // Handle Radio Cards (Objetivo / Porte)
  const handleSelect = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleNext = () => {
    // Step 1 frontend pre-validation
    if (step === 1 && !formData.objetivo) {
      setErrors({ objetivo: 'Por favor, selecione uma opção antes de avançar.' })
      return
    }
    // Step 2 frontend pre-validation
    if (step === 2 && !formData.porte) {
      setErrors({ porte: 'Selecione o porte da sua empresa para podermos customizar o pacote.' })
      return
    }
    
    setStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    const res = await processarSimulador(formData)
    
    setLoading(false)

    if (res.success && res.whatsappUrl) {
      // Redirect to WhatsApp
      window.location.href = res.whatsappUrl
    } else if (res.errors) {
      // Show Zod Validation Errors on screen
      setErrors(res.errors)
    } else {
      alert(res.message || 'Erro inesperado. Tente novamente.')
    }
  }

  const totalSteps = 3
  const progressPercent = (step / totalSteps) * 100

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Diagnóstico de Presença</h1>
        <p className={styles.subtitle}>
          Deixe-nos entender o momento da sua empresa para desenharmos o plano de dominação digital ideal.
        </p>
      </header>

      <div className={styles.formWrapper}>
        {loading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner} />
            <p>Gerando seu direcionamento estratégico...</p>
          </div>
        )}

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} style={{ width: `${progressPercent}%` }} />
          </div>
          <div className={styles.stepIndicator}>
            <span>Passo {step} de {totalSteps}</span>
            <span>
              {step === 1 && 'Objetivo'}
              {step === 2 && 'Seu Negócio'}
              {step === 3 && 'Detalhes de Contato'}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* STEP 1: OBJETIVO */}
          {step === 1 && (
            <div className={styles.stepEnter}>
              <div className={styles.questionGroup}>
                <label className={styles.questionLabel}>Qual o seu principal objetivo hoje?</label>
                <div className={styles.radioGrid}>
                  
                  {/* Card 1 */}
                  <div 
                    className={`${styles.radioCard} ${formData.objetivo === 'seo_tradicional' ? styles.selected : ''}`}
                    onClick={() => handleSelect('objetivo', 'seo_tradicional')}
                  >
                    <div className={styles.radioIcon}>
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div className={styles.radioContent}>
                      <h4>Estar na 1ª página do Google</h4>
                      <p>SEO Tradicional</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div 
                    className={`${styles.radioCard} ${formData.objetivo === 'seo_local' ? styles.selected : ''}`}
                    onClick={() => handleSelect('objetivo', 'seo_local')}
                  >
                    <div className={styles.radioIcon}>
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div className={styles.radioContent}>
                      <h4>Dominar as buscas regionais</h4>
                      <p>SEO Local (Maps)</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div 
                    className={`${styles.radioCard} ${formData.objetivo === 'geo' ? styles.selected : ''}`}
                    onClick={() => handleSelect('objetivo', 'geo')}
                  >
                    <div className={styles.radioIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"/></svg>
                    </div>
                    <div className={styles.radioContent}>
                      <h4>Recomendação nas IAs</h4>
                      <p>GEO (ChatGPT, Gemini)</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div 
                    className={`${styles.radioCard} ${formData.objetivo === 'cricao_site' ? styles.selected : ''}`}
                    onClick={() => handleSelect('objetivo', 'cricao_site')}
                  >
                    <div className={styles.radioIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <div className={styles.radioContent}>
                      <h4>Ter um site rápido e premium</h4>
                      <p>Design de Alta Performance</p>
                    </div>
                  </div>

                </div>
                {errors.objetivo && <span className={styles.errorText}>{errors.objetivo}</span>}
              </div>
            </div>
          )}

          {/* STEP 2: CONTEXTO */}
          {step === 2 && (
            <div className={styles.stepEnter}>
              
              <div className={styles.inputGroup}>
                <label htmlFor="siteUrl" className={styles.inputLabel}>URL do Site Atual (Opcional)</label>
                <input
                  type="text"
                  id="siteUrl"
                  name="siteUrl"
                  placeholder="https://www.suaempresa.com.br"
                  className={`${styles.inputField} ${errors.siteUrl ? styles.error : ''}`}
                  value={formData.siteUrl}
                  onChange={handleChange}
                />
                {errors.siteUrl && <span className={styles.errorText}>{errors.siteUrl}</span>}
              </div>

              <div className={styles.questionGroup} style={{ marginTop: 'var(--space-6)' }}>
                <label className={styles.questionLabel}>Qual o porte da sua empresa?</label>
                <div className={styles.radioGrid}>
                  {['autonomo', 'pequena', 'media', 'grande'].map((porte) => (
                    <div 
                      key={porte}
                      className={`${styles.radioCard} ${formData.porte === porte ? styles.selected : ''}`}
                      onClick={() => handleSelect('porte', porte)}
                    >
                      <div className={styles.radioContent}>
                         <h4 style={{ textTransform: 'capitalize' }}>
                           {porte === 'autonomo' ? 'Sou Autônomo / Profissional Liberal' : `${porte} Empresa`}
                         </h4>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.porte && <span className={styles.errorText}>{errors.porte}</span>}
              </div>

            </div>
          )}

          {/* STEP 3: CONTATO */}
          {step === 3 && (
            <div className={styles.stepEnter}>
              <div className={styles.inputGroup}>
                <label htmlFor="nome" className={styles.inputLabel}>Como podemos te chamar? *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome ou nome da empresa"
                  className={`${styles.inputField} ${errors.nome ? styles.error : ''}`}
                  value={formData.nome}
                  onChange={handleChange}
                />
                 {errors.nome && <span className={styles.errorText}>{errors.nome}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>Seu melhor E-mail corporativo *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contato@suaempresa.com.br"
                  className={`${styles.inputField} ${errors.email ? styles.error : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                 {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="whatsapp" className={styles.inputLabel}>WhatsApp (com DDD) *</label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="11 99999-9999"
                  className={`${styles.inputField} ${errors.whatsapp ? styles.error : ''}`}
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
                 {errors.whatsapp && <span className={styles.errorText}>{errors.whatsapp}</span>}
              </div>
            </div>
          )}

          {/* ACTIONS / CONTROLS */}
          <div className={styles.actions}>
            {step > 1 ? (
               <button 
                type="button" 
                onClick={handlePrev}
                style={{ background: 'transparent', border: 'none', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer', padding: '0.5rem' }}
               >
                 ← Voltar
               </button>
            ) : <div />}
            
            {step < totalSteps ? (
              <Button type="button" variant="primary" onClick={handleNext}>
                Próximo Passo
              </Button>
            ) : (
              <Button type="submit" variant="primary" disabled={loading}>
                Finalizar e Falar com Especialista
              </Button>
            )}
          </div>

        </form>
      </div>
    </div>
  )
}
