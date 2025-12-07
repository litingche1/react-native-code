import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';

// 修复 NativeWind Web 平台颜色方案错误
// 必须在导入 App 之前执行
if (Platform.OS === 'web') {
  // 在 Web 平台上，NativeWind 默认使用 'media' 模式检测系统颜色方案
  // 我们需要在初始化前设置为 'class' 模式
  try {
    // 动态导入 react-native-css-interop（NativeWind 4.0 的内部依赖）
    const cssInterop = require('react-native-css-interop');
    if (cssInterop?.StyleSheet?.setFlag) {
      cssInterop.StyleSheet.setFlag('darkMode', 'class');
    }
  } catch (error) {
    // 如果导入失败，尝试直接访问全局对象
    console.warn('无法设置 NativeWind darkMode 标志:', error);
  }
}

import App from './App';

registerRootComponent(App);

