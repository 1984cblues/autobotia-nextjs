// Aguardar carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    // initSnowEffect(); // Removido para simplificar
    // initHeroSequence(); // Removido para versão estática
    initScrollAnimations();
    initFormSubmit();
    // init3DEffect(); // Removido para simplificar
});

// 1. Efeito de Neve com Canvas puro (substituindo Sparticles)
function initSnowEffect() {
    const canvas = document.getElementById('snow-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Suporte HiDPI/Retina
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partículas de neve
    const snowflakes = [];
    const numFlakes = 100;

    class Snowflake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight - window.innerHeight;
            this.size = Math.random() * 3 + 2;
            this.speed = Math.random() * 1 + 0.5;
            this.drift = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.6 + 0.3;
        }

        update() {
            this.y += this.speed;
            this.x += this.drift;

            if (this.y > window.innerHeight) {
                this.reset();
                this.y = -10;
            }

            if (this.x > window.innerWidth) this.x = 0;
            if (this.x < 0) this.x = window.innerWidth;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Criar flocos
    for (let i = 0; i < numFlakes; i++) {
        snowflakes.push(new Snowflake());
    }

    // Animação
    function animate() {
        // Limpar usando dimensões reais do canvas
        ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

        snowflakes.forEach(flake => {
            flake.update();
            flake.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// 2. Sequência de Imagens no Hero com GSAP ScrollTrigger
function initHeroSequence() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const context = canvas.getContext('2d');

    // Configurar dimensões do canvas com HiDPI para evitar granulado
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        context.scale(dpr, dpr);
        // Importante: setar estilo CSS também
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        // Forçar re-render se já houver imagem carregada
        if (images.length > 0 && images[0].complete) {
            render();
        }
    }

    // Carregar imagens
    const frameCount = 80; // OTIMIZADO: 80 frames (1 a cada 3)
    const images = [];
    const imageSequence = {
        frame: 0
    };

    // Pré-carregar todas as imagens
    let imagesLoaded = 0;
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `images/refrigeracao/frame-${frameNumber}.webp`;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === 1) { // Renderizar primeira imagem assim que carregar
                render();
            }
        };
        images.push(img);
    }

    // Renderizar frame específico
    function render() {
        const img = images[Math.floor(imageSequence.frame)];
        if (img && img.complete) {
            // Limpar canvas considerando o scale
            const dpr = window.devicePixelRatio || 1;
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;

            context.clearRect(0, 0, width, height);

            // Escala para cobrir "cover"
            const scale = Math.max(
                width / img.width,
                height / img.height
            );

            const x = (width / 2) - (img.width / 2) * scale;
            const y = (height / 2) - (img.height / 2) * scale;

            // Desenhar com anti-aliasing melhorado
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';

            context.drawImage(
                img,
                x, y,
                img.width * scale,
                img.height * scale
            );
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animação com GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageSequence, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '+=200%', // Reduzido para 200% para compensar menos frames
            scrub: 0,
            pin: true,
            anticipatePin: 1,
            // pin: true, // DUPLICADO REMOVIDO
            // anticipatePin: 1, // DUPLICADO REMOVIDO
            refreshPriority: 1
        },
        onUpdate: render
    });
}

// 3. Animações de Scroll nas Seções
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in para seções
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animação dos cards de serviço
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animação dos depoimentos
    gsap.utils.toArray('.depoimento-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Contador de estatísticas
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const value = stat.textContent;
        const numericValue = parseInt(value);

        if (!isNaN(numericValue)) {
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                onUpdate: function () {
                    const currentValue = Math.ceil(this.targets()[0].textContent);
                    stat.textContent = currentValue;
                }
            });
        }
    });
}

// 4. Formulário de Contato
function initFormSubmit() {
    const form = document.getElementById('form-contato');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Coletar dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Feedback visual
        const button = form.querySelector('.btn-submit');
        const originalText = button.textContent;
        button.textContent = 'Enviando...';
        button.disabled = true;

        // Simular envio
        setTimeout(() => {
            button.textContent = 'Enviado com sucesso!';
            button.style.background = '#4CAF50';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
                form.reset();
            }, 2000);
        }, 1500);
    });
}

// 5. Header com Scroll (Controlado pelo GSAP agora)
/*
let lastScroll = 0;
window.addEventListener('scroll', () => {
   // Lógica movida para o ScrollTrigger no initHeroSequence
});
*/

// 6. Efeito 3D nas Imagens
function init3DEffect() {
    const images = document.querySelectorAll('.content-image img, .processo-image img');

    images.forEach(img => {
        const container = img.parentElement;

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calcular rotação baseada na posição do mouse
            // Centro é 0,0
            const xPct = (x / rect.width) - 0.5;
            const yPct = (y / rect.height) - 0.5;

            // Limitar rotação a +/- 15 graus
            const rotateX = yPct * -15;
            const rotateY = xPct * 15;

            img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        container.addEventListener('mouseleave', () => {
            img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    });
}
