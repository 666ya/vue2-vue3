const {
    createApp,
    reactive,
    ref,
    watch,
    onMounted,
    watchEffect,
    unref,
    toRef,
    toRefs,
    shallowRef,
    triggerRef,
    watchPostEffect
} = Vue

const App = {
    template: `<div ref="root">{{ count }}</div>`,
    data() {
        return {
            dataA: 0
        }
    },
    setup(props, context) {
        const mainWrap = ref(null)
        const count = ref(0)
        count.value++
        onMounted(() => {
            console.log(mainWrap)
        })
        return {
            count,
            root: mainWrap
        }
    },
    mounted() {
        console.log(this.count)
    }
}
const Vm = createApp(App).mount('#app')