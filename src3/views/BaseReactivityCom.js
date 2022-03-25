const {
    reactive,
    readonly,
    ref,
    isRef,
    isProxy,
    isReactive,
    isReadonly,
    markRaw,
    shallowReactive,
    toRaw,
    onMounted,
    watchEffect
} = Vue
// 
const ShallowCom = {
    name: 'ShallowCom',
    setup() {
        const state = shallowReactive({
            foo: 1,
            nested: {
                bar: 2
            }
        })
        watchEffect(() => {
            console.log(state.nested.bar)
        })
        setTimeout(() => {
            state.foo++
            state.nested.bar++
        }, 2000)
        return {
            state
        }
    },
    template: `<div><p>shallowReactive：{{ state.foo }} {{ state.nested.bar }}</p></div>`
}
// makeRaw, shallowReactive,shavllowReadonly
const MakeRawCom = {
    name: 'MakeRawCom',
    setup(props) {

    },
    template: `<div>{{ s }}</div>`
}
// readonly
const ReadonlyCom = {
    name: 'ReadonlyCom',
    setup() {
        // 只读
        const readOnlyObj = readonly({
            title: 'readonly'
        })
        // readOnlyObj.title = 'readOnlyObjUpdate'
        // 用ref包装
        const readOnlyObjRef = ref(readOnlyObj)
        // readOnlyObjRef.value.title = 'readOnlyObjRef'
        // console.log(readOnlyObjRef)
        // // 用reactive包装
        const readOnlyObjReactive = reactive(readOnlyObj)
        console.log(readOnlyObjReactive)
        // readOnlyObjReactive.title = 'readOnlyObjReactive'

        console.log(isReadonly(readOnlyObjRef))
        console.log(isProxy(readOnlyObjReactive))
        // console.log(isReadonly(readOnlyObjReactive))
        return {
            readOnlyObj,
            readOnlyObjRef,
            readOnlyObjReactive
        }
    },
    template: `<div>
                <p>{{ readOnlyObj.title }}</p>
                <p>用ref包装后：{{ readOnlyObjRef.title }}</p>
                 <p>用reactive包装：{{ readOnlyObjReactive.title }}</p>
              </div>`
}
// 响应式API
export default {
    name: 'BaseReactivityCom',
    components: {
        ReadonlyCom,
        MakeRawCom,
        ShallowCom
    },
    template: `<shallow-com></shallow-com>`
}