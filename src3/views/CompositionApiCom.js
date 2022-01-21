const {
    nextTick,
    onMounted,
    toRefs,
    toRef,
    h,
    ref
} = Vue

const ChildCom = {
    name: 'ChildCom',
    props: {
        title: {
            type: String,
            default: 'title'
        }
    },
    data() {
        return {
            dataValue: '子组件data数据'
        }
    },
    template: `<div>子组件</div>`
}
const compositionApiTemplate = `<child-com ref="root"></child-com>`
// 组合式API
export default {
    name: 'CompositionApiCom',
    components: {
        ChildCom
    },
    setup(props, context) {
        const root = ref(null)
        // const title = toRef(props, 'title')
        // title.value = 'CompositionApiCom'
        onMounted(async () => {
            await nextTick()
            console.log(root.value.uuid)
        })
        return {
            root
        }
    },
    template: compositionApiTemplate
}