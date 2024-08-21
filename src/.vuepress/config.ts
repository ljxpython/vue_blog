import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 参考文档 https://vuepress.vuejs.org/zh/reference/config.html#base
  base: "/",  // 含义: 部署站点的基础路径。 如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。

  locales: {
    '/': {
  lang: "zh-CN",
  title: "测试漫游记",
  description: "探索和分享测试开发相关知识",
    },
    '/en/': {
      lang: 'en-US',
      title: 'walking in the test world',
      description: 'share knowledge about test development',
    },
  },




  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
