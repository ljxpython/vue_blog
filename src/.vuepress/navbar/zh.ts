import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  "/",
  {
    text: "总览",
    icon: "sort",
    children: [
      { text: "测试经验", icon: "home", link: "/qaexperience/" },
      {text:"编程",icon:"code",link:"/programSummary/"},
      { text: "面试经验", icon: "home", link: "/interview/" },],
  },
  {
    text: "分类",
    icon: "jiansuo",
    children: [
      { text: "全部", icon: "list", link: "/article/" },
      { text: "分类", icon: "category", link: "/category/" },
      { text: "标签", icon: "tag", link: "/tag/" },
      {text:"星标",icon:"star",link:"/star/"},
      { text: "时间轴", icon: "time", link: "/timeline/" },
    ],
  },
  // {
  //   text: '收藏',
  //   icon: 'start',
  //   link: '/favorite',
  //   children: ['/favorite/links/', '/favorite/movies/', '/favorite/music/', '/favorite/photos/'],
  // },
  "/about/",
]);
