import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "测试漫游记",
  description: "探索和分享测试开发相关知识",


  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
