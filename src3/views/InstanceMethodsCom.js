//$forceUpdate
const ChildCom = {
    name: 'ChildCom',
    updated() {
        console.log('子组件不会更新')
    },
    template: `<div>我是个子组件</div>`
}
const ChildHasSlotCom = {
    name: 'ChildHasSlotCom',
    updated() {
        console.log('有插槽内容的子组件更新了')
    },
    template: `<div>我是个有插槽内容的子组件：<slot></slot></div>`
}
const ForceUpdateCom = {
    name: 'ForceUpdateCom',
    components: {
        ChildCom,
        ChildHasSlotCom
    },
    mounted() {
        setTimeout(() => {
            this.$forceUpdate()
        }, 2000)
    },
    updated() {
        console.log('实例本身更新了')
    },
    template: `<div>
                <p><child-com></child-com></p>
                <p><child-has-slot-com>插槽内容</child-has-slot-com></p>
            </div>`
}
// $watch
const WatchCom = {
    name: 'WatchCom',
    props: ['propsWatchValue'],
    data() {
        return {
            dataWatchValue: 1,
            dataWatchObj: {
                a: 1
            }
        }
    },
    computed: {
        computedWatchValue() {
            return this.dataWatchValue * 100
        }
    },
    mounted() {
        // 错误
        // this.$watch(dataWatchValue, (value, oldValue) => {
        //     console.log('data数据$watch')
        //     console.log(value)
        // })
        setTimeout(() => {
            this.dataWatchValue++
            this.dataWatchObj.b = 2
        }, 2000)
        const unwatch = this.$watch('dataWatchValue', (value) => {
            console.log('data数据$watch：')
            console.log(value)
        })
        unwatch()
        this.$watch('propsWatchValue', (value) => {
            console.log('props数据$watch：')
            console.log(value)
        })
        this.$watch('computedWatchValue', (value) => {
            console.log('computed数据$watch：')
            console.log(value)
        })
        // this.$watch('dataWatchObj', {
        //     handler: (value, oldValue) => {
        //         console.log('对象deep$watch：')
        //         console.log(oldValue)
        //         console.log(value)
        //     }
        // }, {
        //     deep: true
        // })
    },
    template: `<div>{{ propsWatchValue }}</div>`
}

// 实例方法
export default {
    name: 'InstanceMethodsCom',
    components: {
        // WatchCom,
        ForceUpdateCom
    },
    data() {
        return {
            title: ''
        }
    },
    template: `<force-update-com></force-update-com>`
}