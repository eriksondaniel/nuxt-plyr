export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Nuxt Plyr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
      'plyr/dist/plyr.css',
      '@/assets/css/overwrite.css',
      '@/assets/css/global.css'
  ],
  plugins: [
      '@/plugins/nuxt-plyr'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
}
