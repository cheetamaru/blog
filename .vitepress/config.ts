import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IT-блог | Cheetamaru",
  description: "IT-блог | Cheetamaru",
  head: [
    ['link', { rel: "shortcut icon", href: "/blog/favicon.ico"}],
    ['meta', { name: "google", content: "notranslate"}],
  ],
  lang: "ru",
  base: "/blog/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lightModeSwitchTitle: "Темная тема",
    darkModeSwitchTitle: "Светлая тема",
    darkModeSwitchLabel: "Тема",
    returnToTopLabel: "Наверх",

    sidebar: [
      {
        text: "Discogs Revisualized",
        items: [
          {
            text: "Введение",
            link: '/discogs/intro'
          }
        ]
        
      },
    ],

    outline: {
      label: "Содержание"
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: " "
    }
  }
})
