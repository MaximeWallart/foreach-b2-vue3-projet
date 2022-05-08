import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from '@/App.vue'
import router from '@/router'

import 'virtual:windi.css'

import 'virtual:windi-devtools'

const app = createApp(App)

// const i18n = createI18n({
//     locale: 'fr',
//     messages:  {
//         en,
//         fr
//     },
//   })

app.use(router)
// app.use(i18n)
app.mount('#app')
