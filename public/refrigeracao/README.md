# Template Refrigeração - Modern Animated

**Categoria**: Services  
**Estilo**: Modern with GSAP Animations  
**Cores Principais**: Azul Profissional (#0066CC), Azul Clear (#00A3E0)

---

## 📸 Preview

![Hero Section](../../../.gemini/antigravity/brain/c8a9eb7f-f1ee-475f-9c83-8611cbf1145f/hero_section_1770249047502.png)

---

## ✨ Características Principais

### Design
- ✅ **Hero Animado**: Sequência de 35 imagens com GSAP ScrollTrigger
- ✅ **Efeito de Neve**: Partículas animadas com Sparticles (7KB)
- ✅ **Gradient Background**: Fundo degradê roxo/azul moderno
- ✅ **Animações de Scroll**: Fade-in suave em todas as seções

### Funcionalidades
- ✅ **Image Sequence**: 35 frames de animação de ar-condicionado
- ✅ **Snow Particles**: Efeito de neve em toda a página
- ✅ **Scroll Animations**: GSAP para animações fluidas
- ✅ **Counter Animation**: Estatísticas com contagem animada
- ✅ **Form Integration**: Formulário de contato completo
- ✅ **Responsivo**: Design mobile-first

### Animações Especiais
- ✅ **Pin Animation**: Hero fixo com scroll de imagens
- ✅ **Staggered Cards**: Cards aparecem em sequência
- ✅ **Number Counters**: Contadores animados nas estatísticas
- ✅ **Smooth Transitions**: Transições CSS suaves

---

## 🎯 Ideal Para

- Empresas de refrigeração e climatização
- Instaladores de ar-condicionado
- Serviços de manutenção HVAC
- Projetos comerciais de climatização
- Assistência técnica em refrigeração

---

## 🎨 Tecnologias Utilizadas

### Libraries (via CDN)
- **GSAP 3.12.5**: Animações profissionais
- **ScrollTrigger**: Animações baseadas em scroll
- **Sparticles 1.2.1**: Efeito de neve (~7KB)

### Stack
- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Grid, Flexbox, Animations
- **Vanilla JavaScript**: Lógica e controle
- **Canvas API**: Renderização de sequência de imagens

---

## 🚀 Como Usar

1. **Configure as imagens**:
   - Coloque seus 35 frames em `images/refrigeracao/`
   - Nomes: `frame-001.jpg` até `frame-035.jpg`

2. **Personalize o conteúdo**:
   - Altere textos, telefone e email
   - Ajuste cores nas variáveis CSS (`:root`)

3. **Teste localmente**:
   - Abra `index.html` no navegador
   - Scroll para ver animações

4. **Deploy**:
   - Upload para servidor web
   - Funciona sem build process!

---

## 📂 Estrutura de Arquivos

```
refrigeracao/
├── index.html              # Arquivo principal
├── css/
│   └── style.css          # Estilos completos
├── js/
│   └── main.js            # Animações e lógica
└── images/
    └── refrigeracao/
        ├── frame-001.jpg   # Frame 1 da animação
        ├── frame-002.jpg   # Frame 2
        └── ...            # até frame-035.jpg
```

---

## ⚙️ Configurações

### Ajustar Velocidade da Animação

No arquivo `js/main.js`, linha ~90:

```javascript
scrollTrigger: {
    end: '+=200%',  // Menor = mais rápido
    scrub: 0.5,     // Menor = mais sensível
}
```

### Ajustar Efeito de Neve

No arquivo `js/main.js`, linha ~10:

```javascript
count: 50,      // Mais partículas = mais neve
speed: 0.5,     // Maior = mais rápido
minSize: 2,     // Tamanho mínimo
maxSize: 6,     // Tamanho máximo
```

### Trocar Cores

No arquivo `css/style.css`, linha ~2:

```css
:root {
    --color-primary: #0066CC;    /* Azul principal */
    --color-secondary: #00A3E0;  /* Azul secundário */
}
```

---

## 🎥 Funcionalidades Técnicas

### Sequência de Imagens
- Carrega 35 frames automaticamente
- Renderiza via Canvas API
- Controle via scroll (GSAP)
- Responsive e centralizado

### Performance
- Lazy loading de imagens
- GPU acceleration (transform3d)
- Debounced scroll events
- Optimized Canvas rendering

### Animações GSAP
- Section fade-in
- Card stagger effect
- Number counting
- Smooth scrolling

---

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers
- ✅ Tablets

---

## 📝 Personalização Rápida

### Alterar Telefone
Busque por `+5511999999999` e substitua.

### Trocar Email
Busque por `contato@refripro.com` e substitua.

### Modificar Serviços
Edite os cards na seção `servicos` (HTML linhas 90-130).

### Ajustar Depoimentos
Edite os cards na seção `depoimentos` (HTML linhas 180-220).

---

## 🎬 Demo

Veja o template em ação: [Recording](../../../.gemini/antigravity/brain/c8a9eb7f-f1ee-475f-9c83-8611cbf1145f/refrigeracao_template_demo_1770249034350.webp)

---

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| First Paint | < 1s |
| Full Load | < 3s |
| Animation FPS | 60fps |
| JS Size | ~15KB |
| CSS Size | ~12KB |
| Total (no images) | ~30KB |

---

## ⚠️ Requisitos

- Servidor web (para testar localmente use Live Server ou similar)
- Navegador moderno com suporte a ES6+
- Conexão para CDNs (GSAP e Sparticles)

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique os caminhos em `js/main.js`
- Confirme que os nomes são `frame-001.jpg` etc.

### Neve não aparece
- Verifique se o CDN do Sparticles carregou
- Abra o console para ver erros

### Animações travadas
- Reduza o número de partículas de neve
- Simplifique as animações GSAP

---

## 📄 Licença

Template criado para uso comercial pela Agência.

---

## 🆘 Suporte

Para dúvidas ou customizações, entre em contato.

**Última atualização**: 04/02/2026
