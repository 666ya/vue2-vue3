const {
    reactive,
    readonly,
    ref,
    isProxy,
    isReactive,
    isReadonly,
    makeRaw
} = Vue
// makeRaw, shallowReactive,shavllowReadonly
const MakeRawCom = {
    name: 'MakeRawCom',
    setup(props) {
        const raw = makeRaw({})
        console.log(raw)
    },
    template: `<div>makeRaw</div>`
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
        MakeRawCom
    },
    template: `<make-raw-com></make-raw-com>`
}