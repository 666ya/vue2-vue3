import {
    createApp
} from 'vue'
import App from './App.vue'
const app = createApp(App)
//应用Api
app.config.warnHandler = (warn, instance, trace) => {
    console.log(warn)
    console.log(instance)
    console.log(trace)
}
app.config.errorHandler = (warn, instance, trace) => {
    console.log(warn)
}
app.mount('#app')