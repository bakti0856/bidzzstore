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
    },
    
    // TAMBAHAN APP PREMIUM
    {
        category: 'app',
        name: 'Bulk Alight Motion',
        description: 'Bulk akun Alight Motion premium',
        price: 'Mulai 10k',
        whatsappText: 'Halo BidzzStore, saya ingin beli Bulk Alight Motion mulai 10k'
    },
    {
        category: 'app',
        name: 'iQIYI Sharing 1 Bulan',
        description: 'Akun sharing iQIYI premium 1 bulan',
        price: 'Rp 20.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli iQIYI Sharing 1 Bulan 20k'
    },
    {
        category: 'app',
        name: 'Duolingo Premium 1 Bulan',
        description: 'Akses premium Duolingo untuk belajar bahasa',
        price: 'Mulai 10k',
        whatsappText: 'Halo BidzzStore, saya ingin beli Duolingo Premium 1 Bulan mulai 10k'
    },
    {
        category: 'app',
        name: 'Lightroom Premium',
        description: 'Lightroom premium selamanya',
        price: 'Rp 6.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Lightroom Premium 6k selamanya'
    },
    {
        category: 'app',
        name: 'Disney+ Premium',
        description: 'Streaming Disney+ dengan konten eksklusif',
        price: 'Rp 35.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Disney+ Premium 35k'
    },
    {
        category: 'app',
        name: 'Netflix Premium',
        description: 'Akun Netflix premium kualitas terbaik',
        price: 'Rp 50.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Netflix Premium 50k'
    },
    
    // TAMBAHAN JASA DESIGN
    {
        category: 'jasa',
        name: 'Color Grading',
        description: 'Jasa color grading untuk video/foto profesional',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Color Grading 2k'
    },
    {
        category: 'jasa',
        name: 'Mentahan GFX',
        description: 'File mentahan untuk design GFX',
        price: 'Rp 3.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Mentahan GFX 3k'
    },
    {
        category: 'jasa',
        name: 'Mentahan GFX Manip',
        description: 'File mentahan GFX manipulation premium',
        price: 'Rp 7.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Mentahan GFX Manip 7k'
    },
    {
        category: 'jasa',
        name: 'Mentahan Logo',
        description: 'File mentahan untuk design logo',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Mentahan Logo 2k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid JJ 3D',
        description: 'Jasa paid editing JJ dengan efek 3D',
        price: 'Rp 20.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid JJ 3D 20k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid JJ Biasa',
        description: 'Jasa paid editing JJ standar',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid JJ Biasa 10k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid JJ Pap',
        description: 'Jasa paid editing JJ pap',
        price: 'Rp 5.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid JJ Pap 5k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid VT Tugas',
        description: 'Jasa paid video tugas per 1 menit',
        price: 'Rp 15.000 / Menit',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid VT Tugas 15k per menit'
    },
    {
        category: 'jasa',
        name: 'Jasa Buat Sound',
        description: 'Jasa pembuatan sound design profesional',
        price: 'Mulai 55k',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Buat Sound mulai 55k'
    },
    
    // JASA PAID TAMBAHAN
    {
        category: 'jasa',
        name: 'Jasa Paid WM Ready',
        description: 'Watermark ready langsung pakai, proses cepat',
        price: 'Rp 15.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid WM Ready 15k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid WM Custom',
        description: 'Watermark custom sesuai request Anda',
        price: 'Rp 25.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid WM Custom 25k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid GFX',
        description: 'Design GFX profesional untuk konten',
        price: 'Rp 16.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid GFX 16k'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid GFX Manip Bergerak',
        description: 'GFX manipulation dengan efek motion/bergerak',
        price: 'Rp 40.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid GFX Manip Bergerak 40k'
    },
    {
        category: 'jasa',
        name: 'Pulsa All Operator',
        description: 'Top up pulsa semua operator (Telkomsel, XL, Indosat, dll)',
        price: 'Tergantung Operator',
        whatsappText: 'Halo BidzzStore, saya ingin top up pulsa'
    },
    {
        category: 'jasa',
        name: 'Jasa Paid Poster',
        description: 'Design poster profesional sesuai kebutuhan',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin pesan Jasa Paid Poster 10k'
    },
    {
        category: 'jasa',
        name: 'Sewa Bot WhatsApp',
        description: 'Bot WA untuk auto reply & broadcast per bulan',
        price: 'Rp 15.000 / Bulan',
        whatsappText: 'Halo BidzzStore, saya ingin sewa Bot WhatsApp 15k/bulan'
    },
    
    // APP PREMIUM - ALIGHT MOTION
    {
        category: 'app',
        name: 'Alight Motion Sharing',
        description: 'AM Premium sharing - Akses murah meriah',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Alight Motion Sharing 2k'
    },
    
    // APP PREMIUM - CAPCUT EXTENDED
    {
        category: 'app',
        name: 'CapCut Pro 6 Bulan',
        description: 'CapCut Premium 6 bulan akses penuh',
        price: 'Rp 35.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 6 Bulan 35k'
    },
    {
        category: 'app',
        name: 'CapCut Pro 1 Tahun',
        description: 'CapCut Premium 1 tahun full akses',
        price: 'Rp 70.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli CapCut Pro 1 Tahun 70k'
    },
    
    // YOUTUBE PREMIUM VARIANTS
    {
        category: 'app',
        name: 'YouTube Premium 1 Bulan',
        description: 'YT Premium 1 bulan tanpa iklan',
        price: 'Rp 2.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium 1 Bulan 2k'
    },
    {
        category: 'app',
        name: 'YouTube Premium 2 Bulan',
        description: 'YT Premium 2 bulan tanpa iklan',
        price: 'Rp 4.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium 2 Bulan 4k'
    },
    {
        category: 'app',
        name: 'YouTube Premium 3 Bulan',
        description: 'YT Premium 3 bulan tanpa iklan',
        price: 'Rp 6.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium 3 Bulan 6k'
    },
    {
        category: 'app',
        name: 'YouTube Premium 4 Bulan',
        description: 'YT Premium 4 bulan tanpa iklan',
        price: 'Rp 8.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium 4 Bulan 8k'
    },
    {
        category: 'app',
        name: 'YouTube Premium 5 Bulan',
        description: 'YT Premium 5 bulan tanpa iklan',
        price: 'Rp 12.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli YouTube Premium 5 Bulan 12k'
    },
    
    // SPOTIFY FAMILY PLAN
    {
        category: 'app',
        name: 'Spotify Famplan 1 Bulan Full Garansi',
        description: 'Family plan 1 bulan dengan garansi penuh',
        price: 'Rp 16.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Famplan 1 Bulan Full Garansi 16k'
    },
    {
        category: 'app',
        name: 'Spotify Famplan 1 Bulan Gar 7H',
        description: 'Family plan 1 bulan garansi 7 hari',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Famplan 1 Bulan Gar 7H 10k'
    },
    {
        category: 'app',
        name: 'Spotify Famplan 1 Bulan Gar 3H',
        description: 'Family plan 1 bulan garansi 3 hari',
        price: 'Rp 4.700',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Famplan 1 Bulan Gar 3H 4.7k'
    },
    {
        category: 'app',
        name: 'Spotify Famplan 2 Bulan Full Garansi',
        description: 'Family plan 2 bulan dengan garansi penuh',
        price: 'Rp 26.500',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Famplan 2 Bulan Full Garansi 26.5k'
    },
    
    // SPOTIFY INDIVIDUAL PLAN
    {
        category: 'app',
        name: 'Spotify Indplan 1 Bulan No Garansi',
        description: 'Individual plan 1 bulan tanpa garansi',
        price: 'Rp 9.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Indplan 1 Bulan No Garansi 9k'
    },
    {
        category: 'app',
        name: 'Spotify Indplan 1 Bulan Full Garansi',
        description: 'Individual plan 1 bulan dengan garansi penuh',
        price: 'Rp 17.700',
        whatsappText: 'Halo BidzzStore, saya ingin beli Spotify Indplan 1 Bulan Full Garansi 17.7k'
    },
    
    // CANVA PRO VARIANTS
    {
        category: 'app',
        name: 'Canva Pro 1 Bulan',
        description: 'Canva Pro akses 1 bulan',
        price: 'Rp 1.500',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro 1 Bulan 1.5k'
    },
    {
        category: 'app',
        name: 'Canva Pro 2 Bulan',
        description: 'Canva Pro akses 2 bulan',
        price: 'Rp 2.500',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro 2 Bulan 2.5k'
    },
    {
        category: 'app',
        name: 'Canva Pro 3 Bulan',
        description: 'Canva Pro akses 3 bulan',
        price: 'Rp 3.500',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro 3 Bulan 3.5k'
    },
    {
        category: 'app',
        name: 'Canva Pro 1 Tahun',
        description: 'Canva Pro akses 1 tahun penuh',
        price: 'Rp 5.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro 1 Tahun 5k'
    },
    {
        category: 'app',
        name: 'Canva Pro Designer',
        description: 'Canva Pro + Designer fitur tambahan (+3K dari harga dasar)',
        price: 'Mulai 4.500',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Pro Designer'
    },
    {
        category: 'app',
        name: 'Canva Lifetime EDU',
        description: 'Canva akses selamanya dengan akun EDU',
        price: 'Rp 10.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Lifetime EDU 10k'
    },
    {
        category: 'app',
        name: 'Canva Admin 30 Hari',
        description: 'Canva Admin 30 hari - Bisa invite 30 orang, Garansi 7 hari',
        price: 'Rp 7.000',
        whatsappText: 'Halo BidzzStore, saya ingin beli Canva Admin 30 Hari 7k'
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
