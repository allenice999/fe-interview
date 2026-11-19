import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-Interviews",
  description: "前端常见问题总结",
  base: "/fe-interview/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "性能优化", link: "/performance" },
      { text: "Vue/React框架", link: "/frameworks" },
      { text: "打包构建", link: "/build" },
      { text: "AI相关", link: "/ai" },
      { text: "手写代码与场景方案", link: "/coding-challenges" },
      { text: "其他", link: "/misc" },
    ],
    sidebar: {
      "/coding-challenges/": {
        items: [
          {
            text: "场景方案",
            link: "/coding-challenges",
            items: [
              { text: "1. 早高峰秒杀页面渲染", link: "/coding-challenges/早高峰秒杀页面渲染" },
            ],
          },
        ],
      },
    },
    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章",
    },
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/fe-interview/logo.svg",
      },
    ],
  ],
  cleanUrls: true,
  rewrites(id) {
    return id.replace(/(\d+)-([^/]+\.md)$/, "$2");
  },
  markdown: {
    config: (md) => {
      const render = md.render;
      md.render = function (src, env) {
        return `<div v-pre>${render.call(this, src, env)}</div>`;
      };
    },
    html: false,
    attrs: false,
  },
});
