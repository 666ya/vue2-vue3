// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import { createPinia } from 'pinia'


const pinia = createPinia()
pinia.use((context)=>{
    // contex对象包含app,store,pinia,options属性
    context.store.hello = 'world'
})
pinia.use(()=> ({ secret: 'the cake is a lie' }))
const app = createApp(App)
app.use(pinia)
app.use(i18n,{
    greetings: {
        hello: 'Bonjour'
    }
})
app.mount('#app')

