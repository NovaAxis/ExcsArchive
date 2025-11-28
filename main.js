// Translation System
const translations = {
    en: {
        title: "Executors Archive",
        searchPlaceholder: "Search executors...",
        sortBy: "Sort By",
        device: "Device",
        all: "All",
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortUncDesc: "UNC (High-Low)",
        sortUncAsc: "UNC (Low-High)",
        sortSuncDesc: "sUNC (High-Low)",
        sortSuncAsc: "sUNC (Low-High)",
        download: "Download",
        info: "Info",
        locked: "Locked",
        features: "Features",
        disclaimerTitle: "Disclaimer",
        disclaimerText: "The site is not responsible for the use of executors, any possible risks, or consequences. Use them at your own risk.",
        cancel: "Cancel",
        continue: "I Understand, Continue",
        footerText: "Executors Archive by CreatorNovaAxis (⚠️ Disclaimer: The author is not responsible for the use of Executors, any possible risks or consequences.)",
        supportAllScripts: "SUPPORT ALL SCRIPTS",
        whatIsSunc: "What is sUNC?",
        copySunc: "Copy sUNC Script",
        scriptCopied: "Script Copied!"
    },
    ru: {
        title: "Архив Экзекьюторов",
        searchPlaceholder: "Поиск экзекьюторов...",
        sortBy: "Сортировка",
        device: "Устройство",
        all: "Все",
        sortNameAsc: "Имя (А-Я)",
        sortNameDesc: "Имя (Я-А)",
        sortUncDesc: "UNC (Высокий-Низкий)",
        sortUncAsc: "UNC (Низкий-Высокий)",
        sortSuncDesc: "sUNC (Высокий-Низкий)",
        sortSuncAsc: "sUNC (Низкий-Высокий)",
        download: "Скачать",
        info: "Инфо",
        locked: "Заблокировано",
        features: "Функции",
        disclaimerTitle: "Отказ от ответственности",
        disclaimerText: "Сайт не несет ответственности за использование экзекьюторов, любые возможные риски или последствия. Используйте их на свой страх и риск.",
        cancel: "Отмена",
        continue: "Понятно, Продолжить",
        footerText: "Архив Экзекьюторов от CreatorNovaAxis (⚠️ Отказ от ответственности: Автор не несет ответственности за использование экзекьюторов, любые возможные риски или последствия.)",
        supportAllScripts: "ПОДДЕРЖКА ВСЕХ СКРИПТОВ",
        whatIsSunc: "Что такое sUNC?",
        copySunc: "Копировать sUNC скрипт",
        scriptCopied: "Скрипт скопирован!"
    }
};

const SUNC_SCRIPT = 'getgenv().sUNCDebug = {\n    ["printcheckpoints"] = false,\n    ["delaybetweentests"] = 0,\n    ["printtesttimetaken"] = false,\n}\nloadstring(game:HttpGet("https://script.sunc.su/"))()';

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('option[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    processData();
}

const executorsData = [
    {
        id: 1,
        name: "Bunni",
        description: "UNDETECTED from CM bans! Free keyed LUA executor with high UNC and amazing script compatibility!",
        device: "Windows",
        unc: "95",
        sunc: "98",
        image: "https://i.ytimg.com/vi/ZvTlS8s4-us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAUatj_qZCG3hoDFjmXWNdikND9cg",
        features: ["Editor", "Script Hub", "Fast Key System", "User-friendly UI", "Optimized performance"],
        downloadUrl: "https://discord.gg/bunnilol",
        scrapId: "WpwrKdpIfaDE4Xc2",
        scrapKey: "yge9xJKAMcbpo5SergRhV7X594EHc7n8"
    },
    {
        id: 2,
        name: "Cryptic",
        description: "Cryptic is a revolutionary new way to experience the world of scripting with its extensive library of features that will make your life easier.",
        device: "Android",
        unc: "93",
        sunc: "95",
        image: "https://cdn.discordapp.com/attachments/1268345994098114611/1417881267780718643/Cryptic_Android_iOS_UI_Teaser.mp4?ex=69270fd5&is=6925be55&hm=5c71415bdab8d6fb70c66f7c7f4de9f63d69254b5ca78bbfd5e8fefc2f103044&",
        features: ["Editor", "Script Hub", "Fast Key System", "User-friendly UI", "Optimized performance"],
        downloadUrl: "https://getcryptic.net/",
        scrapId: "O720fah01KvOSZXk",
        scrapKey: "xR5nJwPKPMXp9umzEbnfZZypKqimhyye",
    },
    {
        id: 3,
        name: "Codex",
        description: "Supported low-end PCs and let you enjoy the stable and smooth. Unleashes your graphics performance with exclusive graphics technology, supports high frame rate and 4K-quality graphics. New keyboard & mouse plan restores the PC experience for you. Take control in the game with ease.",
        device: "Android",
        unc: "93",
        sunc: "95",
        image: "https://media.discordapp.net/attachments/1014591387552981022/1443147527246581770/image.png?ex=692954de&is=6928035e&hm=4fceba5c24d1df30e7bb97c7e5d736b3101593b0ca721097a66af874e21f3fe8&=&format=png&quality=lossless&width=1403&height=791",
        features: ["Editor", "Script Hub", "Anti AFk"],
        downloadUrl: "https://codex.lol/android",
        scrapId: "5o8W4Tjjx5VLSv7V",
        scrapKey: "Ij88MGD5oUGrwa5Azs2TQUOB6YtY08Cp",
    },
    {
        id: 4,
        name: "Codex",
        description: "Supported low-end PCs and let you enjoy the stable and smooth. Unleashes your graphics performance with exclusive graphics technology, supports high frame rate and 4K-quality graphics. New keyboard & mouse plan restores the PC experience for you. Take control in the game with ease.",
        device: "iOS",
        unc: "90-93",
        sunc: "95",
        image: "https://codex.lol/_next/image?url=%2Fassets%2Fios.webp&w=1200&q=75",
        features: ["Editor", "Script Hub", "Anti AFk"],
        downloadUrl: "https://codex.lol/ios",
        scrapId: "5o8W4Tjjx5VLSv7V",
        scrapKey: "Ij88MGD5oUGrwa5Azs2TQUOB6YtY08Cp",
    },
    {
        id: 5,
        name: "Delta",
        description: "Delta is a revolutionary new way to experience the world of scripting with its extensive library of features that will make your life easier.",
        device: "Android",
        unc: "98",
        sunc: "100",
        image: "https://media.discordapp.net/attachments/1176478833080279071/1443084080144060496/image.png?ex=6927c847&is=692676c7&hm=773e36cb6f4afeae08fc8e3bf90c10686cb164fbe1b3a95aad617d65db23e3a6&=&format=png&quality=lossless&width=1725&height=791",
        features: ["Fast updates", "24/7 Support", "Secure", "Free", "Industry-leading performance"],
        downloadUrl: "https://deltaexploits.gg/delta-executor-android",
        scrapId: "ZIzKcFOJTdz5DJz4",
        scrapKey: "viGn5XXwhnXLXr2nCprero3jkNOOc1tv",
    },
    {
        id: 6,
        name: "Delta",
        description: "Delta is a revolutionary new way to experience the world of scripting with its extensive library of features that will make your life easier.",
        device: "iOS",
        unc: "98",
        sunc: "100",
        image: "https://media.discordapp.net/attachments/1176478833080279071/1443084080144060496/image.png?ex=6927c847&is=692676c7&hm=773e36cb6f4afeae08fc8e3bf90c10686cb164fbe1b3a95aad617d65db23e3a6&=&format=png&quality=lossless&width=1725&height=791",
        features: ["Fast updates", "24/7 Support", "Secure", "Free", "Industry-leading performance"],
        downloadUrl: "https://deltaexploits.gg/delta-executor-ios",
        scrapId: "ZIzKcFOJTdz5DJz4",
        scrapKey: "viGn5XXwhnXLXr2nCprero3jkNOOc1tv",
    },
    {
        id: 7,
        name: "FluxusZ",
        description: "A Powerful IDE Experience",
        device: "Android",
        unc: "99",
        sunc: "96",
        image: "https://media.discordapp.net/attachments/1420391512705073335/1442690194171236534/image.png?ex=6927aaf2&is=69265972&hm=7edd2409606ee18816ed5804c66071e5661a38dafce6c6b21a6a62c62e3a8511&=&format=png&quality=lossless&width=1280&height=791",
        features: ["99% UNC Support", "Fast Key System", "User-friendly UI", "Optimized performance", "Customer Care"],
        downloadUrl: "https://fluxusz.com/download",
        scrapId: "QkiTX0UIepwOaeUp",
        scrapKey: "tVX3nPqbKwu6v3qDLSYejfpD4N3Ap8wp",
    },
    {
        id: 8,
        name: "FluxusZ",
        description: "A Powerful IDE Experience",
        device: "Windows",
        unc: "??",
        sunc: "??",
        image: "https://media.discordapp.net/attachments/1420391512705073335/1443159920982884506/image-8.png?ex=69296069&is=69280ee9&hm=bba13a21d073b28f136e221cc86018d0a2c0b6bf0d786e7bfd38f22dfeb869d5&=&format=png&quality=lossless&width=1110&height=776",
        downloadUrl: "https://fluxusz.com/download",
        locked: "Coming Soon",
        scrapId: "",
        scrapKey: "",
    },
    {
        id: 9,
        name: "Krnl",
        description: "Krnl's Is Back!",
        device: "Android",
        unc: "95",
        sunc: "92",
        image: "https://wearedevs.net/images/krnl/executor.webp",
        features: ["Fast Key System", "Basic Key System", "User-friendly UI"],
        downloadUrl: "https://krnl.cat",
        locked: "Down",
        scrapId: "CzL6p1XppEjYtKkf",
        scrapKey: "pqDTosSof2wihzfovrYtbkULMBsgYAD3",
    },
    {
        id: 10,
        name: "Krnl",
        description: "Krnl's Is Back!",
        device: "iOS",
        unc: "90-95",
        sunc: "90-92",
        image: "https://wearedevs.net/images/krnl/settings.webp",
        features: ["Fast Key System", "Basic Key System", "User-friendly UI"],
        downloadUrl: "https://krnl.cat",
        locked: "Down",
        scrapId: "CzL6p1XppEjYtKkf",
        scrapKey: "pqDTosSof2wihzfovrYtbkULMBsgYAD3",
    },
    {
        id: 11,
        name: "Krnl",
        description: "Krnl's Is Back!",
        device: "Windows",
        unc: "99",
        sunc: "??",
        image: "https://media.discordapp.net/attachments/1176478833080279071/1443660817810591844/image.png?ex=6929e168&is=69288fe8&hm=6468eb263b7bfbd8ed0cec180d09e5230086096ea7cced09fd002ec40ff13d28&=&format=png&quality=lossless&width=833&height=440",
        features: ["Fast Key System", "Basic Key System", "User-friendly UI"],
        downloadUrl: "https://krnl.cat",
        locked: "Down",
        scrapId: "CzL6p1XppEjYtKkf",
        scrapKey: "pqDTosSof2wihzfovrYtbkULMBsgYAD3",
    },
    {
        id: 12,
        name: "Luna",
        description: "Luna is GOOD variant of executor.",
        device: "Windows",
        unc: "80",
        sunc: "50+-",
        image: "https://media.discordapp.net/attachments/1313897187104784407/1390897193958903849/image-20.png?ex=69271cb4&is=6925cb34&hm=506866c28b9aceaf245898de27ede1723bf751b8ea9587193f483f5b18ea0656&=&format=png&quality=lossless&width=1372&height=791",
        features: ["Optimization", "Clean UI", "Fast updates"],
        downloadUrl: "https://discord.gg/ZR2f4JCUHd",
        scrapId: "",
        scrapKey: "",
    },
    {
        id: 13,
        name: "Luna",
        description: "Luna is GOOD variant of executor.",
        device: "MacOS",
        unc: "80+-",
        sunc: "50+-",
        image: "https://media.discordapp.net/attachments/1176478833080279071/1443083507818692648/image.png?ex=6929c1ff&is=6928707f&hm=b832d6304ea7cd0ba7a7684e42850e33afefda26815d68e124e51037ae8e58ab&=&format=png&quality=lossless&width=1007&height=928",
        features: ["Optimization", "Clean UI", "Fast updates"],
        downloadUrl: "https://discord.gg/ZR2f4JCUHd",
        scrapId: "",
        scrapKey: "",
    },
    {
        id: 14,
        name: "Neutron",
        description: "A Free Roblox Executor for running scripts.",
        device: "Android",
        unc: "99",
        sunc: "95",
        image: "https://files.catbox.moe/ivlsxi.png",
        features: ["Smooth UI", "Secure", "Fast updates", "Easy Key System"],
        downloadUrl: "https://www.neutron-executor.xyz/download?platform=android",
        scrapId: "C20xrwJegxWBn9sb",
        scrapKey: "j4XiBlTkEDDXUeLvRIA3DJv0inNzFwHv",
    },
    {
        id: 15,
        name: "SkibX",
        description: "Enhance your Roblox gameplay with scripting",
        device: "Android",
        unc: "85",
        sunc: "??",
        image: "https://cdn.discordapp.com/attachments/1419687337872593017/1427703638263857192/ScreenRecording_10-14-2025_18-54-11_1.mov?ex=69273320&is=6925e1a0&hm=a7efb79b0c10e6b08efd34d4fc3e407d6bc8c71e7b863cbbc30f0f6bd04bcee6&",
        features: ["Enhanced Controls", "Mobile Editor", "Performance Boost", "Secure Login"],
        downloadUrl: "https://www.neutron-executor.xyz/download?platform=android",
        scrapId: "",
        scrapKey: "",
    },
    {
        id: 16,
        name: "Trigon Evo",
        description: "Trigon Evo is a powerful Roblox Lua IDE and script executor that allows you to run and test Lua scripts with ease.",
        device: "Android",
        unc: "90",
        sunc: "92",
        image: "https://trigonevo.com/wp-content/uploads/2024/09/rscripthub-1-768x432.png",
        features: ["Optimization", "Clean UI", "Fast updates"],
        downloadUrl: "https://trigonevo.com/android/",
        scrapId: "CzL6p1XppEjYtKkf",
        scrapKey: "pqDTosSof2wihzfovrYtbkULMBsgYAD3",
    },
    {
        id: 17,
        name: "Seraphin",
        description: "A Powerful IDE Experience",
        device: "Windows",
        unc: "90+-",
        sunc: "50+-",
        image: "https://media.discordapp.net/attachments/1414420162236518420/1442403035983773766/image.png?ex=69274842&is=6925f6c2&hm=33428bf801108a2a76b5da5d6cf83bfa1181d552c1700811d55751875f562657&=&format=png&quality=lossless&width=1406&height=790",
        features: ["Fast Execution", "Editor", "User-friendly UI"],
        downloadUrl: "https://discord.gg/EKpwfAEdHQ",
        scrapId: "",
        scrapKey: "",
    },
        {
        id: 17,
        name: "Solara",
        description: "The First & Best External Executor After Byfron.",
        device: "Windows",
        unc: "66",
        sunc: "50-60",
        image: "https://getsolara.dev/images/ZcuuVmilcebEnChOsuR2BUkeLE.png",
        features: ["Editor", "Script Hub", "User-friendly UI"],
        downloadUrl: "https://getsolara.dev/",
        scrapId: "",
        scrapKey: "",
    },
    {
        id: 18,
        name: "Vega X",
        description: "Vega x good executor!",
        device: "Android",
        unc: "90",
        sunc: "96",
        image: "https://media.discordapp.net/attachments/1176478833080279071/1443084686132904058/image.png?ex=6927c8d8&is=69267758&hm=25546031ba57289632722ddbbd4786d690f8e11fbfbe30b4a8b48fc670d78c85&=&format=png&quality=lossless&width=963&height=512",
        features: ["Fast Execution", "Clean UI", "Script Hub"],
        downloadUrl: "https://vegax.gg/",
        scrapId: "OMX87D3mI63u3B87",
        scrapKey: "SwuU6dps6GyMxjCvJwA6GPVFsYe4vYN7",
    },
    {
        id: 19,
        name: "Xeno",
        description: "Xeno provides lightning-fast execution, external script support, and a simple interface - all completely free and keyless.",
        device: "Windows",
        unc: "83",
        sunc: "40+-",
        image: "https://www.xeno.onl/images/Xeno-V1.2.0.png",
        features: ["Optimization", "Good UI", "Fast updates"],
        downloadUrl: "https://www.xeno.onl/download",
        scrapId: "",
        scrapKey: "",
    },
        {
        id: 20,
        name: "Xeno (New UI)",
        description: "Xeno provides lightning-fast execution, external script support, and a simple interface - all completely free and keyless.",
        device: "Windows",
        unc: "83",
        sunc: "40+-",
        image: "https://www.xeno.onl/images/Xeno-V1.3.0aBETA.png",
        features: ["Optimization", "Clean UI", "Fast updates"],
        downloadUrl: "https://www.xeno.onl/download",
        scrapId: "",
        scrapKey: "",
    },
];

// State
let currentFilter = 'all';
let currentSort = 'name-asc';
let searchQuery = '';

// DOM Elements
const grid = document.getElementById('executorsGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const deviceFilters = document.getElementById('deviceFilters');
const modal = document.getElementById('infoModal');
const closeModal = document.querySelector('.close-modal');

// Global function to open sUNC modal
window.openSuncModal = function (id) {
    const exe = executorsData.find(item => item.id === id);
    if (!exe) return;

    const suncModal = document.getElementById('suncModal');
    document.getElementById('suncModalTitle').textContent = exe.name + ' - sUNC Test';
    document.getElementById('suncModalValue').textContent = exe.sunc + '%';

    // Widget Logic
    const widgetContainer = document.getElementById('suncWidgetContainer');
    const widgetIframe = document.getElementById('sunc-widget');

    if (exe.scrapId && widgetContainer && widgetIframe) {
        widgetContainer.classList.remove('hidden');

        // Load Scrap
        widgetIframe.contentWindow.postMessage({
            type: "sunc-widget:loadScrap",
            payload: {
                scrapId: exe.scrapId,
                key: exe.scrapKey || ""
            }
        }, "https://sunc.rubis.app");

        // Set Theme
        widgetIframe.contentWindow.postMessage({
            type: "sunc-widget:setTheme",
            payload: {
                dark: "#101012",
                light: "#1a1a20",
                lighter: "#26262f",
                sunc: "#7c3aed",
                suncLighter: "#a78bfa",
                grey: "#9ca3af",
                lightText: "#f3f4f6",
                success: "#10b981",
                failure: "#ef4444",
                useDarkLogo: true
            }
        }, "https://sunc.rubis.app");

    } else if (widgetContainer) {
        widgetContainer.classList.add('hidden');
    }

    suncModal.classList.add('show');
}

// Initialize
function init() {
    renderCards(executorsData);
    setupEventListeners();
}

// Render Cards
// Замените старую функцию renderCards на эту:
function renderCards(data) {
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No executors found matching your criteria.</div>';
        return;
    }

    data.forEach((exe, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        if (exe.locked) {
            card.classList.add('locked');
        }

        // Check if image is a video
        const isVideo = exe.image.includes('.mp4') ||
            exe.image.includes('.mov') ||
            (exe.image.includes('discordapp.com/attachments') && (exe.image.includes('.mp4') || exe.image.includes('.mov')));

        let mediaContent;
        if (isVideo) {
            mediaContent = `<video src="${exe.image}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>`;
        } else {
            mediaContent = `<img src="${exe.image}" alt="${exe.name}">`;
        }

        // Locked Badge
        const lockedBadge = exe.locked ? `<div class="locked-badge">${exe.locked}</div>` : '';

        // Download button logic
        const downloadButton = exe.locked
            ? `<button class="btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed;">${translations[currentLang].locked}</button>`
            : `<button class="btn btn-primary download-btn" data-url="${exe.downloadUrl}">${translations[currentLang].download}</button>`;

        const infoButton = exe.locked
            ? `<button class="btn btn-secondary" disabled style="opacity: 0.5; cursor: not-allowed;">${translations[currentLang].locked}</button>`
            : `<button class="btn btn-secondary" onclick="openInfo(${exe.id})">${translations[currentLang].info}</button>`;

        // Support all Scripts Badge Logic
        const isTrusted = (parseStat(exe.unc) >= 90 && parseStat(exe.sunc) >= 90);
        const trustedBadge = isTrusted ? `
            <div class="trusted-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${translations[currentLang].supportAllScripts}
            </div>
        ` : '';

        // ВНИМАНИЕ: Ниже добавлен onclick и класс stat-clickable для sUNC
        card.innerHTML = `
            <div class="card-media">
                <span class="device-tag">${exe.device}</span>
                ${lockedBadge}
                ${mediaContent}
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${exe.name}</h3>
                    ${trustedBadge}
                </div>
                <p class="card-desc">${exe.description}</p>
                <div class="card-stats">
                    <div class="stat">
                        <span class="stat-label">UNC</span>
                        <span class="stat-value">${exe.unc}%</span>
                    </div>
                    <div class="stat stat-clickable" onclick="event.stopPropagation(); openSuncModal(${exe.id})" title="Click for sUNC details">
                        <span class="stat-label">sUNC</span>
                        <span class="stat-value sunc-value">${exe.sunc}%</span>
                    </div>
                </div>
                <div class="card-actions">
                    ${downloadButton}
                    ${infoButton}
                </div>
            </div>
        `;

        card.style.animationDelay = `${index * 0.1}s`;

        if (!exe.locked) {
            card.addEventListener('mousemove', handleTilt);
            card.addEventListener('mouseleave', resetTilt);
        }

        grid.appendChild(card);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
}

const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? 'rgba(124, 58, 237, ' : 'rgba(219, 39, 119, ';
        this.opacity = Math.random() * 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    resizeCanvas();
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    animateParticles();
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', resizeCanvas);

function parseStat(val) {
    if (typeof val === 'number') return val;
    if (!val || val === '???' || val === '??') return 0;
    const match = val.toString().match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

function processData() {
    let filtered = executorsData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDevice = currentFilter === 'all' || item.device.toLowerCase() === currentFilter.toLowerCase();
        return matchesSearch && matchesDevice;
    });

    filtered.sort((a, b) => {
        switch (currentSort) {
            case 'name-asc': return a.name.localeCompare(b.name);
            case 'name-desc': return b.name.localeCompare(a.name);
            case 'unc-desc': return parseStat(b.unc) - parseStat(a.unc);
            case 'unc-asc': return parseStat(a.unc) - parseStat(b.unc);
            case 'sunc-desc': return parseStat(b.sunc) - parseStat(a.sunc);
            case 'sunc-asc': return parseStat(a.sunc) - parseStat(b.sunc);
            default: return 0;
        }
    });

    renderCards(filtered);
}

function setupEventListeners() {
    const langSwitcher = document.getElementById('langSwitcher');
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        setLanguage(newLang);
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        processData();
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        processData();
    });

    deviceFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('device-btn')) {
            document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            currentFilter = e.target.dataset.device;
            processData();
        }
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // sUNC Modal close handlers
    const suncModal = document.getElementById('suncModal');
    const closeSuncModal = document.getElementById('closeSuncModal');
    if (closeSuncModal) {
        closeSuncModal.addEventListener('click', () => {
            suncModal.classList.remove('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
        if (e.target === suncModal) {
            suncModal.classList.remove('show');
        }
        if (e.target === disclaimerModal) {
            disclaimerModal.classList.remove('show');
        }
    });

    const disclaimerModal = document.getElementById('disclaimerModal');
    const closeDisclaimer = document.getElementById('closeDisclaimer');
    const cancelDownload = document.getElementById('cancelDownload');
    const confirmDownload = document.getElementById('confirmDownload');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('download-btn') || e.target.closest('.download-btn')) {
            e.preventDefault();
            const btn = e.target.classList.contains('download-btn') ? e.target : e.target.closest('.download-btn');
            const downloadUrl = btn.dataset.url;
            showDisclaimerModal(downloadUrl);
        }
    });

    function showDisclaimerModal(url) {
        confirmDownload.href = url;
        disclaimerModal.classList.add('show');
    }

    closeDisclaimer.addEventListener('click', () => {
        disclaimerModal.classList.remove('show');
    });

    cancelDownload.addEventListener('click', () => {
        disclaimerModal.classList.remove('show');
    });

    confirmDownload.addEventListener('click', () => {
        disclaimerModal.classList.remove('show');
    });
}

// Global function for onclick
window.openInfo = function (id) {
    const exe = executorsData.find(item => item.id === id);
    if (!exe) return;

    document.getElementById('modalTitle').textContent = exe.name;
    document.getElementById('modalDesc').textContent = exe.description;
    document.getElementById('modalUnc').textContent = exe.unc + '%';
    document.getElementById('modalSunc').textContent = exe.sunc + '%';

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = exe.features.map(f => `<li>${f}</li>`).join('');

    // sUNC Integration (populate inline section in info modal if present)
    const suncSection = document.getElementById('suncSection');
    if (suncSection) {
        suncSection.innerHTML = `
        <div class="sunc-actions">
            <a href="https://docs.sunc.su/" target="_blank" class="sunc-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                ${translations[currentLang].whatIsSunc}
            </a>
            <button onclick="copySuncScript()" class="btn btn-sm btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                ${translations[currentLang].copySunc}
            </button>
        </div>
    `;
    }

    // Widget Logic
    const widgetContainer = document.getElementById('suncWidgetContainer');
    const widgetIframe = document.getElementById('sunc-widget');

    if (exe.scrapId && widgetContainer && widgetIframe) {
        widgetContainer.classList.remove('hidden');

        // Load Scrap
        widgetIframe.contentWindow.postMessage({
            type: "sunc-widget:loadScrap",
            payload: {
                scrapId: exe.scrapId,
                key: exe.scrapKey || ""
            }
        }, "https://sunc.rubis.app");

        // Set Theme
        widgetIframe.contentWindow.postMessage({
            type: "sunc-widget:setTheme",
            payload: {
                dark: "#101012",
                light: "#1a1a20",
                lighter: "#26262f",
                sunc: "#7c3aed",
                suncLighter: "#a78bfa",
                grey: "#9ca3af",
                lightText: "#f3f4f6",
                success: "#10b981",
                failure: "#ef4444",
                useDarkLogo: true
            }
        }, "https://sunc.rubis.app");

    } else if (widgetContainer) {
        widgetContainer.classList.add('hidden');
    }

    modal.classList.add('show');
}

window.copySuncScript = function () {
    navigator.clipboard.writeText(SUNC_SCRIPT).then(() => {
        // Prefer the inline sUNC button in the info modal, fallback to the sUNC modal button
        const btn = document.querySelector('#suncSection button') || document.querySelector('#suncModal .btn.btn-sm.btn-outline') || document.querySelector('.btn.btn-sm.btn-outline');
        if (!btn) return;
        const originalText = btn.innerHTML;

        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${translations[currentLang].scriptCopied}
        `;
        btn.classList.add('success');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('success');
        }, 2000);
    }).catch(() => {
        // Clipboard rejected (e.g., insecure context) — no-op but avoid uncaught error
    });
}

init();
initParticles();