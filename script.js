// ========================================
// GLOBAL VARIABLES
// ========================================
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// ========================================
// PRODUCTS DATA - LENGKAP
// ========================================
const products = [
    // APP PREMIUM
    {
        category: 'app',
        name: 'Alight Motion Premium',
        description: 'Acc Buyer - Akun premium untuk edit video profesional',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Alight Motion Premium Acc Buyer 10k'
    },
    {
        category: 'app',
        name: 'Alight Motion Premium',
        description: 'Acc Generator - Generate akun sendiri',
        price: 'Rp 5.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Alight Motion Premium Acc Generator 5k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 35 Day',
        description: 'Private - 35 hari akses penuh',
        price: 'Rp 20.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 35 Day Private 20k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 28 Day',
        description: 'Private - 28 hari akses penuh',
        price: 'Rp 17.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 28 Day Private 17k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 21 Day',
        description: 'Private - 21 hari akses penuh',
        price: 'Rp 15.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 21 Day Private 15k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 14 Day',
        description: 'Private - 14 hari akses penuh',
        price: 'Rp 13.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 14 Day Private 13k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 7 Day',
        description: 'Private - 7 hari akses penuh',
        price: 'Rp 9.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 7 Day Private 9k'
    },
    {
        category: 'app',
        name: 'YouTube Premium',
        description: 'Via Invite - Tanpa iklan, download offline',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium Via Invite 2k'
    },
    {
        category: 'app',
        name: 'Canva Pro',
        description: 'Via Invite - Akses template & fitur premium',
        price: 'Rp 3.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro Via Invite 3k'
    },
    {
        category: 'app',
        name: 'VIU Premium',
        description: 'Streaming drama Korea tanpa iklan',
        price: 'Rp 4.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli VIU Premium 4k'
    },
    {
        category: 'app',
        name: 'Wink Premium 7D',
        description: 'Acc Seller - 7 hari edit foto AI',
        price: 'Rp 5.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Wink Premium 7D Acc Seller 5k'
    },
    {
        category: 'app',
        name: 'Wink Premium 7D',
        description: 'Acc Buyer - 7 hari edit foto AI',
        price: 'Rp 7.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Wink Premium 7D Acc Buyer 7k'
    },
    
    // JASA TOP UP & DESIGN
    {
        category: 'jasa',
        name: 'Jasa Suntik All Sosmed',
        description: 'Suntik followers, likes, views untuk semua sosial media',
        price: 'Mulai 5k',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Suntik All Sosmed'
    },
    {
        category: 'jasa',
        name: 'Jasa Pembuatan Logo',
        description: 'Design logo profesional custom sesuai keinginan',
        price: 'Rp 2.000 / Logo',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Pembuatan Logo 2k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid Watermark',
        description: 'Hilangkan watermark dari foto/video',
        price: 'Harga Nego',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Paid Watermark'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid GFX',
        description: 'Design grafis profesional untuk konten Anda',
        price: 'Harga Nego',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Paid GFX'
    },
    {
        category: 'jasa',
        name: 'Jasa Cover Saldo',
        description: 'Cover/Edit saldo untuk kebutuhan Anda',
        price: 'Harga Nego',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Cover Saldo'
    },
    {
        category: 'jasa',
        name: 'Jasa Pulsa',
        description: 'Top up pulsa semua operator dengan harga murah',
        price: 'Harga Murah',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Pulsa'
    },
    {
        category: 'jasa',
        name: 'Jasa Bug',
        description: 'Jasa bug aplikasi custom per bug',
        price: 'Rp 4.000 / Bug',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Bug 4k per bug'
    },
    {
        category: 'jasa',
        name: 'Jasa Buat Poster',
        description: 'Design poster custom sesuai kebutuhan Anda',
        price: 'Tergantung Poster',
        whatsappText: 'Halo BidzzStore, saya ingin tanya Jasa Buat Poster'
    },
    
    // APK BUG
    {
        category: 'apk',
        name: 'Apk Bug WhatsApp',
        description: 'Aplikasi bug WhatsApp dengan fitur lengkap',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Apk Bug WhatsApp 10k'
    },
    {
        category: 'apk',
        name: 'Apk Bug Telegram',
        description: 'Aplikasi bug Telegram dengan fitur lengkap',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Apk Bug Telegram 10k'
    },
    {
        category: 'apk',
        name: 'Murlog Men',
        description: 'Aplikasi murlog khusus untuk men',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Murlog Men 2k'
    },
    {
        category: 'apk',
        name: 'PT (Premium Tools)',
        description: 'Tools premium untuk berbagai kebutuhan',
        price: 'Rp 5.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli PT (Premium Tools) 5k'
    },
    {
        category: 'apk',
        name: 'OWN',
        description: 'Aplikasi OWN dengan fitur eksklusif',
        price: 'Rp 4.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli OWN 4k'
    },
    {
        category: 'apk',
        name: 'Mursun',
        description: 'Aplikasi mursun lengkap dan update',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Mursun 10k'
    },
    {
        category: 'apk',
        name: 'Apk Bug Input',
        description: 'Bug input dengan ban dan fitur lainnya',
        price: 'Rp 12.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Apk Bug Input 12k'
    },
    {
        category: 'apk',
        name: 'Apk QR Tanpa KTP',
        description: 'Generate QR tanpa perlu KTP',
        price: 'Rp 3.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Apk QR Tanpa KTP 3k'
    },
    {
        category: 'apk',
        name: 'Apk Hyrizz',
        description: 'Aplikasi Hyrizz dengan berbagai fitur',
        price: 'Rp 4.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Apk Hyrizz 4k'
    }
];

// ========================================
// MONEY PARTICLES EFFECT
// ========================================
function createMoneyParticle() {
    const particle = document.createElement('div');
    const symbols = ['💰', '💵', '💴', '💶', '💷', '💳', '🪙', '💸', '💎'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.textContent = symbol;
    particle.style.cssText = `
        position: fixed;
        font-size: ${15 + Math.random() * 15}px;
        pointer-events: none;
        z-index: 9998;
        left: ${Math.random() * window.innerWidth}px;
        top: -30px;
        opacity: 0.7;
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
            transform: translateY(${window.innerHeight + 50}px) rotate(${360 + Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(moneyStyle);

// ========================================
// TECH PARTICLES
// ========================================
function createTechParticle() {
    const particle = document.createElement('div');
    const colors = ['#ff6600', '#00d4ff', '#ffcc00'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: fixed;
        width: ${2 + Math.random() * 2}px;
        height: ${2 + Math.random() * 2}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * window.innerWidth}px;
        top: -10px;
        box-shadow: 0 0 10px ${color};
        animation: fall ${3 + Math.random() * 3}s linear;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

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

// ========================================
// LOADING ANIMATION WITH MONEY RAIN
// ========================================
let moneyInterval;
let techInterval;

window.addEventListener('load', () => {
    // Money rain during loading
    moneyInterval = setInterval(createMoneyParticle, 150);
    
    setTimeout(() => {
        clearInterval(moneyInterval);
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            document.body.style.overflow = 'auto';
            
            // Start tech particles after loading
            techInterval = setInterval(createTechParticle, 300);
        }, 500);
    }, 2500);
});

// ========================================
// CURSOR GLOW EFFECT (Desktop)
// ========================================
if (window.innerWidth > 768) {
    let lastTime = 0;
    const throttleDelay = 50;
    
    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastTime < throttleDelay) return;
        lastTime = currentTime;
        
        const cursorGlow = document.createElement('div');
        cursorGlow.style.cssText = `
            position: fixed;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 102, 0, 0.15), transparent 70%);
            pointer-events: none;
            z-index: 9997;
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
// MOBILE NAVIGATION
// ========================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

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
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ACTIVE NAVIGATION
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
// GLITCH EFFECT
// ========================================
let glitchInterval;
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        clearInterval(glitchInterval);
    } else {
        if (!glitchInterval) {
            glitchInterval = setInterval(() => {
                const heroTitle = document.querySelector('.hero-title');
                if (heroTitle && Math.random() > 0.95) {
                    heroTitle.style.textShadow = `
                        ${Math.random() * 5 - 2.5}px 0 #00d4ff,
                        ${Math.random() * 5 - 2.5}px 0 #ff6600
                    `;
                    setTimeout(() => {
                        heroTitle.style.textShadow = 'none';
                    }, 50);
                }
            }, 100);
        }
    }
});

// ========================================
// RENDER PRODUCTS
// ========================================
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach((product, index) => {
        const whatsappNumber = '6289660770777';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappText)}`;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.05}s`;
        
        const categoryName = {
            'app': '📱 App Premium',
            'jasa': '⚙️ Jasa',
            'apk': '🔧 Apk Bug'
        }[product.category];
        
        productCard.innerHTML = `
            <div class="product-category">${categoryName}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <a href="${whatsappLink}" target="_blank" class="buy-button">
                <span>💬 ORDER NOW</span>
            </a>
        `;
        
        // Mouse glow effect on card
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
// CATEGORY FILTER
// ========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        renderProducts(category);
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .contact-card, .wa-btn');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        const speed = 0.5;
        heroContent.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(255, 102, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.buy-button, .cta-button, .contact-button, .wa-btn')) {
        const button = e.target.closest('.buy-button, .cta-button, .contact-button, .wa-btn');
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
            background: rgba(255, 255, 255, 0.4);
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

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(2.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setTimeout(initScrollAnimations, 100);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    // Reduce particle frequency on low-end devices
    if (techInterval) {
        clearInterval(techInterval);
        techInterval = setInterval(createTechParticle, 600);
    }
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c💰 BIDZZSTORE 💰', 'color: #ff6600; font-size: 24px; font-weight: bold;');
console.log('%cKebutuhan Digital Lengkap', 'color: #00d4ff; font-size: 14px;');
console.log('%cWA: 0896-6077-0777', 'color: #ffcc00; font-size: 12px;');
console.log('%cIG: @bidzz_railway | TT: @garamdanlemon', 'color: #a0a0b0; font-size: 11px;');
