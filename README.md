# 新能源装机容量监测系统

一个基于 React Native 和 Expo 的移动应用，用于监测和管理风电、光伏等新能源的装机容量数据，并提供光伏入网申请功能。

## 📱 项目简介

本项目是一个全功能的新能源数据管理系统，包含数据可视化、用户认证、表单提交等功能。采用 React Native 跨平台开发技术，支持 iOS、Android 和 Web 平台。

## ✨ 功能特性

### 1. 用户认证系统
- **登录页面**: 支持用户名密码登录（默认账号：admin/123456）
- **注册页面**: 新用户注册功能，包含表单验证
- **自动登录**: 测试环境默认填充账号信息
- **状态管理**: 使用 Zustand 管理用户登录状态

### 2. 装机容量统计分析
- **饼图**: 展示当前月份风电和光伏的能源占比
- **折线图**: 展示全年12个月的装机容量增长趋势
- **柱状图**: 对比最近6个月的总装机容量
- **数据表格**: 详细展示每月风电、光伏及总计数据
- **数据请求**: 封装统一请求方法，模拟真实 API 调用

### 3. 光伏入网协议申请
- **申请人信息**: 姓名、身份证号、安装地址
- **项目信息**: 申请容量、预计并网日期
- **协议确认**: 必须阅读并同意协议才能提交
- **表单验证**: 完整的输入验证和错误提示

### 4. 个人中心
- **用户信息**: 显示当前登录用户信息（从 Store 获取）
- **功能菜单**: 个人资料、系统设置、关于我们
- **退出登录**: 安全退出并返回登录页，清除 Store 状态

### 5. 底部导航栏
- 装机容量统计
- 入网协议申请
- 个人中心

## 🛠 技术栈

### 核心框架
- **React Native**: 0.81.5
- **Expo SDK**: 54.0
- **React**: 19.1.0
- **TypeScript**: 5.9.2

### 状态管理 & 网络请求
- **Zustand**: 轻量级状态管理库
- **Axios**: 网络请求库（已封装统一拦截器）

### 导航系统
- **@react-navigation/native**: 7.1.24
- **@react-navigation/native-stack**: 7.8.5
- **@react-navigation/bottom-tabs**: 7.8.11

### 数据可视化
- **react-native-chart-kit**: 6.12.0
- **react-native-svg**: 15.15.1

### UI 组件
- **@expo/vector-icons**: 15.0.3
- **react-native-safe-area-context**: 5.6.0
- **react-native-screens**: 4.18.0

### 开发工具
- **ESLint**: 9.25.1
- **Prettier**: 3.2.5
- **Babel**: 7.20.0+

## 📦 项目结构

```
my-expo-app/
├── screens/                    # 页面组件
│   ├── LoginScreen.tsx        # 登录页面
│   ├── RegisterScreen.tsx     # 注册页面
│   ├── StatisticsScreen.tsx   # 装机容量统计页面
│   ├── ProtocolScreen.tsx     # 入网协议申请页面
│   └── ProfileScreen.tsx      # 个人中心页面
├── components/                # 可复用组件
│   ├── CapacityBarChart.tsx   # 柱状图组件
│   ├── CapacityLineChart.tsx  # 折线图组件
│   └── CapacityTable.tsx      # 数据表格组件
├── store/                     # Zustand 状态管理
│   ├── authStore.ts           # 用户认证状态
│   └── dataStore.ts           # 业务数据状态
├── utils/                     # 工具函数
│   └── request.ts             # Axios 统一请求封装
├── services/                  # API 服务（预留）
├── data/                      # 数据文件
│   └── mockData.ts           # 模拟数据
├── assets/                    # 资源文件
│   ├── icon.png
│   ├── splash.png
│   └── ...
├── App.tsx                    # 应用入口和路由配置
├── index.js                   # 应用注册入口
├── babel.config.js           # Babel 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目依赖配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0
- Expo CLI
- iOS 模拟器（macOS）或 Android 模拟器
- Expo Go 应用（用于真机测试）

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd my-expo-app
```

2. **安装依赖**

使用 npm:
```bash
npm install
```

或使用 pnpm:
```bash
pnpm install
```

3. **启动开发服务器**
```bash
npm start
# 或
pnpm start
```

或者清除缓存启动（解决依赖报错或样式不生效问题）：
```bash
npm run start -- --clear
```

**常见启动问题：**
如果遇到 Expo Go 扫码无法连接，通常是由于多网卡或代理导致 IP 识别错误。请尝试指定 IP 启动（替换为你的局域网 IP）：
```powershell
$env:REACT_NATIVE_PACKAGER_HOSTNAME="192.168.x.x"; npm run start
```
或者使用隧道模式（无需同一局域网）：
```bash
npx expo start --tunnel
```

4. **运行应用**

- **iOS 模拟器**: 按 `i` 或运行 `npm run ios`
- **Android 模拟器**: 按 `a` 或运行 `npm run android`
- **Web 浏览器**: 按 `w` 或运行 `npm run web`
- **真机预览**: 使用 Expo Go 扫描二维码

## 📦 打包发布

本项目使用 EAS Build 进行云端打包。

### 1. 安装 EAS CLI

```bash
npm install -g eas-cli
```

### 2. 登录 Expo 账号

```bash
eas login
```

### 3. 配置项目

首次打包前需要配置项目 ID：

```bash
eas build:configure
```

### 4. 构建安装包

#### Android APK (用于测试)

```bash
eas build -p android --profile preview
```

#### iOS Simulator Build (用于模拟器)

```bash
eas build -p ios --profile preview
```

#### 正式发布包 (AAB/IPA)

```bash
# Android
eas build -p android --profile production

# iOS
eas build -p ios --profile production
```

### 5. 本地构建 (可选)

如果不想使用云端构建，可以使用本地构建（需要配置好原生开发环境）：

```bash
eas build --local -p android --profile preview
```

详细文档请参考 [Expo EAS Build 文档](https://docs.expo.dev/build/introduction/)。

## 📱 使用说明

### 登录
1. 打开应用进入登录页面
2. 默认账号已填充：`admin` / `123456`
3. 点击"登录"按钮进入主界面

### 查看统计数据
1. 登录后默认进入"装机容量"页面
2. 滚动查看饼图、折线图、柱状图和数据表格
3. 所有图表支持交互式查看

### 填写入网协议
1. 点击底部导航"入网协议"
2. 填写申请人信息和项目信息
3. 勾选同意协议
4. 点击"提交申请"

### 个人中心
1. 点击底部导航"我的"
2. 查看个人信息和功能菜单
3. 点击"退出登录"安全退出

## 🔧 开发说明

### 添加新页面

1. 在 `screens/` 目录创建新组件
2. 在 `App.tsx` 中注册路由
3. 如需底部导航，在 `MainTabNavigator` 中添加

### 状态管理 (Zustand)

1. 在 `store/` 目录创建新的 store 文件
2. 使用 `create` 定义状态和操作
3. 在组件中使用 `useStore()` 获取状态

```typescript
// 定义 store
export const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

// 使用 store
const { count, inc } = useCountStore()
```

### 网络请求 (Axios)

使用 `utils/request.ts` 统一发起请求：

```typescript
import request from '../utils/request';

// GET 请求
const data = await request.get('/api/user');

// POST 请求
await request.post('/api/login', { username, password });
```

### 修改模拟数据

编辑 `data/mockData.ts` 或 `store/dataStore.ts` 中的模拟数据。

### 自定义主题色

在各个页面的 `StyleSheet` 中修改颜色值：
- 主色调: `#3b82f6` (蓝色)
- 辅助色: `#f97316` (橙色)
- 成功色: `#34d399` (绿色)

## 📊 数据说明

### 装机容量数据结构

```typescript
interface CapacityData {
  month: string;    // 月份 (如 "1月")
  wind: number;     // 风电装机容量 (万千瓦)
  solar: number;    // 光伏装机容量 (万千瓦)
}
```

### 当前数据范围
- 时间跨度: 2024年1-12月
- 风电容量: 4,200 - 6,150 万千瓦
- 光伏容量: 5,300 - 8,500 万千瓦

## 🐛 已知问题

1. **pnpm 兼容性**: 部分包在 pnpm 下可能有权限问题，建议使用 npm
2. **图表性能**: 数据量过大时图表渲染可能较慢
3. **iOS 键盘遮挡**: 输入框聚焦时可能被键盘遮挡（已使用 SafeAreaView 缓解）

## 🔄 版本历史

### v1.0.0 (2024-12-07)
- ✅ 实现用户登录注册功能
- ✅ 完成装机容量数据可视化
- ✅ 添加光伏入网协议申请
- ✅ 集成底部导航栏
- ✅ 实现个人中心功能
- ✅ 引入 Zustand 状态管理
- ✅ 封装 Axios 统一请求

## 📝 待办事项

- [ ] 接入真实后端 API
- [ ] 添加数据导出功能
- [ ] 实现消息推送
- [ ] 添加数据筛选和搜索
- [ ] 支持多语言切换
- [ ] 优化图表性能
- [ ] 添加单元测试


