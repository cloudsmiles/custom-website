// 多语言配置
export const translations = {
  zh: {
    // 导航
    traveler: '旅行者',
    arsenal: '技能库',
    chronicles: '编年史',
    message: '留言',
    
    // 旅行者页面
    scholar: '旅行者',
    location: '广东深圳',
    level: 'Lv. 33',
    pathAction: '路径行动：审视',
    
    // 属性
    attributes: '属性',
    knowledge: '知识',
    curiosity: '好奇心',
    resilience: '毅力',
    social: '社交能力',
    stamina: '体力/操作',
    
    // 传记
    biography: '传记',
    bioText: '"一位在数字世界中探索的旅者，Winnie 致力于揭开技术的神秘面纱。拥有坚定的意志和敏锐的思维，他在代码的领域中不断前行，用 Go 语言和前端技术构建属于自己的传奇。"',
    
    // 技能
    skillsTitle: '旅行者的武器库',
    skillsDesc: '"多年数字前沿之旅所掌握的技艺集合。"',
    reactName: 'React',
    reactType: '框架',
    reactDesc: '通过组件和状态塑造现实的艺术，为静态构想赋予生命。',
    goName: 'Go',
    goType: '后端语言',
    goDesc: '简洁而强大的系统编程语言，如利剑般高效锐利。',
    typescriptName: 'TypeScript',
    typescriptType: '类型系统',
    typescriptDesc: '严谨的规范确保道路正确，防止混乱与不确定性。',
    mysqlName: 'MySQL',
    mysqlType: '数据存储',
    mysqlDesc: '知识的宝库，以结构化的方式存储世界的记忆。',
    redisName: 'Redis',
    redisType: '缓存艺术',
    redisDesc: '速度与效率的魔法，让数据如风般迅捷。',
    websocketName: 'WebSocket',
    websocketType: '实时通信',
    websocketDesc: '连接两端的桥梁，实现即时对话的奥秘。',
    
    // 项目
    projectsTitle: '冒险编年史',
    projectsDesc: '"克服挑战、铸就传奇的故事。"',
    project1Id: 'I',
    project1Title: 'QCard游戏平台',
    project1Date: '2026 年至今',
    project1Desc: '一个基于 Go 和 WebSocket 的宏伟建筑，构建支持斗地主、麻将等多种游戏模式的实时对战平台。这是技术与创造力的结晶，展现了全栈开发的深厚功底。',
    readChronicle: '阅读编年史',
    
    // 联系方式
    contactTitle: '发送讯息',
    contactDesc: '"穿越风中传递的信息，终将在旅行者的日志中找到归宿。"',
    nameLabel: '姓名',
    namePlaceholder: '您的姓名...',
    addressLabel: '联系地址',
    addressPlaceholder: '您的邮箱...',
    messageLabel: '消息内容',
    messagePlaceholder: '在此写下您的消息...',
    sendButton: '发送消息',
    
    // 页脚
    footer: '© 2026 // 旅行者日志',
  },
  en: {
    // Navigation
    traveler: 'TRAVELER',
    arsenal: 'ARSENAL',
    chronicles: 'CHRONICLES',
    message: 'MESSAGE',
    
    // Traveler Page
    scholar: 'THE TRAVELER',
    location: 'Shenzhen, China',
    level: 'Lv. 33',
    pathAction: 'PATH ACTION: SCRUTINIZE',
    
    // Attributes
    attributes: 'ATTRIBUTES',
    knowledge: 'KNOWLEDGE',
    curiosity: 'CURIOSITY',
    resilience: 'RESILIENCE',
    social: 'SOCIAL',
    stamina: 'STAMINA',
    
    // Biography
    biography: 'BIOGRAPHY',
    bioText: '"A wanderer in the digital realm, Winnie seeks to unveil the mysteries of technology. With unwavering determination and a keen mind, he forges legends in the domain of code, crafting tales with Go language and frontend arts."',
    
    // Skills
    skillsTitle: "THE TRAVELER'S ARSENAL",
    skillsDesc: '"A collection of masteries acquired through years of journeying across the digital frontier."',
    reactName: 'React',
    reactType: 'Framework',
    reactDesc: 'The art of shaping reality through components and state, bringing life to static visions.',
    goName: 'Go',
    goType: 'Backend Language',
    goDesc: 'A concise yet powerful systems programming language, efficient and sharp as a blade.',
    typescriptName: 'TypeScript',
    typescriptType: 'Type System',
    typescriptDesc: 'A rigid discipline that ensures the path remains true, preventing chaos and uncertainty.',
    mysqlName: 'MySQL',
    mysqlType: 'Data Storage',
    mysqlDesc: 'The treasure vault of knowledge, storing the world\'s memories in structured form.',
    redisName: 'Redis',
    redisType: 'Cache Arts',
    redisDesc: 'The magic of speed and efficiency, making data swift as the wind.',
    websocketName: 'WebSocket',
    websocketType: 'Real-time Comm',
    websocketDesc: 'The bridge connecting both ends, the mystery of instant dialogue.',
    
    // Projects
    projectsTitle: 'CHRONICLES OF ADVENTURE',
    projectsDesc: '"Tales of challenges overcome and legacies forged in the fires of creation."',
    project1Id: 'I',
    project1Title: 'The QCard Game Platform',
    project1Date: '2026 - Present',
    project1Desc: 'A grand architecture built on Go and WebSocket, constructing a real-time battle platform supporting multiple game modes like Fighting Landlord and Mahjong. This is the crystallization of technology and creativity, demonstrating profound full-stack development expertise.',
    readChronicle: 'READ THE CHRONICLE',
    
    // Contact
    contactTitle: 'SEND WORD',
    contactDesc: '"A message sent across the winds to find its destination in the traveler\'s journal."',
    nameLabel: 'NAME',
    namePlaceholder: 'Your name...',
    addressLabel: 'ADDRESS',
    addressPlaceholder: 'Your email...',
    messageLabel: 'MESSAGE',
    messagePlaceholder: 'Write your message here...',
    sendButton: 'SEND MESSAGE',
    
    // Footer
    footer: '© 2026 // THE TRAVELER\'S LOG',
  },
};

// 属性数值配置
export const attributesConfig = {
  zh: {
    knowledge: { value: 85, max: 100 },
    curiosity: { value: 95, max: 100 },
    resilience: { value: 88, max: 100 },
    social: { value: 72, max: 100 },  // 社交能力：中等偏上
    stamina: { value: 68, max: 100 },  // 体力/操作：中等
  },
  en: {
    knowledge: { value: 85, max: 100 },
    curiosity: { value: 95, max: 100 },
    resilience: { value: 88, max: 100 },
    social: { value: 72, max: 100 },
    stamina: { value: 68, max: 100 },
  },
};

// 默认语言
export const defaultLang = 'zh';
