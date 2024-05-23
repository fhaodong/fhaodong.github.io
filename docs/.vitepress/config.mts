import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/other/express简单示例' },
      { text: '娱乐', link: '/娱乐/1' },
    ],

    sidebar: {
      '/other/': [
          { text: 'Markdown Examples', link: '/other/markdown-examples' },
          { text: 'Runtime API Examples', link: '/other/api-examples' },
          { text: 'express简单示例', link: '/other/express简单示例' }
      ],
      '/娱乐/': [
        { text: '1', link: '/娱乐/1' }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
