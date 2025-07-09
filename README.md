# CMS企业门户网站

基于Next.js 14和芋道框架的企业门户网站解决方案，专为艺术培训、医疗健康等企业设计。

## 🎯 项目特色

- **静态站点生成 (SSG)** - 极快的加载速度和优秀的SEO表现
- **SEO优化** - 专为搜索引擎优化设计
- **响应式设计** - 完美适配各种设备
- **现代化UI** - 使用Tailwind CSS构建美观界面
- **TypeScript** - 类型安全，开发体验优秀

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 配置环境变量
创建 `.env.local` 文件：
```env
# 芋道后端API地址
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

# 网站配置
NEXT_PUBLIC_SITE_NAME=企业门户网站
NEXT_PUBLIC_SITE_DESCRIPTION=专业的艺术培训、医疗健康等企业门户网站
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建生产版本
```bash
npm run build
```

## 🏗️ 技术架构

```
前端 (Next.js 14)
├── 静态生成 (SSG)
├── 增量静态再生成 (ISR)
├── TypeScript
├── Tailwind CSS
└── 组件化开发

后端 (芋道框架)
├── RESTful API
├── MySQL/PostgreSQL
├── Redis缓存
└── 内容管理
```

## 📁 项目结构

```
cms/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── articles/          # 文章相关页面
├── components/            # 可复用组件
│   ├── Hero.tsx          # 首页横幅
│   ├── Features.tsx      # 特色功能
│   ├── About.tsx         # 关于我们
│   ├── Services.tsx      # 服务介绍
│   └── Contact.tsx       # 联系方式
├── lib/                  # 工具函数
│   └── api.ts           # API接口封装
├── public/              # 静态资源
└── 配置文件
    ├── next.config.js   # Next.js配置
    ├── tailwind.config.js # Tailwind配置
    ├── tsconfig.json    # TypeScript配置
    └── package.json     # 项目依赖
```

## 🔧 芋道后端集成

### 需要实现的API接口：

1. **文章管理API**
   - `GET /api/articles` - 获取文章列表
   - `GET /api/articles/{id}` - 获取文章详情

2. **分类管理API**
   - `GET /api/categories` - 获取分类列表

3. **页面管理API**
   - `GET /api/pages/{slug}` - 获取页面数据

4. **网站配置API**
   - `GET /api/config/site` - 获取网站配置

### 示例Java Controller：

```java
@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    
    @GetMapping
    public PageResult<ArticleVO> getArticles(
        @RequestParam(defaultValue = "1") Integer page,
        @RequestParam(defaultValue = "10") Integer size,
        @RequestParam(required = false) String category,
        @RequestParam(required = false) String keyword
    ) {
        // 实现文章列表查询
        return articleService.getArticles(page, size, category, keyword);
    }
    
    @GetMapping("/{id}")
    public ArticleVO getArticle(@PathVariable Long id) {
        // 实现文章详情查询
        return articleService.getArticle(id);
    }
}
```

## 🚀 部署指南

### Vercel部署 (推荐)
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量
4. 自动部署

### 静态文件部署
```bash
npm run build
```
生成的静态文件可以部署到任何静态托管服务。

## 📊 SEO优化

### 已实现的SEO特性
- ✅ 静态生成，页面加载极快
- ✅ 完整的meta标签配置
- ✅ Open Graph和Twitter Card支持
- ✅ 结构化数据标记
- ✅ 自动生成sitemap
- ✅ robots.txt配置

## 🔄 内容更新策略

### 增量静态再生成 (ISR)
对于需要频繁更新的内容，使用ISR：

```typescript
// 在页面组件中
export const revalidate = 3600 // 1小时重新生成
```

### 手动重新构建
当内容更新时，触发重新构建：

```bash
npm run build
```

## 📞 技术支持

如有问题，请联系：
- 邮箱：support@company.com
- 电话：400-123-4567

## 📄 许可证

MIT License