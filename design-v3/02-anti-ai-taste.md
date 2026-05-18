# AngleFinder — 反 AI 味约束表

## AI 默认做法 vs 应该做

| AI 默认做法 | 应该做 |
|---|---|
| Inter / Roboto 字体 | **Space Grotesk** / **DM Sans** / **JetBrains Mono** — 有记忆点的字体 |
| 紫蓝渐变 + 白背景 | 避开紫蓝，考虑深色主题或暖色编辑感 |
| 对称居中 3 列 Features | **Split Hero** / **Bento Grid** / **工具嵌入式布局** |
| emoji 做 icon | **Lucide 图标** / 几何线条 SVG / 量角器抽象图形 |
| 统一 border-radius | 有尖有圆：按钮圆角、卡片小圆角、数据展示框尖角 |
| 白灰交替 section | 用色块区分、渐变过渡、分隔线 |
| "Revolutionize" 标题 | 具体、有动作感、说人话 — "Measure Any Angle. Instantly." |

## 禁用词

```
Revolutionize / Empower / Seamless / Cutting-edge / Next-generation
Unlock your potential / Transform your workflow / AI-powered
```

## 必须避开的设计

- [x] 不用蓝色主色调（竞品已用烂）
- [x] 不用通用 SaaS 模板布局（居中 Hero + 3 列 Features）
- [x] 不用假评价 / 假数据（PRD 明确无真实用户数据）
- [x] 不用 "100% accurate" / "professional tool" / "guaranteed" 等高风险文案
- [x] 不用 emoji 图标
- [x] 不用 Google CDN 占位图（使用纯 CSS 量角器图形或抽象几何图形）
- [x] 不用按钮 href="#"

## 必须保留的合规元素

- [x] Hero 下方精度免责声明（灰色 12px）
- [x] 图片 Tab 入口处隐私声明（灰色小字）
- [x] Footer 隐私 / 服务条款 / Cookie / Contact 链接
- [x] Cookie Consent Banner（开发实现）
- [x] AdSense 广告位标注 "Advertisement"

---

# 三个设计方向

## 方向 A：Minimal Precision（浅色极简·精密感）

> 最接近 PRD 意图：白色/浅色背景，干净专业，类似 Desmos 和 Google Calculator

- **背景**: `#FAFAFA` 浅灰白
- **Surface**: `#FFFFFF` 纯白卡片
- **主色**: `#1B4332` 深森绿（不是蓝）
- **强调色**: `#E63946` 红色（与绿形成强反差）
- **文字主**: `#1A1A1A`
- **文字次**: `#6B7280`
- **显示字体**: Space Grotesk
- **正文字体**: DM Sans
- **调性**: Minimal / 数学工具的简洁专业感
- **布局**: Split Hero（左文案右工具预览）+ Bento Features
- **量角器样式**: 半透明绿色圆弧，实心红色指针
- **适合**: 学生、教育场景、喜欢清爽风格

## 方向 B：Industrial Dark（深色工业·开发者感）

> 与竞品形成最强差异化，适合追求现代感的工具站

- **背景**: `#0A0A0F` 深炭黑
- **Surface**: `#13131F` 卡片色
- **主色**: `#00E5CC` 赛博青（青色光）
- **强调色**: `#FF9500` 琥珀金
- **文字主**: `#E8ECF0` 淡灰白
- **文字次**: `#8B949E`
- **显示字体**: JetBrains Mono（等宽字体，精密感）
- **正文字体**: IBM Plex Sans
- **调性**: Industrial / 开发者工具风
- **布局**: 工具嵌入式 Hero（首屏直接是量角器）+ 暗色卡片 Features
- **量角器样式**: 发光青色圆弧，橙色数值高亮
- **适合**: 专业人士、开发者、喜欢暗色主题的用户

## 方向 C：Warm Editorial（暖色编辑·高端内容感）

> 类似高端设计工具的杂志感，适合想要"好看"的用户

- **背景**: `#F7F5F0` 暖白/米白
- **Surface**: `#FFFFFF` 纯白卡片带微微阴影
- **主色**: `#2B2D42` 深蓝灰（文字色主色）
- **强调色**: `#D8572A` 焦橙
- **文字主**: `#2B2D42`
- **文字次**: `#6C757D`
- **显示字体**: Sora（极简几何感）
- **正文字体**: Outfit
- **调性**: Editorial / 杂志感设计工具
- **布局**: 非对称分割（左大图右文案）+ 编排式卡片
- **量角器样式**: 精致的线条形量角器，微粗线条风格
- **适合**: 追求品质感、喜欢杂志风格的用户

## 对比表

| 维度 | 方向 A Minimal | 方向 B Industrial | 方向 C Editorial |
|---|---|---|---|
| 亮度 | 浅色 | 深色 | 浅色 |
| 调性 | Minimal 精密 | Industrial 工具 | Editorial 杂志 |
| 字体 | Space Grotesk + DM Sans | JetBrains Mono + IBM Plex | Sora + Outfit |
| 主色 | 深森绿 | 赛博青 | 深蓝灰 |
| 强调色 | 红 | 琥珀金 | 焦橙 |
| 竞品差异化 | 中（颜色差异） | 高（深色冲击） | 中（设计感差异） |
| 与 PRD 匹配 | 高（PRD 要浅色） | 低（PRD 要浅色） | 中（PRD 要浅色） |
| 学生友好度 | 高 | 中 | 高 |
| 移动端适合 | 高 | 高 | 高 |

## 小乔推荐

**推荐方向 A（Minimal Precision）作为首选**。理由：
1. PRD 明确要求"白色/浅色背景，干净专业"，方向 A 最符合产品意图
2. 深绿主色 + 红色强调与竞品的蓝色系形成明确区分
3. Space Grotesk + DM Sans 是现代工具站的标杆组合
4. 对学生用户最友好，不会因暗色而让人感到"不专业"

**如果万哥想要更强的视觉冲击力，选方向 B（Industrial Dark）**。
