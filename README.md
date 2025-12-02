# DORA - 面向机器人的架构 | 官方网站

这是 DORA 项目的官方网站首页，采用现代化的赛博朋克风格设计，展示 DORA 作为下一代机器人数据流编程框架的核心特性和优势。

## 项目概述

**DORA** 是基于 Rust 语言开发的高性能数据流中间件，专为现代机器人应用设计。相比传统的 ROS2，DORA 提供：

- ⚡ **极致性能**：比 ROS2 快 10-17 倍
- 🧩 **模块化架构**：基于数据流范式的声明式设计
- 🤖 **开箱即用**：4000+ 预置节点覆盖各种应用场景
- 🔧 **零拷贝传输**：基于 Apache Arrow 的高效数据传递

## 文件结构

```
├── index.html          # 中文版主页面
├── index_en.html       # 英文版主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── assets/             # 资源文件
└── README.md           # 本说明文件
```

## 页面功能区域

### 1. 导航栏
- **品牌标识**：DORA logo 和机器人图标
- **主要链接**：特性、架构、应用场景、开始使用
- **外部链接**：GitHub 仓库
- **语言切换**：中文/英文版本切换
- **响应式菜单**：移动端汉堡菜单

### 2. 主英雄区域 (Hero Section)
- **核心标语**：数据流编程革命性框架
- **关键指标展示**：
  - 10-17倍性能提升
  - 4000+预置节点
  - 微秒级延迟
- **动态视觉效果**：机器人和数据流动画
- **行动按钮**：立即开始、查看文档

### 3. 特性展示 (Features)
- **极致性能**：Rust 实现、零拷贝、GPU 加速
- **模块化架构**：数据流范式、独立进程、声明式配置
- **开箱即用**：丰富的预置节点、AI 框架集成

### 4. 技术架构 (Architecture)
- **架构图展示**：数据源、处理节点、输出节点、监控
- **技术栈说明**：
  - Apache Arrow：零序列化数据格式
  - Zenoh：分布式通信协议
  - OpenTelemetry：可观测性标准

### 5. 应用场景 (Use Cases)
- **计算机视觉**：目标检测、图像分割、人脸识别
- **机器人控制**：自主导航、传感器融合、运动控制
- **工业自动化**：质量检测、设备监控、生产线控制
- **AI 集成**：深度学习模型部署、多模态 AI 系统

### 6. 快速开始 (Getting Started)
- **安装指南**：pip 和 cargo 安装方式
- **示例运行**：YOLO 目标检测示例
- **代码演示**：Python 数据流构建示例

### 7. 平台支持 (Support Matrix)
- **操作系统**：Linux（完全支持）、Windows（支持）、macOS（完全支持）
- **编程语言**：Python（推荐）、Rust（完全支持）、C/C++（最佳努力）

### 8. 页脚 (Footer)
- **项目信息**：Logo 和描述
- **资源链接**：文档、示例、API 参考
- **社区支持**：GitHub Issues、Discussions、贡献指南
- **项目信息**：源代码、路线图、许可证

## 技术实现

### HTML 结构
- **语义化标签**：使用 `<section>`、`<nav>`、`<footer>` 等语义化标签
- **无障碍支持**：适当的 ARIA 标签和语义结构
- **SEO 优化**：完整的 meta 标签和描述信息

### CSS 样式
- **赛博朋克主题**：霓虹色彩、网格背景、粒子效果
- **响应式设计**：支持桌面、平板、手机等多种设备
- **动画效果**：CSS 动画和过渡效果
- **现代布局**：Flexbox 和 Grid 布局

### JavaScript 功能
- **交互效果**：滚动动画、悬停效果、数据流动画
- **代码复制**：一键复制代码块功能
- **响应式导航**：移动端菜单切换
- **性能优化**：懒加载和节流处理

## 浏览器支持

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 本地开发

### 环境要求
- 现代浏览器
- 本地 HTTP 服务器（推荐）

### 启动方式

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 访问 http://localhost:8000
```

### 开发工具
- **代码编辑器**：VS Code、WebStorm 等
- **浏览器开发者工具**：Chrome DevTools、Firefox DevTools
- **设计工具**：Figma、Sketch（用于视觉设计参考）

## 部署说明

### 静态托管
该网站为纯静态网站，可部署到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- 阿里云 OSS + CDN

### 部署配置
确保服务器正确配置 MIME 类型：
- `.html` → `text/html`
- `.css` → `text/css`
- `.js` → `application/javascript`
- `.woff2` → `font/woff2`

## 维护指南

### 内容更新
- **版本信息**：定期更新 DORA 版本号
- **性能数据**：根据基准测试结果更新性能指标
- **新增功能**：及时添加新功能的介绍
- **链接检查**：定期检查外部链接的有效性

### 性能优化
- **图片优化**：使用 WebP 格式，适当压缩
- **CSS/JS 压缩**：生产环境启用压缩
- **CDN 加速**：静态资源使用 CDN 分发
- **缓存策略**：配置适当的浏览器缓存

## 贡献指南

### 报告问题
如果发现网站问题，请在 [GitHub Issues](https://github.com/dora-rs/dora/issues) 中报告。

### 提交更改
1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 提交 Pull Request

### 代码规范
- HTML 使用 2 空格缩进
- CSS 使用 BEM 命名规范
- JavaScript 使用 ES6+ 语法
- 提交信息使用约定式提交格式

## 许可证

本网站内容遵循 [Apache-2.0 许可证](https://github.com/dora-rs/dora/blob/main/LICENSE)。

## 相关链接

- **DORA 官网**：https://dora.carsmos.ai/
- **GitHub 仓库**：https://github.com/dora-rs/dora
- **官方文档**：https://dora.carsmos.ai/docs/
- **社区讨论**：https://github.com/dora-rs/dora/discussions
- **问题反馈**：https://github.com/dora-rs/dora/issues

---

> 让机器人应用开发变得简单而强大 🤖