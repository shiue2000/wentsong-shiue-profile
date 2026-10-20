export interface ExperienceItem {
  id: string;
  role: string;
  roleZh: string;
  company: string;
  companyZh: string;
  period: string;
  location: string;
  locationZh: string;
  summary: string;
  summaryZh: string;
  bulletPoints: string[];
  bulletPointsZh: string[];
  technologies: string[];
  businessChannels?: string[];
  highlights?: string;
  highlightsZh?: string;
}

export interface PatentItem {
  id: string;
  patentNumber: string;
  title: string;
  titleZh: string;
  grantedDate: string;
  assigneeOrEntity: string;
  inventors: string[];
  description: string;
  descriptionZh: string;
  officialUrl?: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeZh: string;
  field: string;
  fieldZh: string;
  institution: string;
  institutionZh: string;
  period: string;
  location: string;
  locationZh: string;
  thesis: string;
  thesisZh: string;
  highlights?: string;
  highlightsZh?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  skills: {
    name: string;
    level?: string;
    focus?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleZh: string;
  category: 'production' | 'patent' | 'research';
  categoryLabel: string;
  categoryLabelZh: string;
  overview: string;
  overviewZh: string;
  keyContributions: string[];
  keyContributionsZh: string[];
  metricsOrOutcomes: string[];
  metricsOrOutcomesZh: string[];
  technologies: string[];
  status: string;
  statusZh: string;
  externalLink?: string;
}

export interface FAQItem {
  question: string;
  questionZh: string;
  answer: string;
  answerZh: string;
  tag: string;
}

export const PROFILE_DATA = {
  name: 'WenTsong Shiue, PhD',
  nameZh: '薛文聰 博士',
  title: 'AI & Machine Learning Researcher | Senior Data Scientist',
  titleZh: '人工智慧與機器學習研究員 | 資深資料科學家',
  subtitle: 'Financial Fraud Analytics · Explainable AI (XAI) · Model Risk Governance · IC EDA Low Power Design · Patent Co-Inventor',
  subtitleZh: '金融防偽分析 · 可解釋 AI (XAI) · 模型風險治理 · IC EDA 低功耗晶片設計 · 美國專利發明人',
  location: 'Austin, Texas, USA',
  locationZh: '美國德州奧斯汀',
  linkedinUrl: 'https://www.linkedin.com/in/wentsong-shiue-69425852',
  linkedinFeaturedMediaUrl: 'https://www.linkedin.com/in/wentsong-shiue-69425852/overlay/1790006860226/single-media-viewer/?profileId=ACoAAAsSRtABQG5pp-gxsP44d0iDSgmVvobOgqU',
  githubUrl: 'https://github.com/shiue2000',
  targetRepoUrl: 'https://github.com/shiue2000/shiue2000.github.io',
  targetSiteUrl: 'https://githubio-production-30a7.up.railway.app/en/',
  targetRailwayUrl: 'https://githubio-production-30a7.up.railway.app/en/',
  targetGithubIoUrl: 'https://shiue2000.github.io',
  googleScholarUrl: 'https://scholar.google.com/scholar?hl=zh-TW&q=wen-tsong+shiue&lr=&oq=',
  
  featuredLinkedInMedia: {
    title: 'Featured LinkedIn Publication: U.S. Patent 11,531,734 & ML Architecture',
    titleZh: 'LinkedIn 精選媒體：美國專利 11,531,734 與機器學習模型架構成果',
    url: 'https://www.linkedin.com/in/wentsong-shiue-69425852/overlay/1790006860226/single-media-viewer/?profileId=ACoAAAsSRtABQG5pp-gxsP44d0iDSgmVvobOgqU',
    docType: 'Official Patent Document & Executive Portfolio Asset',
    docTypeZh: '官方專利文件與高階主管研發資產',
    summary: 'The featured media document published on Dr. Shiue\'s LinkedIn profile highlights the granted U.S. Patent 11,531,734 ("Determining Optimal Machine Learning Models"), detailing the automated optimization algorithms, hyperparameter exploration spaces, and Bank of America enterprise machine learning governance.',
    summaryZh: '薛博士於 LinkedIn 個人檔案精選專區展示之核心成果文件，重點呈現獲准之美國專利 11,531,734《Determining Optimal Machine Learning Models》，詳解自動化模型優化演算法、超參數搜尋空間與美國銀行企業級機器學習治理體系。',
  },

  bio: 'I am an AI and machine learning professional with extensive experience spanning financial fraud detection, enterprise analytics, statistical modeling, explainable AI, and model governance. My background combines hands-on model development, research, technical leadership, and interdisciplinary engineering expertise.',
  bioZh: '我是一位在人工智慧與機器學習領域深耕多年的資深專業人士，經驗橫跨金融詐欺偵測、企業數據分析、統計建模、可解釋 AI（Explainable AI）以及模型風險治理。我的背景結合了實際的高效能模型開發、前沿研究、技術領導以及跨領域工程專業。',

  aboutSummary: [
    {
      title: 'Enterprise AI & Financial Fraud Detection',
      titleZh: '企業級 AI 與金融防偽偵測',
      desc: 'Former Vice President and Senior Data Scientist at Bank of America (2017–2026), leading binary classification modeling and feature engineering across 8 mission-critical banking channels: CAML, Debit, P2P (Zelle), Wire, ACH, Bill Pay, Credit, and Device.',
      descZh: '曾任美國銀行（Bank of America）副總裁暨資深資料科學家（2017–2026），主導橫跨 CAML、Debit、P2P（Zelle）、Wire、ACH、Bill Pay、Credit 及 Device 等 8 大關鍵支付與交易管道的二元分類建模與特徵工程。'
    },
    {
      title: 'Explainable AI & Model Risk Governance',
      titleZh: '可解釋 AI 與模型風險治理 (MRM)',
      desc: 'Deep specialization in demystifying black-box models using SHAP (force plots, summary plots, decision plots), LIME, PDP, and ELI5. Direct experience conducting bias and fairness statistical testing across protected dimensions (race, gender, age, marital status) with MRM validators.',
      descZh: '專精於利用 SHAP、LIME、PDP 與 ELI5 解構黑盒模型預測；具備與模型風險管理（MRM）驗證者合作的豐富經驗，針對種族、性別、年齡及婚姻狀況等受保護維度執行嚴謹的偏誤與公平性統計檢驗。'
    },
    {
      title: 'Patented Optimization Methodologies',
      titleZh: '專利認證之機器學習優化方法論',
      desc: 'Co-inventor of U.S. Patent 11,531,734, "Determining Optimal Machine Learning Models" (granted Dec 20, 2022 by USPTO), demonstrating foundational research into automated hyperparameter search, tuning, and optimal model selection frameworks.',
      descZh: '美國專利第 11,531,734 號《Determining Optimal Machine Learning Models》（決定最佳機器學習模型）共同發明人（2022 年 12 月獲 USPTO 授權），展現於自動化超參數搜尋、調優與最優模型選取架構的深厚實力。'
    },
    {
      title: 'Rigorous Academic Foundation & System Modeling',
      titleZh: '嚴謹學術基礎與系統級建模',
      desc: 'Ph.D. in Electrical Engineering & Computer Science from Arizona State University. Dissertation research in cache memory power modeling was implemented in the cycle-accurate SimplePower simulation tool at Penn State University (PSU). Ranked 3rd out of 120,000 students in the Taiwan National College Examination.',
      descZh: '獲亞利桑那州立大學（ASU）電機與資訊工程博士學位，快取記憶體功耗建模博士研究獲賓州州立大學（PSU）SimplePower 週期精確模擬工具實作採納。在 1979 年台灣大專聯考 12 萬名考生中榮獲全國第 3 名。'
    }
  ],

  stats: [
    { label: 'Enterprise Experience', labelZh: '跨領域企業與研發資歷', value: '20+ Yrs', detail: 'Bank of America, Uniqlinc, Alvaview, Freescale' },
    { label: 'U.S. Patent Granted', labelZh: '獲核准美國專利', value: 'US 11,531,734', detail: 'Optimal ML Model Determination' },
    { label: 'Protected Channels', labelZh: '防偽保護交易管道', value: '8 Channels', detail: 'CAML, Debit, P2P, Wire, ACH, BillPay...' },
    { label: 'National Rank Honor', labelZh: '全國大專聯考榮譽', value: 'Rank #3', detail: 'Top 3 out of 120,000 Candidates' }
  ],

  experiences: [
    {
      id: 'boa',
      role: 'Vice President, Senior Data Scientist',
      roleZh: '副總裁，資深資料科學家',
      company: 'Bank of America',
      companyZh: '美國銀行 (Bank of America)',
      period: 'Oct 2017 – 2026',
      location: 'Austin, TX / Charlotte, NC',
      locationZh: '美國德州奧斯汀 / 北卡夏洛特',
      summary: 'Led machine learning development, validation, error monitoring, and model governance for enterprise fraud detection and authentication systems across multiple consumer and corporate payment channels.',
      summaryZh: '主導企業級防偽偵測與身分驗證機器學習模型的開發、驗證、錯誤監控與模型治理，覆蓋多元消費金融與企業支付管道。',
      businessChannels: ['CAML', 'Credit', 'Debit', 'P2P (Zelle)', 'Wire', 'ACH', 'Bill Pay', 'Device'],
      bulletPoints: [
        'Engineered high-accuracy binary classification models using XGBoost and LightGBM for real-time fraud scoring across CAML, Debit, P2P, Wire, ACH, Bill Pay, Credit, and Device channels.',
        'Built automated feature engineering pipelines: calculated correlation matrices, pruned single-value columns, filtered high-correlation features, and removed zero-importance attributes.',
        'Executed systematic hyperparameter optimization utilizing Optuna, Bayesian Optimization, and Random Search to optimize model convergence and classification boundaries.',
        'Evaluated models comprehensively using Recall, Precision, F1, ROC AUC, ROC curves, and Precision-Recall (PRC) curves for heavily imbalanced fraud distributions.',
        'Employed Explainable AI (XAI) frameworks—SHAP (force plots, summary plots, positive/negative effects, dependence plots, decision plots), LIME local surrogates, and ELI5—to translate black-box model predictions for business and regulatory stakeholders.',
        'Led bias and fairness testing across protected classes (race, gender, age, marital status), evaluating disparate impact through recall, precision, and false positive rate disparities with Model Risk Management (MRM) validators.',
        'Supported 24/7 production observability, transaction triage, and error log analytics using Splunk.',
        'Co-invented U.S. Patent 11,531,734: "Determining Optimal Machine Learning Models" (granted Dec 20, 2022).'
      ],
      bulletPointsZh: [
        '使用 XGBoost 與 LightGBM 構建高精準度二元分類模型，為 CAML、Debit、P2P、Wire、ACH、Bill Pay、Credit 及 Device 提供即時詐欺風險評分。',
        '建立自動化特徵工程管線：計算特徵相關係數矩陣、剔除單一值欄位、過濾高度共線性特徵並清除零重要度屬性。',
        '運用 Optuna、貝氏優化及隨機搜尋執行系統性超參數調優，極大化不平衡資料集上的模型泛化能力。',
        '在高度不平衡的詐欺交易樣本中，依據 Recall、Precision、F1、ROC AUC、ROC 曲線及 PRC 曲線進行全方位指標驗證。',
        '運用可解釋 AI 架構（SHAP 力圖、摘要圖、特徵重要性、相依圖與決策圖、LIME 局部替代模型及 ELI5）將複雜黑盒決策轉化為透明業務歸因。',
        '主導針對性別、種族、年齡及婚姻狀況等受保護群體之偏誤與公平性統計檢驗，與模型風險管理（MRM）審驗團隊緊密合作確保合規。',
        '使用 Splunk 進行生產環境錯誤日誌分析與模型效能持續監控。',
        '共同發明美國專利第 11,531,734 號《Determining Optimal Machine Learning Models》（2022 年 12 月核准）。'
      ],
      technologies: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'LIME', 'ELI5', 'Optuna', 'Splunk', 'HULC', 'Tableau', 'Scikit-learn', 'Bayesian Optimization'],
      highlights: 'U.S. Patent 11,531,734 co-inventor; governed mission-critical fraud models protecting millions of daily transactions.',
      highlightsZh: '美國專利 11,531,734 發明人；治理每日保護數百萬筆交易之核心防偽模型。'
    },
    {
      id: 'uniqlinc',
      role: 'Director of Data Science',
      roleZh: '資料科學總監',
      company: 'Uniqlinc, Inc.',
      companyZh: 'Uniqlinc, Inc.',
      period: 'June 2013 – Oct 2017',
      location: 'Austin, TX',
      locationZh: '美國德州奧斯汀',
      summary: 'Directed the data science and business intelligence strategy, managing large-scale analytical reporting pipelines and deploying production machine learning workflows for thousands of enterprise users.',
      summaryZh: '執掌資料科學與商業智慧策略，管理大規模分析報表管線，並為數千名企業用戶部署生產級機器學習工作流。',
      bulletPoints: [
        'Supported numerous cross-functional machine learning and analytical teams delivering mission-critical analytics and reporting to thousands of employees.',
        'Architected and managed a high-throughput, fault-tolerant Python ETL pipeline application processing multi-source structured and semi-structured datasets.',
        'Instituted test-driven development (TDD) best practices and continuous integration workflows using Git for data science codebases.',
        'Developed standardized technical documentation protocols, including architectural workflow diagrams, model lineage, and API specifications.',
        'Implemented advanced dimensionality reduction and feature extraction techniques (PCA, LDA, Kernel PCA) to optimize computational efficiency.',
        'Explored and implemented reinforcement learning algorithms, including Upper Confidence Bound (UCB) and Thompson Sampling for decision workflows.'
      ],
      bulletPointsZh: [
        '支援多元機器學習與分析團隊，為數千名企業同仁提供高可靠度的核心分析與決策報表。',
        '設計並管理高吞吐量、高容錯之 Python ETL 數據萃取管線，處理多源結構化與半結構化數據集。',
        '在資料科學專案中推行測試驅動開發（TDD）與 Git 版本控制規範，顯著提升模型交付品質。',
        '制定標準化技術文檔規範，包括架構流程圖、模型血緣追蹤與 API 代碼支援手冊。',
        '應用主成分分析（PCA）、線性判別分析（LDA）及 Kernel PCA 等降維技術優化特徵矩陣。',
        '探索並實作強化學習演算法，包括 UCB（Upper Confidence Bound）與湯普森抽樣（Thompson Sampling）。'
      ],
      technologies: ['Python', 'ETL', 'Artificial Neural Networks', 'CNN', 'PCA', 'LDA', 'Kernel PCA', 'K-Fold CV', 'XGBoost', 'UCB', 'Thompson Sampling', 'Git'],
      highlights: 'Established institutional data engineering standards and scalable automated ETL infrastructure.',
      highlightsZh: '建立企業級數據工程標準規範與高擴展性自動化 ETL 基礎設施。'
    },
    {
      id: 'alvaview',
      role: 'Chief Data Scientist',
      roleZh: '首席資料科學家',
      company: 'Alvaview, Inc. (Data Science Division)',
      companyZh: 'Alvaview, Inc. (資料科學部門)',
      period: 'June 2006 – June 2013',
      location: 'Austin, TX',
      locationZh: '美國德州奧斯汀',
      summary: 'Supervised end-to-end data warehousing, predictive modeling, and business intelligence projects. Led developers, data analysts, and QA specialists delivering high-impact machine learning solutions.',
      summaryZh: '督導端到端資料倉儲、預測建模與商業智慧專案，帶領開發者、數據分析師與品保專家交付高價值機器學習方案。',
      bulletPoints: [
        'Managed a multi-disciplinary team consisting of software developers, data analysts, and QA engineers to deliver enterprise analytics projects on schedule.',
        'Architected relational data warehousing structures and predictive analytics systems utilizing PostgreSQL, Python, R, and Tableau.',
        'Built regression suites for continuous dependent variables: Simple/Multiple Linear Regression with backward elimination, Polynomial Regression, SVR, Decision Trees, and Random Forests.',
        'Constructed classification suites for categorical outcomes: Logistic Regression, KNN, SVM, Kernel SVM, Naive Bayes, Decision Trees, and Random Forest Classifiers.',
        'Implemented unsupervised clustering algorithms (K-Means, Hierarchical Clustering) and association rule learning (Apriori, Eclat) for market segmentation and anomaly detection.'
      ],
      bulletPointsZh: [
        '領導由軟體工程師、資料分析師與 QA 專家組成的跨職能團隊，如期交付企業級巨量資料分析專案。',
        '運用 PostgreSQL、Python、R 與 Tableau 構建高效率關聯式資料倉儲架構與預測分析系統。',
        '針對連續變數構建完整迴歸模型：多元線性迴歸（後向消除）、多項式迴歸、SVR、決策樹與隨機森林迴歸。',
        '針對類別型變數構建分類模型體系：邏輯斯迴歸、KNN、支援向量機（SVM）、核 SVM、單純貝氏與隨機森林分類器。',
        '實作非監督式分群演算法（K-Means、階層式分群）與關聯規則學習（Apriori、Eclat）進行客群區隔與異常偵測。'
      ],
      technologies: ['Python', 'R', 'Matlab', 'PostgreSQL', 'Tableau', 'SVM', 'Random Forest', 'KNN', 'K-Means', 'Apriori', 'Data Warehousing'],
      highlights: 'Directed diverse machine learning algorithm implementations and enterprise data warehousing.',
      highlightsZh: '主導多元機器學習演算法之工程化落地與企業級資料倉儲建設。'
    },
    {
      id: 'freescale',
      role: 'Senior Data Modeling Engineer',
      roleZh: '資深資料建模工程師',
      company: 'FreeScale Semiconductor (Austin TX System)',
      companyZh: '飛思卡爾半導體 (FreeScale Semiconductor)',
      period: 'Jan 2004 – June 2006',
      location: 'Austin, TX',
      locationZh: '美國德州奧斯汀',
      summary: 'Conducted system data modeling, dynamic process compensation, and microarchitecture power consumption analysis for next-generation i.MX multimedia application chipsets.',
      summaryZh: '針對新一代 i.MX 多媒體應用晶片組執行系統級數據建模、動態製程補償與微架構功耗頻寬分析。',
      bulletPoints: [
        'Investigated and modeled the power consumption and memory bus bandwidth of the i.MX multimedia chipset architecture under intensive workload profiles.',
        'Analyzed system bus data bandwidth, video power dissipation, and memory power taking into consideration the impact of burst data accesses.',
        'Developed an innovative modeling solution for Dynamic Process Temperature Compensation (DPTV) systems using pseudo-regression methods, resulting in a divisional patent filing.'
      ],
      bulletPointsZh: [
        '深入探討並建模 i.MX 多媒體晶片組架構在密集工作負載下的功耗與記憶體匯流排頻寬表現。',
        '針對巨量資料連續存取之影響，精確分析系統匯流排數據頻寬、視訊功耗及動態記憶體功耗管理。',
        '運用擬迴歸（Pseudo Regression）方法為動態製程溫度補償系統（DPTV）開發無表建模方案，取得部門級專利申請。'
      ],
      technologies: ['C/C++', 'System Data Modeling', 'i.MX Architecture', 'Pseudo Regression', 'Memory Power Modeling', 'Bandwidth Analysis'],
      highlights: 'Patent filing on Dynamic Process Temperature Compensation (DPTV) table-less modeling solution.',
      highlightsZh: '發明動態製程溫度補償（DPTV）擬迴歸無表建模專利解決方案。'
    }
  ],

  patents: [
    {
      id: 'us-11531734',
      patentNumber: 'US 11,531,734',
      title: 'Determining Optimal Machine Learning Models',
      titleZh: '決定最佳機器學習模型 (Determining Optimal Machine Learning Models)',
      grantedDate: 'Dec 20, 2022',
      assigneeOrEntity: 'Bank of America Corporation',
      inventors: ['Wentsong Shiue', 'Tony Yu Fu', 'Xianhong Zhang'],
      description: 'An automated machine learning system and methodology for dynamically identifying, tuning, and selecting optimal machine learning models across complex feature spaces, multi-dimensional hyperparameters, and business objective functions.',
      descriptionZh: '一種自動化機器學習系統與架構方法，用於在複雜高維特徵空間與多元超參數組合中，針對業務目標動態評估、調校並選定最佳預測模型。',
      officialUrl: 'https://patents.google.com/patent/US11531734B2/en',
      tags: ['AutoML', 'Hyperparameter Tuning', 'Model Selection', 'Ensemble Optimization', 'USPTO Granted']
    },
    {
      id: 'freescale-patent',
      patentNumber: 'Freescale / Multimedia Division',
      title: 'A Novel Table-less Modeling Solution for Dynamic Process Temperature Compensation (DPTV) System using Pseudo Regression Method',
      titleZh: '運用擬迴歸法之動態製程溫度補償 (DPTV) 系統無表建模專利方案',
      grantedDate: 'Divisional Patent Record',
      assigneeOrEntity: 'FreeScale Semiconductor',
      inventors: ['WenTsong Shiue'],
      description: 'A mathematical modeling framework eliminating memory-heavy lookup tables in semiconductor thermal and process compensation systems through high-precision pseudo-regression curves.',
      descriptionZh: '透過高精度擬迴歸曲線取代半導體熱補償與製程補償系統中佔用龐大記憶體的查表法（Lookup Tables），大幅減少晶片記憶體消耗與延遲。',
      tags: ['Semiconductor', 'Data Modeling', 'DPTV', 'Pseudo Regression', 'Embedded Systems']
    }
  ],

  education: [
    {
      id: 'phd-asu',
      degree: 'Ph.D. in Electrical Engineering & Computer Science',
      degreeZh: '電機與資訊工程博士 (Ph.D.)',
      field: 'Low Power Embedded Systems & Memory Data Modeling',
      fieldZh: '低功耗嵌入式系統與記憶體資料建模',
      institution: 'Arizona State University (ASU)',
      institutionZh: '亞利桑那州立大學 (ASU)',
      period: 'Aug 1996 – Jun 2000',
      location: 'Tempe, Arizona, USA',
      locationZh: '美國亞利桑那州坦佩',
      thesis: 'Memory Data Modeling and Exploration in Low Power Embedded Systems',
      thesisZh: '低功耗嵌入式系統中的記憶體資料建模與探索',
      highlights: 'Cache data power modeling research was officially integrated into Penn State University (PSU) SimplePower tool, a widely cited cycle-accurate energy estimation suite.',
      highlightsZh: '快取資料功耗建模之博士論文成果被正式整合入賓州州立大學（PSU）享譽學界的 SimplePower 週期精確能量估算工具。'
    },
    {
      id: 'ms-wmu',
      degree: 'M.S. in Electrical & Computer Engineering',
      degreeZh: '電機與電腦工程碩士 (M.S.)',
      field: 'Image Data Processing & Compression Algorithms',
      fieldZh: '影像資料處理與壓縮演算法',
      institution: 'Western Michigan University (WMU)',
      institutionZh: '西密西根大學 (WMU)',
      period: 'Jan 1989 – Jun 1991',
      location: 'Kalamazoo, Michigan, USA',
      locationZh: '美國密西根州卡拉馬祖',
      thesis: 'Image Data Processing using Discrete Cosine Transform and Huffman Coding',
      thesisZh: '應用離散餘弦轉換 (DCT) 與霍夫曼編碼之影像資料處理',
      highlights: 'Investigated advanced lossy and lossless image data transformation techniques foundational to digital signal processing.',
      highlightsZh: '深入探討現代數位訊號處理基石之破壞性與無失真影像資料轉換技術。'
    },
    {
      id: 'bs-mcut',
      degree: 'B.S. in Electrical Engineering',
      degreeZh: '電機工程學士 (B.S.)',
      field: 'Intelligent Robotics & Control Systems',
      fieldZh: '智慧機器人與控制系統',
      institution: 'Ming Chi University of Technology (MCUT)',
      institutionZh: '明志科技大學 (MCUT)',
      period: 'Jun 1980 – Jun 1985',
      location: 'New Taipei City, Taiwan',
      locationZh: '台灣新北市',
      thesis: 'Intelligent Machine Learning for Robotic Motion Control',
      thesisZh: '應用於機器人運動控制之智慧機器學習研究',
      highlights: 'Early exploration into intelligent adaptive control algorithms for robotics automation.',
      highlightsZh: '早期於機器人自動化領域探索智慧自適應控制演算法。'
    }
  ],

  honors: [
    {
      title: 'Taiwan National College Examination — Rank #3',
      titleZh: '台灣大專聯考全國第 3 名',
      year: '1979',
      issuer: 'Ministry of Education / Joint University Entrance Examination',
      issuerZh: '大學聯合招生委員會',
      description: 'Achieved 3rd place overall out of 120,000 candidates nationwide in the highly competitive National College Entrance Examination.',
      descriptionZh: '在全台 120,000 名考生之激烈聯考競爭中榮獲全國第 3 名佳績。'
    }
  ],

  skillCategories: [
    {
      id: 'ml',
      name: 'Machine Learning & Predictive Modeling',
      nameZh: '機器學習與預測建模',
      description: 'Core classification, ensemble methods, and optimization techniques for high-stakes enterprise applications.',
      descriptionZh: '適用於關鍵企業應用場景的核心分類、集成學習與優化技術。',
      skills: [
        { name: 'XGBoost', focus: 'High-throughput binary classification on fraud transactions' },
        { name: 'LightGBM', focus: 'Fast gradient boosting on large-scale banking data' },
        { name: 'Random Forest', focus: 'Ensemble bagging and feature importance ranking' },
        { name: 'Support Vector Machines (SVM)', focus: 'Linear & Kernel classification' },
        { name: 'Logistic Regression', focus: 'Baseline calibration & odds ratio analysis' },
        { name: 'Neural Networks (ANN / CNN / RNN)', focus: 'Time-series and deep pattern recognition' },
        { name: 'Hyperparameter Tuning (Optuna / Bayesian)', focus: 'Systematic Bayesian parameter search' }
      ]
    },
    {
      id: 'xai',
      name: 'Explainable AI (XAI) & Model Governance',
      nameZh: '可解釋 AI (XAI) 與模型治理',
      description: 'Model interpretability, fairness validation, bias testing, and Model Risk Management (MRM) compliance.',
      descriptionZh: '模型可解釋性、公平性檢驗、偏誤測試與模型風險管理 (MRM) 合規。',
      skills: [
        { name: 'SHAP (SHapley Additive exPlanations)', focus: 'Force plots, summary plots, decision plots' },
        { name: 'LIME', focus: 'Local interpretable model-agnostic explanations' },
        { name: 'PDP (Partial Dependence Plots)', focus: 'Marginal effect visualization of features' },
        { name: 'ELI5', focus: 'Classifier prediction inspection & debugging' },
        { name: 'Model Risk Management (MRM)', focus: 'Documentation, validator interaction, audit readiness' },
        { name: 'Bias & Fairness Testing', focus: 'Disparate impact across race, gender, age, marital status' },
        { name: 'Model Evaluation Metrics', focus: 'PRC curves, ROC AUC, Precision, Recall, F1' }
      ]
    },
    {
      id: 'data-engineering',
      name: 'Programming & Data Engineering',
      nameZh: '程式語言與數據工程',
      description: 'Full data science ecosystem, distributed computation, and database infrastructure.',
      descriptionZh: '完整資料科學技術生態、分散式運算與資料庫架構。',
      skills: [
        { name: 'Python', focus: 'NumPy, Pandas, Scikit-learn, SciPy, Matplotlib, Seaborn' },
        { name: 'R', focus: 'Statistical computing, GLM, hypothesis testing' },
        { name: 'MATLAB', focus: 'Mathematical modeling, matrix simulations' },
        { name: 'SQL & PostgreSQL', focus: 'Complex query optimization, data warehousing' },
        { name: 'PySpark & Scala', focus: 'Distributed large-scale data manipulation' },
        { name: 'Hadoop, Hive & MapReduce', focus: 'Big data batch analytics & ETL pipelines' },
        { name: 'Splunk & Tableau', focus: 'Log triage, error tracking, executive dashboards' }
      ]
    },
    {
      id: 'ai-frameworks',
      name: 'Deep Learning & AI Frameworks',
      nameZh: '深度學習與 AI 框架',
      description: 'Frameworks utilized for complex pattern recognition, computer vision, and neural sequence modeling.',
      descriptionZh: '用於複雜模式識別、電腦視覺與神經時序建模之主流框架。',
      skills: [
        { name: 'TensorFlow', focus: 'Production neural network architectures' },
        { name: 'PyTorch', focus: 'Deep learning research, dynamic computational graphs' },
        { name: 'Keras', focus: 'Rapid prototyping of ANN & CNN layers' },
        { name: 'Theano', focus: 'Foundational symbolic mathematical expressions' }
      ]
    },
    {
      id: 'emerging-ai',
      name: 'Emerging AI Research & Interests',
      nameZh: '新興 AI 研究與技術探索',
      description: 'Active research and forward-looking applied architectures in modern generative AI and enterprise agents.',
      descriptionZh: '現代生成式 AI、企業級智慧體與前沿安全機制的積極探索。',
      skills: [
        { name: 'Large Language Models (LLMs)', focus: 'Enterprise workflows, prompt engineering' },
        { name: 'Retrieval-Augmented Generation (RAG)', focus: 'Domain knowledge vector integration' },
        { name: 'AI Agent Workflows & Tool Calling', focus: 'Multi-step autonomous orchestration' },
        { name: 'AI Agent Security & Guardrails', focus: 'Safety, prompt injection mitigation' },
        { name: 'Human-in-the-Loop AI Review', focus: 'Reliability and governance of generative outputs' }
      ]
    },
    {
      id: 'ic-eda',
      name: 'IC EDA & Low-Power AI Chip Design Automation',
      nameZh: 'IC EDA 與低功耗晶片設計自動化',
      description: 'The strategic convergence of AI for EDA, LLMs for RTL generation, Agentic EDA workflows, memory hierarchy optimization, and low-power semiconductor architecture.',
      descriptionZh: '結合 AI for EDA、大語言模型 RTL 程式碼生成、Agentic EDA 智慧體工作流、記憶體階層架構優化與低功耗半導體架構之核心前沿。',
      skills: [
        { name: 'AI for EDA & Physical Design', focus: 'AI-driven floorplanning, placement, routing, and timing closure' },
        { name: 'LLMs for RTL Generation', focus: 'Automated Verilog/VHDL generation & hardware synthesis' },
        { name: 'AI-Based Verification & Bug Triage', focus: 'Automated testbench generation, coverage maximization, formal checking' },
        { name: 'Agentic EDA & Autonomous Tape-Out', focus: 'Multi-agent orchestration from architecture spec to physical tape-out' },
        { name: 'Memory Hierarchy & Data Movement', focus: 'Cache optimization, memory bandwidth, energy-aware scheduling' },
        { name: 'AI Accelerators (GPU / NPU / TPU)', focus: 'Compute vs memory bandwidth trade-offs, systolic arrays, tensor cores' },
        { name: 'Chiplet & 3D IC Architectures', focus: 'HBM / memory systems, heterogeneous packaging, 3D integration' },
        { name: 'Low-Power AI Computing & Modeling', focus: 'Cycle-accurate power simulation (PSU SimplePower) & DPTV (Freescale)' }
      ]
    }
  ],

  projects: [
    {
      id: 'fraud-ml',
      title: 'Multi-Channel Financial Fraud Detection System',
      titleZh: '多管道金融詐欺偵測機器學習系統',
      category: 'production' as const,
      categoryLabel: 'Enterprise Production',
      categoryLabelZh: '企業生產環境',
      overview: 'Engineered and maintained mission-critical binary classification models to detect and prevent transaction fraud across 8 high-volume banking channels (CAML, Debit, P2P/Zelle, Wire, ACH, Bill Pay, Credit, and Device).',
      overviewZh: '構建並維運核心二元分類機器學習模型，即時偵測並阻斷橫跨 8 大高流量支付管道（CAML、Debit、P2P/Zelle、Wire、ACH、Bill Pay、Credit 及 Device）的金融詐欺行為。',
      keyContributions: [
        'Built XGBoost and LightGBM models trained on massive, heavily imbalanced historical transaction logs.',
        'Developed end-to-end feature pipelines filtering high-correlation attributes and eliminating non-informative features.',
        'Executed fine-tuning with Optuna and Bayesian optimization to enhance sensitivity at low false-positive tolerances.',
        'Integrated Splunk observability for real-time model scoring validation and transaction error monitoring.'
      ],
      keyContributionsZh: [
        '基於海量且極度不平衡的歷史交易日誌，構建高精準度 XGBoost 與 LightGBM 預測模型。',
        '開發端到端特徵工程管線，過濾高共線性屬性並剔除無預測價值的特徵。',
        '運用 Optuna 與貝氏優化微調參數，在嚴格限制誤報率的前提下極大化詐欺攔截靈敏度。',
        '整合 Splunk 進行即時模型推論監控與交易異常日誌追蹤。'
      ],
      metricsOrOutcomes: [
        'Protected 8 mission-critical banking channels with real-time scoring',
        'Optimized PR AUC and Recall for high-severity fraud patterns',
        'Demonstrated robust low False Positive Rates in production'
      ],
      metricsOrOutcomesZh: [
        '守護 8 大關鍵銀行交易管道之即時評分',
        '在重大詐欺樣態上顯著提升 PR AUC 與 Recall',
        '在生產環境中實現穩健的極低誤報率 (FPR)'
      ],
      technologies: ['XGBoost', 'LightGBM', 'Python', 'Splunk', 'Optuna', 'PRC/ROC', 'HULC'],
      status: 'Production Validated (2017–2026)',
      statusZh: '生產環境驗證 (2017–2026)'
    },
    {
      id: 'explainable-ai',
      title: 'Explainable AI & Black-Box Model Interpretability',
      titleZh: '可解釋 AI (XAI) 與黑盒模型解構分析',
      category: 'production',
      categoryLabel: 'Enterprise Production',
      categoryLabelZh: '企業生產環境',
      overview: 'Applied cutting-edge model interpretability frameworks to explain gradient boosting and deep learning predictions to executive stakeholders, risk committees, and financial regulators.',
      overviewZh: '應用尖端模型可解釋性架構，向高階主管、風險委員會及金融監管機構清晰闡釋梯度提升樹與深度神經網路的各項預測依據。',
      keyContributions: [
        'Calculated Shapley values (SHAP) across multi-million transaction datasets to quantify individual feature contributions.',
        'Generated interactive force plots, summary plots, feature importance hierarchies, and decision plots.',
        'Deployed LIME local surrogate linear models to explain borderline fraud flags to compliance teams.',
        'Utilized ELI5 to inspect top predictions and debug machine learning classifiers.'
      ],
      keyContributionsZh: [
        '在數百萬筆交易資料上計算 Shapley 值（SHAP），量化個別特徵對風險分數的正負貢獻。',
        '產出動態力圖（Force Plots）、摘要圖、特徵重要性階層圖及局部決策圖。',
        '部署 LIME 局部替代模型，向合規審查團隊透明解釋臨界詐欺警示之決策邊界。',
        '運用 ELI5 檢驗核心分類器之高置信度預測並輔助除錯。'
      ],
      metricsOrOutcomes: [
        'Converted opaque black-box models into auditable, regulatory-ready artifacts',
        'Enabled transparent investigation workflows for fraud investigators',
        'Standardized feature contribution visual reporting across teams'
      ],
      metricsOrOutcomesZh: [
        '將不透明黑盒模型轉化為符合監管稽核標準的透明資產',
        '為第一線詐欺調查同仁提供清晰透明的案件追查依據',
        '在跨部門團隊間建立標準化特徵貢獻視覺化報告機制'
      ],
      technologies: ['SHAP', 'LIME', 'ELI5', 'PDP', 'Python', 'Matplotlib', 'Seaborn'],
      status: 'Production Deployed',
      statusZh: '生產環境已部署'
    },
    {
      id: 'model-fairness',
      title: 'Model Risk Management & Bias/Fairness Governance',
      titleZh: '模型風險管理 (MRM) 與公平性偏誤治理',
      category: 'production',
      categoryLabel: 'Enterprise Governance',
      categoryLabelZh: '企業治理與合規',
      overview: 'Led rigorous statistical testing of financial models to detect, measure, and mitigate disparate algorithmic impact across sensitive and protected demographic attributes.',
      overviewZh: '主導金融模型之嚴謹統計檢驗，偵測、量化並消除演算法對敏感及受保護人口特徵的差別性衝擊（Disparate Impact）。',
      keyContributions: [
        'Collaborated with Model Risk Management (MRM) validators, technology teams, QA specialists, and business stakeholders.',
        'Executed statistical fairness tests across protected dimensions including race, gender, age, and marital status.',
        'Measured parity metrics: Disparate Impact Ratio, False Positive Rate parity, Equalized Odds, and Precision/Recall differentials.',
        'Drafted comprehensive Model Risk Governance documentation fulfilling federal and internal compliance mandates.'
      ],
      keyContributionsZh: [
        '與模型風險管理（MRM）驗證專家、技術團隊、QA 及業務夥伴密切協作。',
        '針對種族、性別、年齡及婚姻狀況等受保護維度執行嚴密統計公平性檢驗。',
        '衡量等候機率指標：差別衝擊比率、偽陽性率對等、均等化勝算及 Precision/Recall 差異。',
        '撰寫詳盡的模型風險治理與技術規範文檔，完全契合聯邦金融監管標準。'
      ],
      metricsOrOutcomes: [
        'Ensured full adherence to strict MRM validation and federal banking rules',
        'Eliminated unfair demographic skew in high-stakes transaction declines',
        'Established formal technical documentation standards with workflow diagrams'
      ],
      metricsOrOutcomesZh: [
        '確保模型完全符合嚴格的 MRM 驗證標準與聯邦金融法規',
        '消弭重大交易拒絕決策中對於特定族群的非預期偏誤',
        '建立包含系統架構流程圖之高規格技術文檔標準'
      ],
      technologies: ['Fairness Metrics', 'MRM Governance', 'Statistical Hypothesis Testing', 'Python', 'R', 'Audit Documentation'],
      status: 'Governance Standard',
      statusZh: '治理標準實施'
    },
    {
      id: 'patent-automl',
      title: 'Determining Optimal Machine Learning Models (U.S. Patent 11,531,734)',
      titleZh: '決定最佳機器學習模型專利系統 (US 11,531,734)',
      category: 'patent',
      categoryLabel: 'U.S. Patent Granted',
      categoryLabelZh: '獲准美國專利',
      overview: 'Patented architecture for systematic evaluation, hyperparameter exploration, and optimal algorithm selection, enabling scalable automated modeling for mission-critical applications.',
      overviewZh: '獲美國專利授權之系統架構，實現機器學習演算法之自動化評估、多元超參數探索及最優模型決策，為高標準任務提供強大支撐。',
      keyContributions: [
        'Co-invented proprietary methodology with Tony Yu Fu and Xianhong Zhang.',
        'Formulated multi-objective evaluation functions balancing predictive power (AUC, F1) with latency and robustness.',
        'Designed search space pruning algorithms to accelerate convergence across ensemble candidate pools.',
        'Formalized into U.S. Patent 11,531,734 granted on December 20, 2022.'
      ],
      keyContributionsZh: [
        '與 Tony Yu Fu 及 Xianhong Zhang 共同發明專利核心技術。',
        '建立兼顧預測表現（AUC、F1）、推論延遲與模型強韌度的多目標評估函數。',
        '設計搜尋空間剪枝演算法，顯著加速候選集成模型群的收斂效能。',
        '2022 年 12 月 20 日正式取得美國專利局（USPTO）核准。'
      ],
      metricsOrOutcomes: [
        'Granted by U.S. Patent and Trademark Office (Patent # 11,531,734)',
        'Scalable foundation for automated machine learning model governance',
        'Demonstrated verifiable originality in machine learning architecture'
      ],
      metricsOrOutcomesZh: [
        '獲得美國專利商標局（USPTO）正式授權（專利號 11,531,734）',
        '為自動化機器學習模型治理奠定具高擴展性之方法論基礎',
        '具備經專利局認證之原創演算法架構'
      ],
      technologies: ['AutoML', 'Bayesian Tuning', 'Ensemble Optimization', 'Model Selection', 'USPTO'],
      status: 'USPTO Granted (Dec 2022)',
      statusZh: 'USPTO 核准授權 (2022 年 12 月)',
      externalLink: 'https://patents.google.com/patent/US11531734B2/en'
    },
    {
      id: 'ai-agent-security',
      title: 'AI Agent Security, Guardrails & Governance Research',
      titleZh: 'AI 智慧體安全、防護欄 (Guardrails) 與治理研究',
      category: 'research',
      categoryLabel: 'Applied Research',
      categoryLabelZh: '應用研究探索',
      overview: 'Investigating defensive design patterns, safety guardrails, prompt injection mitigation, and multi-step tool execution validation for enterprise autonomous AI agents.',
      overviewZh: '積極探索企業自主 AI 智慧體之防禦性架構設計、安全護欄、Prompt 注入攻擊防範以及多步驟工具呼叫驗證機制。',
      keyContributions: [
        'Architecting guardrail layers evaluating user prompts and model responses for safety, hallucination, and policy adherence.',
        'Researching human-in-the-loop (HITL) checkpoints for high-risk autonomous agent tool execution.',
        'Developing adversarial prompt evaluation suites to benchmark agent resilience against jailbreaks.',
        'Applying statistical risk governance principles from banking MRM to autonomous LLM agent pipelines.'
      ],
      keyContributionsZh: [
        '建構多層級安全防護欄，即時評估輸入提示詞與模型回應之安全性、真實性與合規度。',
        '針對高風險自主智慧體之工具執行動作，設計人機協同（HITL）審核檢查點。',
        '開發對抗式提示詞測試集，基準評估智慧體防禦越獄（Jailbreak）攻擊的韌性。',
        '將金融業 MRM 風險治理的嚴謹思維引入自主 LLM 智慧體管線之中。'
      ],
      metricsOrOutcomes: [
        'Framework for safe enterprise deployment of autonomous tool-calling agents',
        'Convergence of traditional model governance and modern generative safety'
      ],
      metricsOrOutcomesZh: [
        '提供企業安全落地自主工具呼叫智慧體的架構藍圖',
        '促進傳統金融模型治理經驗與現代生成式安全機制之深度融合'
      ],
      technologies: ['LLM Safety', 'Guardrail Design', 'Prompt Injection Defense', 'HITL', 'Agent Orchestration'],
      status: 'Active Applied Research',
      statusZh: '積極推進之應用研究'
    },
    {
      id: 'rag-enterprise',
      title: 'Enterprise RAG & Domain Knowledge Orchestration',
      titleZh: '企業級檢索增強生成 (RAG) 與領域知識編排',
      category: 'research',
      categoryLabel: 'Applied Research',
      categoryLabelZh: '應用研究探索',
      overview: 'Designing high-precision Retrieval-Augmented Generation workflows tailored for regulated corporate environments where hallucination cannot be tolerated.',
      overviewZh: '針對不容許幻覺產生的嚴格監管環境，設計高精準度檢索增強生成（RAG）架構與領域知識檢索工作流。',
      keyContributions: [
        'Formulating dense retrieval and reranking strategies to maximize recall of domain-specific compliance standards.',
        'Integrating citation verification modules ensuring every assertion is strictly attributable to source passages.',
        'Evaluating latency vs. precision trade-offs in multi-step conversational reasoning.',
        'Exploring hybrid semantic-keyword indexing for technical and legal documentation.'
      ],
      keyContributionsZh: [
        '制定稠密檢索與二次重排（Reranking）策略，極大化特定領域合規標準文檔的檢索召回率。',
        '整合引用驗證模組，確保生成的每一條結論皆嚴格可溯源至原始文獻依據。',
        '評估多輪對話推理情境下延遲與回答精確度之權衡點。',
        '為複雜技術手冊與法規文檔探索混合式語意與關鍵字索引架構。'
      ],
      metricsOrOutcomes: [
        'Zero-hallucination constraint enforcement for policy-sensitive enterprise queries',
        'Reproducible knowledge attribution across complex regulatory corpuses'
      ],
      metricsOrOutcomesZh: [
        '在政策敏感型企業諮詢中落實嚴格零幻覺邊界控制',
        '在龐雜法規文檔體系中實現可重複驗證的精準知識溯源'
      ],
      technologies: ['RAG', 'Vector Embeddings', 'Hybrid Retrieval', 'Citation Verification', 'Prompt Optimization'],
      status: 'Applied Prototype & Research',
      statusZh: '應用原型與前沿研究'
    },
    {
      id: 'ai-chip-eda',
      title: 'AI Chip EDA & Low Power Design Automation: From Traditional Chip Design to AI-Native, Agentic EDA',
      titleZh: 'AI 晶片 EDA 與低功耗設計自動化：從傳統晶片設計邁向 AI 原生、Agentic EDA',
      category: 'research' as const,
      categoryLabel: 'Semiconductor & AI Research',
      categoryLabelZh: '半導體與 AI 戰略前沿',
      overview: 'Strategic architectural roadmap for 2026–2035 on the convergence of AI for EDA, LLMs for RTL generation, AI-based verification, AI-driven physical design, Agentic EDA, AI accelerators (GPU/NPU/TPU), Chiplet & 3D IC architectures, HBM memory systems, and low-power AI computing.',
      overviewZh: '針對 2026–2035 年半導體演進之戰略架構藍圖：深度融合 AI for EDA、LLMs RTL 代碼生成、AI 驗證、AI 驅動實體設計、Agentic EDA 智慧體、AI 加速器（GPU/NPU/TPU）、Chiplet 與 3D IC 架構、HBM 記憶體系統及低功耗 AI 計算。',
      keyContributions: [
        'Formulated the 2026–2035 technology evolution stack: AI Model ➔ AI Accelerator ➔ Chiplet Architecture ➔ HBM / Memory System ➔ 3D Integration ➔ AI-Driven EDA Agents ➔ Autonomous Chip Design.',
        'Identified the critical Memory & Data Movement bottleneck: Performance for AI accelerators is governed by memory hierarchy, cache optimization, data movement, bandwidth, and energy-aware scheduling.',
        'Architected the convergence nexus: AI/ML + Knowledge Graphs + LLMs + AI Agents + EDA + Low-Power Chip Design.',
        'Bridged ASU Ph.D. cache power modeling (Penn State SimplePower) and Freescale i.MX chipset data modeling with 20+ years enterprise AI to pioneer AI-Native Chip Design.'
      ],
      keyContributionsZh: [
        '確立 2026–2035 晶片技術演進路徑：AI 模型 ➔ AI 加速器 ➔ Chiplet 架構 ➔ HBM / 記憶體系統 ➔ 3D 整合 ➔ AI 驅動 EDA 智慧體 ➔ 自主晶片設計。',
        '剖析關鍵記憶體與資料搬移瓶頸：AI 加速器效能不僅取決於算力，快取階層優化、資料流動、記憶體頻寬與節能感知調度更為關鍵。',
        '提出核心融合交集：AI/ML + 知識圖譜 + LLMs + AI 智慧體 + EDA + 低功耗晶片設計。',
        '串聯 ASU 博士班快取功耗建模（賓州州立 SimplePower 採納）與飛思卡爾晶片組數據建模之底蘊，跨接 20+ 年企業 AI 經驗開拓 AI 原生晶片設計。'
      ],
      metricsOrOutcomes: [
        'Comprehensive blueprint for Agentic EDA orchestrating RTL generation, verification, placement, and routing',
        'Energy-aware memory hierarchy and cache modeling addressing modern accelerator power walls',
        'From simple EDA automation to true AI-native, multi-agent chip synthesis'
      ],
      metricsOrOutcomesZh: [
        '提供 Agentic EDA 編排 RTL 生成、驗證、佈局到繞線的完整前瞻藍圖',
        '以節能感知記憶體階層與快取建模突破現代加速器功耗牆',
        '從傳統 EDA 工具自動化跨越至真正的 AI 原生多智慧體晶片合成'
      ],
      technologies: ['AI for EDA', 'LLMs for RTL', 'Agentic EDA', 'Low-Power Design', 'HBM / 3D IC', 'Cache Modeling', 'SimplePower', 'Chiplets'],
      status: 'Strategic Research & Vision',
      statusZh: '前沿戰略研究與願景'
    }
  ],

  faqs: [
    {
      question: "What is Dr. Shiue's expertise in IC EDA, Low-Power Design, and AI Chip Automation?",
      questionZh: "薛博士在 IC EDA、低功耗晶片設計與 AI 晶片自動化方面有哪些專業背景與洞見？",
      tag: "IC EDA & AI Chips",
      answer: "Dr. Shiue holds a Ph.D. in Electrical & Computer Engineering from Arizona State University, where his dissertation on cache memory data power modeling was officially adopted by Penn State University's SimplePower cycle-accurate simulator. He previously served as Senior Data Modeling Engineer at FreeScale Semiconductor working on i.MX chipset bus bandwidth, video power, and dynamic process temperature compensation (DPTV). Today, he pioneers the convergence of AI/ML + Knowledge Graphs + LLMs + AI Agents + EDA + Low-Power Chip Design, envisioning AI-native chip design and agentic EDA automating RTL generation, verification, placement, and tape-out for next-generation accelerators, chiplets, and 3D ICs.",
      answerZh: "薛博士擁有亞利桑那州立大學（ASU）電機與電腦工程博士學位，其博士論文快取記憶體功耗建模成果被賓州州立大學 SimplePower 週期精確工具正式採用；他曾任飛思卡爾半導體（FreeScale）資深資料建模工程師，深入 i.MX 晶片組頻寬與 DPTV 動態溫度補償專利技術。如今，他積極探索 AI/ML + 知識圖譜 + LLMs + AI 智慧體 + EDA + 低功耗晶片設計的戰略交集，提出從傳統 EDA 自動化邁向 AI 原生與 Agentic EDA 的 2026–2035 晶片架構演進藍圖。"
    },
    {
      question: "What is Dr. Shiue's experience with XGBoost and LightGBM?",
      questionZh: "薛博士在 XGBoost 與 LightGBM 方面有哪些實務經驗？",
      tag: "Machine Learning",
      answer: "At Bank of America (2017–2026), Dr. Shiue developed mission-critical binary classification models using XGBoost and LightGBM for fraud detection and authentication across 8 core banking channels: CAML, Debit, P2P (Zelle), Wire, ACH, Bill Pay, Credit, and Device. He coupled these with automated feature selection, Optuna parameter optimization, and Splunk production monitoring.",
      answerZh: "在美國銀行（2017–2026）擔任副總裁暨資深資料科學家期間，薛博士廣泛運用 XGBoost 與 LightGBM 構建核心二元分類模型，守護 CAML、Debit、P2P（Zelle）、Wire、ACH、Bill Pay、Credit 及 Device 等 8 大支付管道，並結合自動特徵篩選、Optuna 調校與 Splunk 生產監控。"
    },
    {
      question: "Tell me about Dr. Shiue's U.S. Patent.",
      questionZh: "請介紹薛博士獲得核准的美國專利。",
      tag: "Patents",
      answer: "Dr. Shiue is a co-inventor of U.S. Patent 11,531,734, titled 'Determining Optimal Machine Learning Models,' granted by the USPTO on December 20, 2022 (with Tony Yu Fu and Xianhong Zhang). The patent establishes an automated framework for evaluating, tuning, and selecting optimal predictive models from diverse algorithmic candidates.",
      answerZh: "薛博士是美國專利第 11,531,734 號《Determining Optimal Machine Learning Models》（決定最佳機器學習模型）的共同發明人，於 2022 年 12 月 20 日獲美國專利商標局（USPTO）核准。該專利提供一套自動化調校、評估與選定最優預測模型的完整架構。"
    },
    {
      question: "What is his experience in Explainable AI (XAI) and Model Risk Governance?",
      questionZh: "他在可解釋 AI (XAI) 與模型風險治理 (MRM) 方面有哪些經驗？",
      tag: "Governance & XAI",
      answer: "Dr. Shiue has deep expertise applying SHAP (force plots, summary plots, decision plots), LIME local surrogates, PDP, and ELI5 to make complex gradient-boosted models fully transparent. He worked closely with Model Risk Management (MRM) validators to conduct rigorous bias and fairness testing across protected dimensions (race, gender, age, marital status).",
      answerZh: "薛博士專精於運用 SHAP（力圖、摘要圖、決策圖）、LIME 局部替代模型、PDP 與 ELI5 解構黑盒梯度提升模型。他與美國銀行的模型風險管理（MRM）審查團隊緊密配合，針對性別、種族、年齡及婚姻狀況等受保護群體執行嚴格的偏誤與公平性統計檢驗。"
    },
    {
      question: "What is Dr. Shiue's academic and educational background?",
      questionZh: "薛博士的學術與教育背景為何？",
      tag: "Education",
      answer: "Dr. Shiue holds a Ph.D. in Electrical Engineering & Computer Science from Arizona State University (ASU, 2000), where his cache memory power modeling was integrated into PSU's SimplePower tool. He holds an M.S. in Electrical & Computer Engineering from Western Michigan University (1991) and a B.S. in Electrical Engineering from Ming Chi University of Technology (1985). In 1979, he placed 3rd out of 120,000 students in the Taiwan National College Examination.",
      answerZh: "薛博士獲亞利桑那州立大學（ASU）電機與資訊工程博士（2000 年），論文成果獲賓州州立大學 SimplePower 模擬器採用。他獲西密西根大學碩士（1991 年）與明志科技大學學士（1985 年），並於 1979 年在台灣大專聯考 12 萬名考生中榮獲全國第 3 名。"
    },
    {
      question: "How can I get in touch with Dr. Shiue for opportunities or consulting?",
      questionZh: "如何與薛博士取得聯繫或洽談合作機會？",
      tag: "Contact",
      answer: "Dr. Shiue is based in Austin, Texas. You can reach out directly via his LinkedIn profile (https://www.linkedin.com/in/wentsong-shiue-69425852) or through the contact inquiry form on this website. Phone and email details are available upon request for formal interviews.",
      answerZh: "薛博士目前定居於美國德州奧斯汀（Austin, Texas）。您可以透過其 LinkedIn 個人檔案（https://www.linkedin.com/in/wentsong-shiue-69425852）或本站的聯絡表單取得聯繫。正式面試及合作洽談可進一步提供詳細聯絡資訊。"
    }
  ]
};
