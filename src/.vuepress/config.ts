import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "测试漫游记",
  description: "探索和分享测试开发相关知识，和你说一说我的测试找那个的感悟",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
