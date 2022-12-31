// plugins/vuetify.js
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const dracula = {
  dark: true,
  colors: {
    background: '#252732',
    surface: '#272935',
    primary: '#5865F2',
    'primary-darken-1': '#ff2ea4',
    secondary: '#57F287',
    'secondary-darken-1': '#9048f4',
    error: '#ED4245',
    info: '#7289DA',
    success: '#57F287',
    warning: '#fde047',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dracula',
      themes: {
        dracula,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})