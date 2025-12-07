/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class', // 使用 class 模式，允许手动控制，避免 Web 平台自动检测冲突
  theme: {
    extend: {},
  },
  plugins: [],
}
