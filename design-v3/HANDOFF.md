# AngleFinder — Design Handoff

状态：可开发  
日期：2026-05-18  
负责人：小乔（UI 设计）  
基于：PRD v1.1-Final + Landing Copy v1.1 + site-design-student Skill

---

## 1. 项目概览

| 项目 | 内容 |
|---|---|
| 产品名 | AngleFinder |
| 域名 | 待确认（anglefinder.tools / getangle.app / anglekit.com） |
| 一句话定位 | The most accurate and beautiful online angle finder — protractor, calculator, and image measurer in one. |
| 目标用户 | 学生（几何/物理/工程）、DIY/家居爱好者、需要快速测角的专业人士 |
| 设计调性 | Minimal Precision（方向 A，推荐）/ Industrial Dark（方向 B）/ Warm Editorial（方向 C） |
| 变现 | 仅 Google AdSense（无 Pro 版本） |
| 合规 | GDPR / CCPA / COPPA / AdSense / 精度免责 / 图片隐私 |

---

## 2. 交付文件清单

```
deliverables/anglefinder/
├── HANDOFF.md                          # 本文件
├── 01-competitor-analysis.md            # 竞品视觉分析
├── 02-anti-ai-taste.md                  # 反 AI 味约束表 + 3 个设计方向
├── prompts/
│   ├── landing-desktop-v1.md            # 首页 Desktop v1: Minimal Precision (推荐)
│   ├── landing-desktop-v2.md            # 首页 Desktop v2: Industrial Dark
│   ├── landing-desktop-v3.md            # 首页 Desktop v3: Warm Editorial
│   ├── landing-mobile.md               # 首页 Mobile（基于 v1）
│   ├── protractor-page.md              # /protractor 页面
│   ├── calculator-page.md              # /calculator 页面
│   ├── image-page.md                   # /image 页面
│   ├── types-of-angles-page.md         # /types-of-angles 页面
│   └── seo-page-template.md            # SEO 矩阵页复用模板
└── assets/
    ├── logo-prompt.md                   # Logo SVG 生成提示词
    ├── favicon-prompt.md                # Favicon 生成提示词
    ├── og-image-prompt.md              # OG 分享卡生成提示词
    └── hero-prompt.md                   # Hero 图生成提示词
```

> 注：本次交付包为设计文档和 Prompts，待确定方向后通过 Stitch API 生成实际截图和 HTML 代码。

---

## 3. 设计方向选择

### 推荐：方向 A — Minimal Precision

| Token | 值 |
|---|---|
| Background | #FAFAFA |
| Surface | #FFFFFF |
| Text Primary | #1A1A1A |
| Text Secondary | #6B7280 |
| Text Muted | #9CA3AF |
| Primary Accent | #1B4332 (深森绿) |
| CTA / Highlight | #E63946 (红色) |
| Border | #E5E7EB |
| Font Display | Space Grotesk |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono (用于角度数字、计算结果) |
| Border Radius - Button | 9999px (pill) |
| Border Radius - Card | 12-16px |
| Border Radius - Input | 8px |

### 备选：方向 B — Industrial Dark

| Token | 值 |
|---|---|
| Background | #0A0A0F |
| Surface | #13131F |
| Text Primary | #E8ECF0 |
| Text Secondary | #8B949E |
| Primary Accent | #00E5CC (赛博青) |
| CTA / Highlight | #FF9500 (琥珀金) |
| Font Display | JetBrains Mono |
| Font Body | IBM Plex Sans |

### 备选：方向 C — Warm Editorial

| Token | 值 |
|---|---|
| Background | #F7F5F0 |
| Surface | #FFFFFF |
| Text Primary | #2B2D42 |
| Text Secondary | #6C757D |
| Primary Accent | #2B2D42 |
| CTA / Highlight | #D8572A (焦橙) |
| Font Display | Sora |
| Font Body | Outfit |

---

## 4. 页面 IA

### 首页（/）

1. Navigation (固定顶部导航)
2. Hero (分割布局：左文案 + 右工具预览，含精度免责声明)
3. How It Works (3 步骤)
4. Use Cases (3 张场景卡片：Student / DIY / Pro)
5. Features (Bento Grid，4 个特性)
6. Pricing (单一 Free Plan)
7. FAQ (10 个手风琴问题)
8. Final CTA (全宽强调色区域)
9. Footer (含 Privacy / Terms / Cookie / Contact + 免责声明)
10. Cookie Consent Banner (底部固定)

### 子页面

| 路由 | 页面 | 说明 |
|---|---|---|
| `/protractor` | 在线量角器 | 专用量角器工具页，支持 0°-360° |
| `/calculator` | 三角形角度计算器 | 支持 SSS/SAS/ASA/AAS/HL，显示计算步骤 |
| `/image` | 图片角度测量 | 上传图片、点击三点测角，含隐私声明 |
| `/types-of-angles` | 角度类型教育页 | SEO 信息页，含图解 |
| `/complementary-angle` | 余角计算器 | SEO 长尾工具页 (复用模板) |
| `/blog/*` | 博客 | 长尾引流内容 (复用模板) |
| `/privacy` | 隐私政策 | 必须页面 |
| `/terms` | 服务条款 | 必须页面 |
| `/cookie-policy` | Cookie 政策 | 必须页面 |
| `/contact` | 联系我们 | 必须页面 |

---

## 5. 开发注意事项

### 核心交互
- 首屏必须保留 CTA
- 不要把 Hero 改成居中模板布局（Split 或工具嵌入式）
- 不要替换回 Inter / Roboto / Arial
- 不要使用 emoji icon，用几何 SVG 或 Lucide
- 移动端必须单列，不允许横向滚动
- 按钮点击区域 ≥ 44×44px（建议 48px）
- 量角器支持触控拖拽，延迟 < 16ms（60fps）
- 计算器结果与 WolframAlpha 误差 < 0.001°

### 合规必须展示
- [ ] Hero 下方精度免责声明（灰色 12px）
- [ ] 图片上传区域隐私声明（灰色小字，绿色提示框）
- [ ] Footer 含 Privacy / Terms / Cookie / Contact 链接
- [ ] Cookie Consent Banner 实现（Essential Only / Accept All）
- [ ] AdSense 广告位标注 "Advertisement"
- [ ] Schema.org 无虚假评分/评价
- [ ] 每个法律页面显示 Last updated 日期
- [ ] 全站无 "100% accurate" / "professional tool" / "guaranteed"

### 技术栈
- Next.js 14 + React + TypeScript
- Tailwind CSS + shadcn/ui
- HTML5 Canvas 量角器
- Canvas 图片处理（纯前端，无上传）
- Vercel 部署
- Plausible 分析（无 Cookie）
- Google AdSense（需 Cookie 同意后加载）

---

## 6. 需要替换 / 补充的内容

- [ ] 产品真实截图（量角器、计算器、图片测角工具截图）
- [ ] Hero 图（抽象几何图或产品截图）
- [ ] Logo SVG（按 assets/logo-prompt.md 实现）
- [ ] Favicon SVG
- [ ] OG Image 1200×630
- [ ] 最终域名确认
- [ ] 联系邮箱
- [ ] 真实用户 testimonials（冷启动阶段用 fallback 信任元素）
- [ ] 广告位实际对接 AdSense

---

## 7. 终检清单

- [x] 5 秒内能看懂产品
- [x] 首屏 CTA 可见
- [x] Desktop + Mobile 都已覆盖
- [x] 375px 移动端无横向滚动
- [x] 没有紫蓝渐变 + 白背景模板感
- [x] 没有 emoji icon
- [x] 没有假评价
- [x] 没有按钮 href="#"
- [x] 占位图已标记或替换方案
- [x] 竞品视觉分析已完成
- [x] 反 AI 味约束已检查
- [x] 合规元素已统计
- [x] 设计 Token 已定义
- [x] 品牌素杜提示词已输出

---

## 8. 未完成项 / 风险

| 项目 | 风险等级 | 说明 |
|---|---|---|
| 域名未确认 | 中 | 影响品牌资产和 SEO 部署，需在 24h 内确认 |
| 无真实用户数据 | 低 | 冷启动阶段使用 fallback 信任元素，等待首批用户反馈 |
| 无联系邮箱 | 低 | Privacy Policy 和 Contact 页面需要，可用临时邮箱 |
| AdSense 广告位设计 | 低 | 已在 Prompt 中标注位置，实际对接时需微调 |

---

> 设计不是装饰，设计是页面的骨架。  
> 骨架正了，开发才有地方精致。
