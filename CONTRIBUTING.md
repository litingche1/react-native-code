# 贡献指南

感谢您考虑为新能源装机容量监测系统做出贡献！

## 行为准则

- 尊重所有贡献者
- 接受建设性的批评
- 专注于对项目最有利的事情
- 对其他社区成员表现出同理心

## 如何贡献

### 报告 Bug

如果您发现了 Bug，请创建一个 Issue 并包含以下信息：

1. **Bug 描述**: 清晰简洁的描述问题
2. **复现步骤**: 详细的复现步骤
3. **期望行为**: 您期望发生什么
4. **实际行为**: 实际发生了什么
5. **环境信息**: 
   - 设备型号
   - 操作系统版本
   - 应用版本
   - React Native 版本

### 提出新功能

1. 创建一个 Issue 描述新功能
2. 说明为什么需要这个功能
3. 提供可能的实现方案
4. 等待维护者反馈

### 提交代码

#### 1. Fork 项目

点击页面右上角的 "Fork" 按钮

#### 2. 克隆仓库

```bash
git clone https://github.com/your-username/my-expo-app.git
cd my-expo-app
```

#### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

分支命名规范：
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档更新
- `style/` - 代码格式调整
- `refactor/` - 重构
- `test/` - 测试相关
- `chore/` - 构建过程或辅助工具的变动

#### 4. 安装依赖

```bash
npm install
# 或
pnpm install
```

#### 5. 进行更改

- 遵循现有的代码风格
- 添加必要的注释
- 更新相关文档
- 添加或更新测试（如果适用）

#### 6. 代码规范

运行 linter 检查：

```bash
npm run lint
```

格式化代码：

```bash
npm run format
```

#### 7. 测试

确保所有测试通过：

```bash
npm test
```

手动测试您的更改：

```bash
npm start
```

#### 8. 提交更改

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
git add .
git commit -m "feat: 添加新的数据导出功能"
```

提交信息格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

Type 类型：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建/工具

示例：

```
feat(statistics): 添加数据导出功能

- 支持导出 PDF 格式
- 支持导出 Excel 格式
- 添加导出按钮到统计页面

Closes #123
```

#### 9. 推送到 GitHub

```bash
git push origin feature/your-feature-name
```

#### 10. 创建 Pull Request

1. 访问您 Fork 的仓库
2. 点击 "New Pull Request"
3. 选择您的分支
4. 填写 PR 描述：
   - 简要说明更改内容
   - 关联相关的 Issue
   - 添加截图（如果是 UI 更改）
   - 说明测试情况

### Pull Request 检查清单

提交 PR 前，请确保：

- [ ] 代码遵循项目的代码风格
- [ ] 已运行 `npm run lint` 且无错误
- [ ] 已运行 `npm run format` 格式化代码
- [ ] 更改已经过测试
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 提交信息遵循规范
- [ ] 无合并冲突

## 代码风格

### TypeScript

- 使用 TypeScript 严格模式
- 为所有函数参数和返回值添加类型
- 使用 interface 而不是 type（除非必要）
- 避免使用 `any` 类型

### React Native

- 使用函数组件和 Hooks
- 使用 StyleSheet.create 定义样式
- 遵循 React Native 最佳实践
- 组件命名使用 PascalCase
- 文件名使用 PascalCase（组件）或 camelCase（工具）

### 命名规范

```typescript
// 组件
export default function LoginScreen() { }

// 接口
interface CapacityData { }

// 常量
const API_BASE_URL = 'https://api.example.com';

// 函数
const handleSubmit = () => { };

// 变量
const userName = 'admin';
```

### 注释

```typescript
/**
 * 计算总装机容量
 * @param wind - 风电容量（万千瓦）
 * @param solar - 光伏容量（万千瓦）
 * @returns 总容量（万千瓦）
 */
function calculateTotal(wind: number, solar: number): number {
  return wind + solar;
}
```

## 项目结构约定

```
screens/        # 页面组件
  └── XxxScreen.tsx
components/     # 可复用组件
  └── XxxComponent.tsx
data/          # 数据和类型
  └── xxxData.ts
utils/         # 工具函数
  └── xxxUtil.ts
hooks/         # 自定义 Hooks
  └── useXxx.ts
services/      # API 服务
  └── xxxService.ts
```

## 审查流程

1. 提交 PR 后，维护者会进行代码审查
2. 可能会要求进行修改
3. 所有讨论解决后，PR 将被合并
4. 您的贡献将出现在下一个版本中

## 获取帮助

如有任何问题，请：

1. 查看 [README.md](README.md)
2. 搜索现有的 Issues
3. 创建新的 Issue
4. 联系维护者

## 感谢

感谢您的贡献！每一个贡献都让这个项目变得更好。

---

再次感谢您的贡献！🎉

