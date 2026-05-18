# AngleFinder — Design Asset Manifest

> 方向：A — Minimal Precision  
> 版本：Final v3（360° 全圆量角器版）  
> 日期：2026-05-18  
> 设计师：小乔

---

## Design Tokens

| Token | Value |
|---|---|
| Background | #FAFAFA |
| Surface (Cards) | #FFFFFF |
| Text Primary | #1A1A1A |
| Text Secondary | #6B7280 |
| Text Muted | #9CA3AF |
| Primary Accent | #1B4332 (深森绿) |
| CTA / Highlight | #E63946 (红色) |
| Border | #E5E7EB |
| Font Display | Space Grotesk |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono (角度数字、计算结果) |
| Border Radius Button | 9999px (pill) |
| Border Radius Card | 12-16px |

## 页面清单

| 页面 | 截图 | HTML | 说明 |
|---|---|---|---|
| Desktop 首页 | desktop-homepage.png | desktop-homepage.html | 360°量角器首屏可用，无 Tab |
| Mobile 首页 | mobile-homepage.png | mobile-homepage.html | 单列，全圆量角器首屏可用 |
| /protractor | protractor-page.png | protractor-page.html | 专用量角器工具页 |
| /calculator | calculator-page.png | calculator-page.html | 三角形角度计算器 |
| /image | image-page.png | image-page.html | 图片角度测量（含隐私声明） |

## 交付包结构

```
deliverables/anglefinder/
├── HANDOFF.md                          # 开发交接文档
├── MANIFEST.md                         # 本文件
├── 01-competitor-analysis.md            # 竞品视觉分析
├── 02-anti-ai-taste.md                  # 反 AI 味约束 + 3 方向
├── prompts/                             # Stitch Prompts
│   ├── landing-desktop-v1.md            # 首页 Desktop v1 Prompt
│   ├── landing-desktop-v2.md            # 首页 Desktop v2 Prompt
│   ├── landing-desktop-v3.md            # 首页 Desktop v3 Prompt
│   ├── landing-mobile.md               # 首页 Mobile Prompt
│   ├── protractor-page.md              # /protractor Prompt
│   ├── calculator-page.md              # /calculator Prompt
│   ├── image-page.md                   # /image Prompt
│   ├── types-of-angles-page.md         # /types-of-angles Prompt
│   └── seo-page-template.md            # SEO 页面复用模板
├── screenshots/                         # 设计稿截图
│   ├── desktop-homepage.png            # Desktop 首页
│   ├── mobile-homepage.png             # Mobile 首页
│   ├── protractor-page.png             # /protractor
│   ├── calculator-page.png             # /calculator
│   └── image-page.png                  # /image
├── html/                                # HTML 源码
│   ├── desktop-homepage.html           # Desktop 首页
│   ├── mobile-homepage.html            # Mobile 首页
│   ├── protractor-page.html            # /protractor
│   ├── calculator-page.html            # /calculator
│   └── image-page.html                 # /image
└── assets/                              # 品牌素材提示词
    ├── logo-prompt.md                   # Logo SVG
    ├── favicon-prompt.md                # Favicon
    ├── og-image-prompt.md              # OG 分享卡
    └── hero-prompt.md                   # Hero 图
```

## 合规检查清单

- [x] Hero 下方精度免责声明（灰色 12px）
- [x] 图片上传区域隐私声明
- [x] Footer 含 Privacy / Terms / Cookie / Contact
- [x] Cookie Consent Banner 设计（Essential Only / Accept All）
- [x] AdSense 广告位标注位置
- [x] Schema.org 无虚假评分
- [x] 首屏 360° 量角器可直接使用（无 Tab）

## 未完成项

- [ ] Logo SVG 实现
- [ ] Favicon 实现
- [ ] OG Image 1200×630 生成
- [ ] Hero 图生成
- [ ] 域名确认
- [ ] 联系邮箱
- [ ] 真实用户 testimonials
