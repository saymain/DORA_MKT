# DORA - 面向机器人的架构

## 现代机器人应用开发的革命性框架

基于Rust的高性能数据流中间件，让机器人应用开发变得简单高效

[**立即开始**](#getting-started) | [**查看文档**](#documentation) | [**GitHub**](https://github.com/dora-rs/dora)

---

## 为什么选择DORA？

### 🚀 **极致性能**

- 纯Rust实现，比ROS2快10-17倍
- 零拷贝数据传输，延迟极低
- 支持GPU加速和并行处理

### 🧩 **模块化架构**

- 基于数据流范式的声明式设计
- 独立进程节点，系统更稳定
- 易于配置和扩展的模块化组件

### 🤖 **开箱即用**

- 4000+个预置节点，覆盖视觉、感知、控制等
- 支持YOLO、MediaPipe、PyTorch等主流AI框架
- 丰富的硬件接口支持

---

## 核心特性

### 🔄 **数据流编程**

[摄像头] → [目标检测] → [轨迹跟踪] → [路径规划] → [执行器控制]

基于Apache Arrow的高效数据传递，支持复杂的数据流拓扑结构。

### ⚡ **高性能通信**

| 通信类型 | 技术方案 | 特点 |
|---------|---------|------|
| 本地通信 | 共享内存 | 零拷贝，微秒级延迟 |
| 远程通信 | Zenoh | 分布式，低带宽消耗 |
| 消息格式 | Apache Arrow | 跨语言，零序列化开销 |

### 🛠️ **开发者友好**

- **Python API**: 简单易用的数据流构建器
- **Rust API**: 极致性能的系统级开发
- **可视化调试**: 集成Rerun实时可视化
- **观测性**: OpenTelemetry集成，一站式监控

---

## 快速上手

### 1. 安装

bash

使用pip安装CLI工具
pip install dora-rs-cli

或者使用cargo
cargo install dora-cli

### 2. 运行示例

bash

创建虚拟环境
uv venv --seed -p 3.11

构建并运行YOLO目标检测示例
dora build https://raw.githubusercontent.com/dora-rs/dora/main/examples/object-detection/yolo.yml--uv

dora run yolo.yml --uv

### 3. 构建你的第一个数据流

python

使用Pythonic API构建数据流
import dora

with dora.Builder() as builder:

camera = builder.node("opencv-video-capture")

yolo = builder.node("dora-yolo")

visualizer = builder.node("dora-rerun")

camera.output("image").to(yolo.input("image"))
yolo.output("bbox").to(visualizer.input("boxes2d"))
camera.output("image").to(visualizer.input("image"))

[**查看更多示例**](#examples) | [**安装指南**](#installation)

---

## 应用场景

### 📷 计算机视觉

- 目标检测与识别
- 图像分割与分类
- 人脸识别与跟踪
- 3D视觉处理

### 🤖 机器人控制

- 自主导航与路径规划
- 多传感器数据融合
- 运动控制与规划
- 人机交互

### 🏭 工业自动化

- 质量检测与缺陷识别
- 设备监控与预测维护
- 自动化生产线控制
- 物料搬运与分拣

### 🧠 AI集成

- PyTorch/TensorFlow模型部署
- 大语言模型交互
- 强化学习应用
- 多模态AI系统

---

## 技术架构

mermaid

graph TD

A[数据源节点] -->|共享内存/Zenoh| B[数据流管理器]

B -->|Arrow格式| C[处理节点]

C -->|Arrow格式| D[可视化节点]

D --> E[执行器节点]

B --> F[监控与日志]

F --> G[OpenTelemetry]

### 关键组件

- **节点管理器**: 负责节点的生命周期管理
- **数据总线**: 高效的消息传递机制
- **配置系统**: 基于YAML的声明式配置
- **包管理器**: 统一的节点和依赖管理

---

## 社区与支持

### 📚 学习资源

- [**详细文档**](https://github.com/dora-rs/dora)
- [**快速入门教程**](#tutorials)
- [**API参考**](#api-reference)
- [**最佳实践**](#best-practices)

### 💬 社区渠道

- **GitHub Issues**: 问题反馈和功能请求
- **Discussions**: 社区讨论和经验分享
- **Slack/Discord**: 实时交流（即将推出）

### 🤝 贡献指南

我们欢迎所有级别的贡献者！
- [**贡献者指南**](CONTRIBUTING.md)
- [**开发文档**](DEVELOPMENT.md)
- [**Good First Issues**](https://github.com/dora-rs/dora/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

---

## 支持矩阵

| 平台 | 状态 | 架构 |
|------|------|------|
| **Linux** | ✅ 完全支持 | x86_64, ARM64, ARM32 |
| **Windows** | 🆗 支持 | x86_64 |
| **macOS** | ✅ 完全支持 | x86_64, ARM64 |
| **Android** | 🛠️ 开发中 | - |
| **iOS** | 🛠️ 开发中 | - |

| 语言 | 支持级别 |
|------|----------|
| **Python** | ⭐ 推荐 |
| **Rust** | ✅ 完全支持 |
| **C/C++** | 🆗 最佳努力 |
| **ROS2** | 🆗 实验性支持 |

---

## 开始你的DORA之旅

### 🎯 **适合谁使用？**

- **机器人开发者**: 快速构建复杂的机器人应用
- **AI工程师**: 部署和集成机器学习模型
- **研究人员**: 实验新的算法和架构
- **系统集成商**: 构建可靠的工业解决方案

### **下一步**

1. [安装DORA](#installation)
2. [运行示例应用](#examples)
3. [构建你的第一个数据流](#getting-started)
4. [探索节点库](#node-hub)

---

## **准备好构建下一代机器人应用了吗？**

[**立即开始**](#getting-started) | [**查看GitHub**](https://github.com/dora-rs/dora) | [**加入社区**](#community--support)

*DORA - 让机器人应用开发变得简单而强大*