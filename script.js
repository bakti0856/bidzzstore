// ========================================
// GLOBAL VARIABLES
// ========================================
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const productsGrid = document.getElementById('productsGrid');

// ========================================
// PRODUCTS DATA - APLIKASI PREMIUM
// ========================================
const products = [
    {
        name: 'Alight Motion Pro',
        description: '🎬 Edit video profesional dengan animasi motion graphics, efek VFX, dan multi-layer editing',
        price: 'Rp 5.000',
        payment: 'QRIS, Dana, Gopay, OVO',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
              </svg>`,
        whatsappText: 'Halo BidzzStore, saya ingin membeli Alight Motion Pro seharga Rp 5.000'
    },
    {
        name: 'CapCut Pro',
        description: '✂️ Video editor powerful dengan AI tools, template premium, dan export tanpa watermark',
        price: 'Rp 20.000',
        payment: 'QRIS, Dana, Gopay, OVO',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>`,
        whatsappText: 'Halo BidzzStore, saya ingin membeli CapCut Pro seharga Rp 20.000'
    },
    {
        name: 'VIU Premium',
        description: '📺 Streaming drama Korea, variety show, dan konten Asia tanpa iklan dengan kualitas HD',
        price: 'Rp 5.000',
        payment: 'QRIS, Dana, Gopay, OVO',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                <line x1="2" y1="20" x2="2.01" y2="20"></line>
              </svg>`,
        whatsappText: 'Halo BidzzStore, saya ingin membeli VIU Premium seharga Rp 5.000'
    },
    {
        name: 'Canva Pro',
        description: '🎨 Akses penuh ke jutaan template, foto premium, font eksklusif, dan fitur design tools',
        price: 'Rp 5.000',
        payment: 'QRIS, Dana, Gopay, OVO',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>`,
        whatsappText: 'Halo BidzzStore, saya ingin membeli Canva Pro seharga Rp 5.000'
    },
    {
        name: 'Spotify Premium',
        description: '🎵 Nikmati musik tanpa iklan, download lagu offline, dan audio quality tinggi',
        price: 'Rp 15.000',
        payment: 'QRIS, Dana, Gopay, OVO',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14.5c1.5-1 4-1 5.5 0M7.5 10.5c2.5-1.5 6.5-1.5 9 0"></path>
              </svg>`,
        whatsappText: 'Halo BidzzStore, saya ingin membeli Spotify Premium seharga Rp 15.000'
    },
    {
    name: 'Wink Pro',
    description: '✨ AI video editor dengan retouching wajah otomatis, smooth filter, dan body reshaping',
    price: 'Rp 6.000',
    payment: 'QRIS, Dana, Gopay, OVO',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <path d="M15 9c-.5.5-.5 1.5 0 2"></path>
          </svg>`,
    whatsappText: 'Halo BidzzStore, saya ingin membeli Wink Pro seharga Rp 6.000'
},
{
    name: 'YouTube Premium',
    description: '▶️ Tonton video tanpa iklan, background play, dan download untuk offline viewing',
    price: 'Rp 15.000',
    payment: 'QRIS, Dana, Gopay, OVO',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>`,
    whatsappText: 'Halo BidzzStore, saya ingin membeli YouTube Premium seharga Rp 15.000'
}
];

// ========================================
// MONEY PARTICLES EFFECT
// ========================================
function createMoneyParticle() {
    const particle = document.createElement('div');
    const symbols = ['💰', '💵', '💴', '💶', '💷', '💳', '🪙', '💸'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.textContent = symbol;
    particle.style.cssText = `
        position: fixed;
        font-size: ${15 + Math.random() * 15}px;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * window.innerWidth}px;
        top: -30px;
        opacity: 0.6;
        animation: fall-money ${3 + Math.random() * 4}s linear;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Add CSS animation for money particles
const moneyStyle = document.createElement('style');
moneyStyle.textContent = `
    @keyframes fall-money {
        to {
            transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(moneyStyle);

// Create money particles periodically during loading
let moneyInterval;

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    // Create money particles during loading
    moneyInterval = setInterval(createMoneyParticle, 200);
    
    // Simulate loading time
    setTimeout(() => {
        clearInterval(moneyInterval);
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            document.body.style.overflow = 'auto';
        }, 500);
    }, 3000);
});

// ========================================
// MOBILE NAVIGATION
// ========================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ACTIVE NAVIGATION LINK
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========================================
// RENDER PRODUCTS
// ========================================
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const whatsappNumber = '6289660770777'; // Nomor WhatsApp dari logo
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappText)}`;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="product-icon">
                ${product.icon}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-payment">${product.payment}</div>
            <a href="${whatsappLink}" target="_blank" class="buy-button">
                <span>🛒 BUY NOW</span>
            </a>
        `;
        
        // Add mouse move effect for glow
        productCard.addEventListener('mousemove', (e) => {
            const rect = productCard.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            productCard.style.setProperty('--x', `${x}%`);
            productCard.style.setProperty('--y', `${y}%`);
        });
        
        productsGrid.appendChild(productCard);
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// GLITCH EFFECT
// ========================================
let glitchInterval;
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        clearInterval(glitchInterval);
    } else {
        if (!glitchInterval) {
            glitchInterval = setInterval(() => {
                const glitchText = document.querySelector('.glitch-text');
                if (glitchText && Math.random() > 0.95) {
                    glitchText.style.textShadow = `
                        ${Math.random() * 10 - 5}px 0 #00d4ff,
                        ${Math.random() * 10 - 5}px 0 #ff6600
                    `;
                    setTimeout(() => {
                        glitchText.style.textShadow = 'none';
                    }, 50);
                }
            }, 100);
        }
    }
});

// ========================================
// FLOATING COINS EFFECT IN HERO
// ========================================
function createFloatingCoin() {
    const coin = document.createElement('div');
    coin.textContent = '🪙';
    coin.style.cssText = `
        position: absolute;
        font-size: 30px;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        bottom: -50px;
        opacity: 0.4;
        animation: float-up ${5 + Math.random() * 5}s ease-in-out infinite;
    `;
    
    const heroCoins = document.querySelector('.floating-coins');
    if (heroCoins) {
        heroCoins.appendChild(coin);
        
        setTimeout(() => {
            coin.remove();
        }, 10000);
    }
}

// Add CSS animation for floating coins
const coinStyle = document.createElement('style');
coinStyle.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.4;
        }
        90% {
            opacity: 0.4;
        }
        100% {
            transform: translateY(-${window.innerHeight}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(coinStyle);

// Create floating coins periodically
setInterval(createFloatingCoin, 2000);

// ========================================
// CURSOR GLOW EFFECT (Desktop only)
// ========================================
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const cursorGlow = document.createElement('div');
        cursorGlow.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 102, 0, 0.1), transparent 70%);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(cursorGlow);
        
        setTimeout(() => {
            cursorGlow.style.opacity = '0';
            setTimeout(() => {
                cursorGlow.remove();
            }, 300);
        }, 100);
    });
}

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(255, 102, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// TECH PARTICLES
// ========================================
function createTechParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #ff6600;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * window.innerWidth}px;
        top: -10px;
        box-shadow: 0 0 10px #ff6600;
        animation: fall ${3 + Math.random() * 3}s linear;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Add CSS animation for tech particles
const techStyle = document.createElement('style');
techStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(techStyle);

// Create tech particles periodically
setInterval(createTechParticle, 400);

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.buy-button, .cta-button, .contact-button')) {
        const button = e.target.closest('.buy-button, .cta-button, .contact-button');
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setTimeout(initScrollAnimations, 100);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduced-motion');
    
    const reducedMotionStyle = document.createElement('style');
    reducedMotionStyle.textContent = `
        .reduced-motion * {
            animation-duration: 0.5s !important;
            transition-duration: 0.2s !important;
        }
    `;
    document.head.appendChild(reducedMotionStyle);
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c💰 BIDZZSTORE 💰', 'color: #ff6600; font-size: 24px; font-weight: bold;');
console.log('%cPremium Apps Marketplace', 'color: #00d4ff; font-size: 14px;');
console.log('%cWA: 0896-6077-0777', 'color: #ffcc00; font-size: 12px;');
console.log('%cIG: @bidzz_railway | TT: @garamdanlemon', 'color: #a0a0b0; font-size: 12px;');