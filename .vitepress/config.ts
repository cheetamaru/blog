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
            link: '/discogs/intro/'
          },
          {
            text: "Функционал",
            link: '/discogs/features/'
          },
          {
            text: "Обёртка над API",
            link: '/discogs/api_wrapper/'
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
  },
  locales: {
    root: {
      label: "Русский",
      lang: "ru"
    },
    en: {
      label: "English",
      title: "IT-blog | Cheetamaru",
      description: "IT-blog | Cheetamaru",
      lang: "en",
      themeConfig: {
        sidebar: [
          {
            text: "Discogs Revisualized",
            items: [
              {
                text: "Intro",
                link: '/en/discogs/intro/'
              },
              {
                text: "Features",
                link: '/en/discogs/features/'
              },
              {
                text: "API Wrapper",
                link: '/discogs/api_wrapper/'
              }
            ]
            
          },
        ]
      }
    }
  }
})
