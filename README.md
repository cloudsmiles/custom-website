# 🎮 Winnie's Traveler's Log - 多语言个人展示网站

一个基于 **Octopath Traveler** 风格的奇幻 RPG 风个人介绍网站，支持中英文切换。

## ✨ 特性

- 🌍 **多语言支持**：中文/英文一键切换
- 🎨 **HD-2D 美学**：Canvas 渲染浮尘粒子效果、波光粼粼
- 📊 **属性系统**：知识、好奇心、毅力、社交能力、体力
- ⚔️ **技能展示**：React、Go、TypeScript、MySQL、Redis、WebSocket
- 📜 **编年史**：项目经历展示
- 💌 **联系方式**：复古风格留言板

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
src/
├── App.tsx                  # 主应用组件
├── i18n.ts                  # 多语言配置
├── index.css                # 样式文件
├── main.tsx                 # 入口文件
└── components/
    └── CanvasBackground.tsx # Canvas 背景渲染（粒子效果）
```

## 🛠️ 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Motion** - 动画库
- **Lucide React** - 图标库
- **Tailwind CSS v4** - 样式框架
- **Canvas 2D** - 高性能粒子渲染

## ⚡ 性能优化

- Canvas 2D 渲染浮尘粒子，GPU 加速
- 页面不可见时自动暂停动画
- 移动端自动降低粒子数量
- 响应式设计，适配移动端

## 🎯 自定义内容

### 修改个人信息

编辑 `src/i18n.ts` 文件：

```typescript
export const translations = {
  zh: {
    // 中文内容
  },
  en: {
    // English content
  }
};
```

### 调整属性值

在 `src/i18n.ts` 中修改 `attributesConfig`：

```typescript
export const attributesConfig = {
  zh: {
    knowledge: { value: 85, max: 100 },
    social: { value: 72, max: 100 },
    stamina: { value: 68, max: 100 },
    // ...
  }
};
```

## 📝 更新日志

### v1.1.0
- ✅ Canvas 2D 渲染粒子效果，提升性能
- ✅ 移除 Tyndall 光束，简化背景
- ✅ 优化移动端菜单动画
- ✅ 提升页面加载速度

### v1.0.0
- ✅ 实现中英文多语言支持
- ✅ 添加社交能力和体力属性
- ✅ 更新为 Winnie 的专属内容
- ✅ 添加 Go、MySQL、Redis、WebSocket 技能
- ✅ 展示卡牌游戏服务器项目

## 🌐 语言切换

点击右上角的 **语言按钮**（🌐 图标）在中英文之间切换。

## 📄 License

MIT License

---

**© 2026 // The Traveler's Log**
*一位在数字世界中探索的旅者*