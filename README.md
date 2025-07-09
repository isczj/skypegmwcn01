# 企业门户CMS系统使用说明

## 📋 项目概述

这是一个基于 **Next.js 14** 构建的企业门户CMS系统，专为艺术培训、医疗健康等行业的企业提供专业的门户网站解决方案。

### 技术栈
- **前端框架**: Next.js 14 (React框架)
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **语言**: TypeScript
- **后端集成**: 支持芋道(Yudao)开源框架

## 🚀 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
```bash
git clone <your-repo-url>
cd cms
```

2. **安装依赖**
```bash
npm install
# 或者
yarn install
```

3. **启动开发服务器**
```bash
npm run dev
# 或者
yarn dev
```

4. **访问网站**
打开浏览器访问 `http://localhost:3000` (如果端口被占用，会自动使用3001、3002等)

## 📚 Next.js 运行原理详解

### 什么是Next.js？
Next.js是一个基于React的全栈框架，提供了许多开箱即用的功能：

### 1. 渲染模式
- **SSG (Static Site Generation)**: 静态站点生成
  - 在构建时预先生成HTML文件
  - 适合内容相对固定的页面
  - SEO友好，加载速度快

- **SSR (Server-Side Rendering)**: 服务端渲染
  - 每次请求时在服务器生成HTML
  - 适合动态内容
  - 首屏加载快

- **CSR (Client-Side Rendering)**: 客户端渲染
  - 在浏览器中渲染页面
  - 适合交互性强的应用

### 2. 文件系统路由
```
app/
├── page.tsx          # 主页 (/)
├── about/
│   └── page.tsx      # 关于页面 (/about)
├── articles/
│   └── page.tsx      # 文章页面 (/articles)
└── layout.tsx        # 根布局
```

### 3. 组件结构
```
components/
├── Hero.tsx          # 首页英雄区域
├── Features.tsx      # 功能特性展示
├── About.tsx         # 关于我们
├── Services.tsx      # 服务介绍
└── Contact.tsx       # 联系方式
```

## 🛠️ 项目结构说明

```
cms/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页
│   └── articles/          # 文章页面目录
├── components/            # 可复用组件
│   ├── Hero.tsx          # 首页横幅
│   ├── Features.tsx      # 功能特性
│   ├── About.tsx         # 关于我们
│   ├── Services.tsx      # 服务介绍
│   └── Contact.tsx       # 联系表单
├── lib/                  # 工具函数和API
│   └── api.ts           # API接口封装
├── public/              # 静态资源
├── package.json         # 项目配置
├── next.config.js       # Next.js配置
├── tailwind.config.js   # Tailwind CSS配置
└── tsconfig.json        # TypeScript配置
```

## 🎨 内容管理

### 修改页面内容
1. **首页内容**: 编辑 `components/Hero.tsx`
2. **功能特性**: 编辑 `components/Features.tsx`
3. **服务介绍**: 编辑 `components/Services.tsx`
4. **联系信息**: 编辑 `components/Contact.tsx`

### 添加新页面
1. 在 `app/` 目录下创建新文件夹
2. 在文件夹中创建 `page.tsx` 文件
3. 例如创建新闻页面：
```typescript
// app/news/page.tsx
export default function News() {
  return (
    <div>
      <h1>新闻中心</h1>
      {/* 新闻内容 */}
    </div>
  )
}
```

## 🚀 部署方案

### 1. Vercel 部署（推荐）
**优势**: 零配置、自动部署、全球CDN

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

**特点**:
- 每次Git推送自动部署
- 支持预览部署
- 免费额度充足

### 2. Netlify 部署
**优势**: 简单易用、支持表单处理

1. 连接GitHub仓库
2. 设置构建命令: `npm run build`
3. 设置发布目录: `out`
4. 自动部署

### 3. 静态导出部署
适合传统服务器或CDN：

```bash
# 修改 next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

# 构建静态文件
npm run build

# 生成的静态文件在 out/ 目录
```

### 4. Docker 部署
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### 5. 服务器部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start

# 使用PM2管理进程
npm install -g pm2
pm2 start npm --name "cms" -- start
```

## 🔄 内容更新策略

### 静态内容更新
**问题**: 是否每次更改CMS都要重新部署？

**答案**: 取决于内容类型和部署方式：

#### 1. 静态内容（当前项目）
- **需要重新部署**: 是的
- **原因**: 内容写在组件代码中
- **流程**: 修改代码 → 提交Git → 自动部署

#### 2. 动态内容（推荐升级方案）
可以集成无头CMS实现动态内容管理：

```typescript
// 集成Strapi/Contentful等无头CMS
export async function getStaticProps() {
  const articles = await fetch('https://your-cms-api.com/articles')
  
  return {
    props: { articles },
    revalidate: 60 // 60秒重新验证
  }
}
```

### 推荐的内容管理流程

#### 方案一：Git工作流（当前）
```
内容修改 → Git提交 → 自动部署 → 网站更新
```

#### 方案二：无头CMS（推荐升级）
```
CMS后台修改 → API更新 → 网站自动重新生成 → 内容更新
```

## 🔧 开发指南

### 添加新功能
1. **创建组件**
```typescript
// components/NewFeature.tsx
export default function NewFeature() {
  return (
    <section className="py-20">
      {/* 功能内容 */}
    </section>
  )
}
```

2. **在页面中使用**
```typescript
// app/page.tsx
import NewFeature from '@/components/NewFeature'

export default function Home() {
  return (
    <main>
      <NewFeature />
    </main>
  )
}
```

### 样式定制
使用Tailwind CSS类名：
```typescript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  内容
</div>
```

### API集成
```typescript
// lib/api.ts
export async function fetchArticles() {
  const response = await fetch('/api/articles')
  return response.json()
}
```

## 🌐 与芋道后端集成

### 1. API配置
```typescript
// lib/api.ts
const API_BASE_URL = 'http://your-yudao-backend.com/api'

export const api = {
  // 获取文章列表
  getArticles: () => fetch(`${API_BASE_URL}/articles`),
  
  // 提交联系表单
  submitContact: (data: ContactForm) => 
    fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
}
```

### 2. 环境变量配置
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://your-yudao-backend.com/api
NEXT_PUBLIC_SITE_NAME=企业门户网站
```

## 📱 响应式设计

项目使用Tailwind CSS实现响应式设计：
- `sm:` 小屏幕 (640px+)
- `md:` 中等屏幕 (768px+)
- `lg:` 大屏幕 (1024px+)
- `xl:` 超大屏幕 (1280px+)

## 🔍 SEO优化

### 1. 元数据配置
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: '企业门户网站',
  description: '专业的艺术培训、医疗健康等企业门户网站',
  keywords: '企业门户,艺术培训,医疗健康,CMS'
}
```

### 2. 结构化数据
```typescript
// 添加JSON-LD结构化数据
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "企业门户网站",
  "description": "专业的企业门户解决方案"
}
```

## 🚨 常见问题

### Q1: 端口被占用怎么办？
A: Next.js会自动尝试其他端口(3001, 3002...)，或手动指定：
```bash
npm run dev -- -p 4000
```

### Q2: 如何修改网站标题？
A: 编辑 `app/layout.tsx` 中的 `metadata` 对象

### Q3: 如何添加新的页面？
A: 在 `app/` 目录下创建新文件夹和 `page.tsx` 文件

### Q4: 如何更改颜色主题？
A: 修改 `tailwind.config.js` 或直接使用Tailwind颜色类

### Q5: 部署后样式丢失？
A: 检查 `next.config.js` 配置，确保静态资源路径正确

## 📞 技术支持

如果您在使用过程中遇到问题，可以：
1. 查看 [Next.js 官方文档](https://nextjs.org/docs)
2. 查看 [Tailwind CSS 文档](https://tailwindcss.com/docs)
3. 提交 GitHub Issue

---

**注意**: 这是一个静态站点生成项目，适合内容相对固定的企业门户网站。如需要频繁更新内容，建议升级为动态CMS方案。