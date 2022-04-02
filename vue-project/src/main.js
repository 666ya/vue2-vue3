import '@/assets/style.css'
import {
    createApp
} from 'vue'
import App from './App.vue'
import il8nPlugin from './plugins/il8n.js'
const app = createApp(App, {
    user: '李白'
})
//应用Api
app.config.warnHandler = (warn, instance, trace) => {
    console.log(warn)
}
app.config.errorHandler = (error, instance, trace) => {
    console.log(error)
}
app.config.optionMergeStrategies.customOption = (parent,child) => {
    return parent? parent : child
}
app.use(il8nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})
app.config.globalProperties.$app = app
app.mount('#app')