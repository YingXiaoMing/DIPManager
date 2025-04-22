module.exports = {
    content: ["./pages/**/*.{vue,js,ts,jsx,tsx}"],

    corePlugins: {
      // 禁用含小数点和斜杠的类名
      space: false,
      divideWidth: false,
      translate: false
    }
  }
  