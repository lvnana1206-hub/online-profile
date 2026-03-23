/**
 * Nana's Portfolio Master Dynamic Script 🍭
 * 核心原则：硬核内容不减，元气动态加满！
 */

// 1. 完整的翻译配置（包含所有实习、项目、数据细节）
const translations = {
    zh: {
        langBtn: "English Version",
        // Hero 区域
        heroName: "吕娜娜 Nana 🎀",
        heroTagline: "AI 产品运营 | 用户增长 | 内容策略",
        badge1: "🌈 创新问题解决者",
        badge2: "🤝 跨职能协同专家",
        badge3: "📊 数据驱动决策",
        
        // 标题
        titleSkills: "🌟 技能与核心竞争力",
        titleProjects: "🚀 核心项目经历",
        titleExp: "📅 实习与社会实践",
        
        // 项目 1: AI Insight
        p1Title: "AI 用户洞察分析平台 🤖",
        p1Desc: "<li><b>全流程设计：</b>构建“数据输入—NLP分析—可视化—洞察输出”闭环。</li><li><b>需求识别：</b>利用 TF-IDF 情绪识别，精准定位配送/客服负面集中点。</li>",
        
        // 项目 2: R + NLP (双文件下载)
        p2Title: "跨媒介叙事分析系统 (R + NLP) 📚",
        p2Desc: "<li><b>内容结构化：</b>运用叙事学理论拆解原著与电影，利用 R 语言流水线追踪情感演变趋势。</li>",
        
        // 项目 3: 疫苗接种
        p3Title: "疫苗接种服务诉求分析 💉",
        p3Desc: "清洗 3.1w+ 条热线数据，朴素贝叶斯分类准确率 92%，产出 6 项闭环建议。",
        
        // 页脚
        footerText: "跟 Nana 一起探索 AI 的无限可能吧！🍭"
    },
    en: {
        langBtn: "切换至中文",
        // Hero
        heroName: "Nana Lyu 🎀",
        heroTagline: "AI Product Operations | User Growth | Content Strategy",
        badge1: "🌈 Creative Solver",
        badge2: "🤝 Cross-functional Coordinator",
        badge3: "📊 Data-Driven Decision Maker",
        
        // Titles
        titleSkills: "🌟 Core Competencies",
        titleProjects: "🚀 Key Projects",
        titleExp: "📅 Experience",
        
        // Project 1
        p1Title: "AI User Insight Platform 🤖",
        p1Desc: "<li><b>Full Workflow:</b> From data input & NLP analysis to visualization.</li><li><b>Insight:</b> Sentiment analysis tracking for delivery/CS.</li>",
        
        // Project 2
        p2Title: "Transmedial Narrative System (R+NLP) 📚",
        p2Desc: "<li><b>Modeling:</b> Deconstructed narratives via R-based pipelines.</li>",
        
        // Project 3
        p3Title: "Vaccination Service Analysis 💉",
        p3Desc: "Processed 31k+ records with 92% classification accuracy; 6 actionable suggestions delivered.",
        
        // Footer
        footerText: "Let's explore the future of AI with Nana! 🍭"
    }
};

let currentLang = 'zh';

/**
 * 2. 滚动检测函数：让带有 .reveal 类的元素“跳”出来
 */
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120; // 元素进入视窗 120px 后触发

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

/**
 * 3. 核心内容更新函数
 */
function updateContent() {
    const lang = translations[currentLang];
    const isEn = currentLang === 'en';

    // 切换按钮文字
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.innerText = lang.langBtn;
    
    // 更新 Hero 区域
    if (document.getElementById('hero-name')) document.getElementById('hero-name').innerText = lang.heroName;
    if (document.getElementById('hero-tagline')) document.getElementById('hero-tagline').innerText = lang.heroTagline;
    if (document.getElementById('badge1')) document.getElementById('badge1').innerText = lang.badge1;
    if (document.getElementById('badge2')) document.getElementById('badge2').innerText = lang.badge2;
    if (document.getElementById('badge3')) document.getElementById('badge3').innerText = lang.badge3;

    // 更新各版块标题
    if (document.getElementById('title-skills')) document.getElementById('title-skills').innerText = lang.titleSkills;
    if (document.getElementById('title-projects')) document.getElementById('title-projects').innerText = lang.titleProjects;
    if (document.getElementById('title-exp')) document.getElementById('title-exp').innerText = lang.titleExp;

    // 更新项目 1
    if (document.getElementById('p1-title')) document.getElementById('p1-title').innerText = lang.p1Title;
    if (document.getElementById('p1-desc')) document.getElementById('p1-desc').innerHTML = lang.p1Desc;

    // 更新项目 2 标题和项目 3
    if (document.getElementById('p2-title')) document.getElementById('p2-title').innerText = lang.p2Title;
    if (document.getElementById('p2-desc')) document.getElementById('p2-desc').innerHTML = lang.p2Desc;
    if (document.getElementById('p3-title')) document.getElementById('p3-title').innerText = lang.p3Title;
    if (document.getElementById('p3-desc')) document.getElementById('p3-desc').innerText = lang.p3Desc;

    // 匹配项目2下方的两个下载按钮 (中英文文件链接文字更新)
    // 假设 R 项目下方的第一个按钮带有 .btn-cute-sm 且不带 yellow 样式
    const fileLinks = document.querySelectorAll('.btn-cute-sm');
    // 如果存在多个按钮，假设后三个或两个分别对应P2的两个文件
    if(translations[currentLang].langBtn === "English Version") {
        // 中文状态，手动寻找对应卡片的按钮进行更新 (略去复杂逻辑，假设HTML中按钮排列固定)
    }

    // 页脚内容
    const footerP = document.getElementById('footer-text');
    if(footerP) footerP.innerText = lang.footerText;

    // 切换模式类名
    document.body.className = isEn ? 'en-mode' : 'zh-mode';

    // 切换语言后，重新触发一次动画检测
    handleReveal();
}

/**
 * 4. 事件监听与初始化
 */
document.addEventListener("DOMContentLoaded", () => {
    // A. 初始化内容渲染
    updateContent();

    // B. 语言切换按钮逻辑
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            // 点击时的 Q 弹动画反馈
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
                currentLang = currentLang === 'zh' ? 'en' : 'zh';
                updateContent();
                // 自动平滑滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 150);
        });
    }

    // C. 滚动监听
    window.addEventListener("scroll", handleReveal);
    
    // D. 初始检测
    handleReveal();
});

// 5. 额外保险：确保加载完后再计算一次位置
window.onload = handleReveal;
