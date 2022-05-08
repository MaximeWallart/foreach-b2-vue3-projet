import { defineConfig } from 'windicss/helpers'

// extending the builtin windicss configurations
export default defineConfig({
  attributify: true,
  theme: {
    colors: {
      background : '#4c5d46'
    },
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        'Roboto Mono': ['Roboto Mono','monospace']
      },
    },
  },
})