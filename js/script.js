// ========================================
// LANDING PAGE BEACH HOUSE - PLENITUR FLATS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Adiciona sombra ao scrollar
        if (currentScroll > 50) {
            header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }

        // Esconder header ao scrollar para baixo (opcional)
        // if (currentScroll > lastScroll && currentScroll > 100) {
        //     header.style.transform = 'translateY(-100%)';
        // } else {
        //     header.style.transform = 'translateY(0)';
        // }

        lastScroll = currentScroll;
    });

    // ========================================
    // SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
    // ========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Ignora links vazios ou apenas #
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // INTERSECTION OBSERVER - ANIMAÇÕES AO SCROLL
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll(
        '.diferencial-card, .galeria-item, .localizacao-feature'
    );

    animatedElements.forEach(el => observer.observe(el));

    // ========================================
    // GALERIA - LAZY LOADING
    // ========================================
    const galeriaImages = document.querySelectorAll('.galeria-item img');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    galeriaImages.forEach(img => {
        if (img.loading === 'lazy') {
            imageObserver.observe(img);
        }
    });

    // ========================================
    // WHATSAPP FLOAT BUTTON - ANALYTICS
    // ========================================
    const whatsappFloat = document.querySelector('.whatsapp-float');

    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', () => {
            // Analytics tracking (adicionar se necessário)
            console.log('WhatsApp Float Button Clicado');

            // Google Analytics (exemplo)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': 'WhatsApp Float Button'
                });
            }
        });
    }

    // ========================================
    // CTA BUTTONS - ANALYTICS TRACKING
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-hero, .btn-cta');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnText = btn.textContent.trim();
            console.log(`CTA Clicado: ${btnText}`);

            // Google Analytics (exemplo)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': btnText
                });
            }
        });
    });

    // ========================================
    // SCROLL INDICATOR - AUTO HIDE
    // ========================================
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }

    // ========================================
    // PERFORMANCE - PRELOAD IMAGES
    // ========================================
    const preloadImages = () => {
        const images = [
            'images/hero-piscina.jpg',
            'images/piscina-vista-mar.jpg'
        ];

        images.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    };

    // Executar preload após o carregamento inicial
    if (document.readyState === 'complete') {
        preloadImages();
    } else {
        window.addEventListener('load', preloadImages);
    }

    // ========================================
    // CONTADOR DE VISUALIZAÇÕES (OPCIONAL)
    // ========================================
    const trackPageView = () => {
        // Implementar tracking de visualizações
        // Pode ser integrado com Firebase, Google Analytics, etc.
        console.log('Página visualizada');
    };

    trackPageView();

    // ========================================
    // EASTER EGG - CONSOLE MESSAGE
    // ========================================
    console.log('%c🏖️ Beach House by Plenitur Flats', 'color: #1F6F8B; font-size: 20px; font-weight: bold;');
    console.log('%cHospedagem premium em João Pessoa 🌊', 'color: #3FB6A8; font-size: 14px;');
    console.log('%c📲 WhatsApp: (83) 99409-9595', 'color: #25D366; font-size: 12px;');

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', (e) => {
        // Fechar menu mobile com ESC
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // ========================================
    // COPY PROTECTION (OPCIONAL - PODE SER REMOVIDO)
    // ========================================
    // Descomente se quiser proteger as imagens
    /*
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    */

    // ========================================
    // FORM VALIDATION (SE ADICIONAR FORMULÁRIO)
    // ========================================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validação básica
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Enviar formulário
                console.log('Formulário válido - enviar');
                // form.submit();
            }
        });
    });

    // ========================================
    // DETECTAR DISPOSITIVO
    // ========================================
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 768;

    if (isMobile) {
        document.body.classList.add('is-mobile');
    }

    if (isTablet) {
        document.body.classList.add('is-tablet');
    }

    // ========================================
    // LOADING SCREEN (OPCIONAL)
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Se tiver uma tela de loading, remover aqui
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    });

    // ========================================
    // UTILITÁRIOS
    // ========================================

    // Debounce function para performance
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Throttle function para scroll
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // ========================================
    // LIGHTBOX - GALERIA DE FOTOS
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const galeriaItems = document.querySelectorAll('.galeria-item');

    let currentIndex = 0;
    const images = [];

    // Coletar todas as imagens da galeria
    galeriaItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.galeria-caption').textContent;

        images.push({
            src: img.src,
            alt: img.alt,
            caption: caption
        });

        // Adicionar cursor pointer e evento de clique
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Abrir lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    // Fechar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    // Atualizar conteúdo do lightbox
    function updateLightbox() {
        const current = images[currentIndex];
        lightboxImg.src = current.src;
        lightboxImg.alt = current.alt;
        lightboxCaption.textContent = current.caption;
        lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    // Próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    // Imagem anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // Event listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    // Fechar ao clicar fora da imagem
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });

    // ========================================
    // LOG FINAL
    // ========================================
    console.log('✅ Landing Page Beach Haus carregada com sucesso!');
    console.log('📸 Lightbox da galeria ativado - Clique nas fotos para visualizar');
});
