// Tailwind CSS 4 必须通过 @tailwindcss/postcss 处理，缺少此文件线上样式会失效
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
