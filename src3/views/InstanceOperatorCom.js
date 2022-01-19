// $watch
const WatchCom = {
    name: 'WatchCom',
    props: ['propsWatchValue'],
    data() {
        return {
            dataWatchValue: 1
        }
    },
    computed: {
        computedWatchValue() {
            return this.dataWatchValue * 100
        }
    },
    mounted() {
        this.$watch('dataWatchValue', (value, oldValue) => {
            console.log('data数据$watch')
        })
        this.$watch('propsWatchValue', (value, oldValue) => {
            console.log('props数据$watch')
        })
        this.$watch('computedWatchValue', (value, oldValue) => {
            console.log('computed数据$watch')
        })
    }
}
export default {
    name: 'InstanceOperatorCom',
    components: {
        WatchCom
    },
    data() {
        return {
            title: ''
        }
    },
    mounted() {
        setTimeout(() => {
            this.title = '实例$watch方法'
        }, 2000)
    },
    template: `<watch-com :props-watch-value=></watch-com>`
}