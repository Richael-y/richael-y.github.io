/* Homepage language switch. English lives in index.html; Chinese lives here. */
(function () {
  'use strict';

  var zh = {
    title: '杨若钊 · 计算机安全研究',
    description: '杨若钊（Ruozhao Yang），新加坡管理大学博士生。研究方向为自动化渗透测试、Web 安全与大模型智能体。',
    skip: '跳到正文',
    navLabel: '主导航',
    navAbout: '简介',
    navResearch: '研究',
    navEducation: '教育',
    navBlog: '博客',
    affiliation: '计算机科学博士生<br>新加坡管理大学',
    email: '邮箱',
    aboutHeading: '简介',
    about1: '我是新加坡管理大学计算机科学专业的博士生，导师为<a href="https://xiaofeixie.bitbucket.io/">谢肖飞</a>教授。我的研究方向是<strong>自动化渗透测试、黑盒 Web 安全测试与大模型智能体</strong>。',
    about2: '我的研究植根于 CTF 竞赛、攻防演练和真实渗透测试中的实战经验。',
    researchHeading: '研究',
    venueTifs: 'IEEE Transactions on Information Forensics and Security · 2026 · 已录用',
    venueSwgeno: 'ASE · SWGeno 2026 · 第二届软件基因组学国际研讨会',
    code: '代码',
    educationHeading: '教育',
    smu: '新加坡管理大学',
    smuDates: '2025–至今',
    phd: '计算机科学博士',
    smuAdvisor: '导师：<a href="https://xiaofeixie.bitbucket.io/">谢肖飞</a>教授',
    tju: '天津大学',
    beng: '计算机科学与技术工学学士',
    tjuThesis: '毕业论文：APT 攻击样本可视化分析模型<br>导师：<a href="https://cse.tju.edu.cn/faculty/luotao/index.html">罗韬</a>教授',
    ctfIntro: 'Web 安全方向选手。曾任天津大学官方战队 <strong>D.I.E</strong> 队长（2022–2024）、<strong>Dest0g3</strong> 核心成员（2021–2023）、<strong>TTT-team</strong> 联合创始人（2021）。',
    domestic: '国内赛事',
    domesticLabel: '国内赛事成绩',
    international: '国际赛事',
    internationalLabel: '国际赛事成绩',
    geely: '2026 吉利全球汽车网络安全挑战赛（新加坡）',
    grandPrize: '特等奖',
    xctf: '第七届 XCTF 总决赛',
    secondPrize: '二等奖',
    servicesHeading: '学术服务',
    rolePc: '程序委员会委员',
    roleJuniorPc: '青年程序委员会委员',
    roleAe: 'Artifact 评审委员会委员',
    writingHeading: '博客',
    postAirline: 'Prompt Airline — 通关记录',
    postLlm: 'LLM 必知要点',
    allPosts: '全部文章',
    footer: '© 2026 杨若钊'
  };

  var KEY = 'home-lang';
  var textNodes = document.querySelectorAll('[data-i18n]');
  var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
  var meta = document.querySelector('meta[name="description"]');
  var button = document.getElementById('lang-toggle');

  // Remember the English that shipped in the HTML so we can switch back.
  var en = { title: document.title, description: meta ? meta.content : '' };
  textNodes.forEach(function (el) { en[el.dataset.i18n] = el.innerHTML; });
  ariaNodes.forEach(function (el) { en[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  function apply(lang) {
    var dict = lang === 'zh' ? zh : en;
    textNodes.forEach(function (el) {
      var value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    ariaNodes.forEach(function (el) {
      var value = dict[el.dataset.i18nAria];
      if (value !== undefined) el.setAttribute('aria-label', value);
    });
    document.title = dict.title;
    if (meta) meta.content = dict.description;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // The button always names the language you would switch to.
    if (button) {
      button.textContent = lang === 'zh' ? 'EN' : '中文';
      button.lang = lang === 'zh' ? 'en' : 'zh';
      button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
  }

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  var current = saved();
  if (current !== 'zh' && current !== 'en') {
    current = /^zh\b/i.test(navigator.language || '') ? 'zh' : 'en';
  }
  if (current === 'zh') apply('zh');

  if (button) {
    button.addEventListener('click', function () {
      current = current === 'zh' ? 'en' : 'zh';
      apply(current);
      try { localStorage.setItem(KEY, current); } catch (e) { /* private mode */ }
    });
  }
})();
