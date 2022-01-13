// data
const dataTemplate = `<div>{{ obj.b }}</div>`
const DataCom = {
    name: 'DataCom',
    expose: ['msg'],
    data() {
        return {
            msg: 'title',
            obj: {
                a: 1,
                title: this.msg
            }
        }
    },
    mounted() {
        this.obj.b = 2
        this.obj.b++
    },
    template: dataTemplate
}

// watch
const watchTemplate = `<div>{{ obj.b }}</div>`
const WatchCom = {
    name: 'WatchCom',
    data() {
        return {
            firstName: '李',
            lastName: '白',
            obj: {
                a: 1,
                b: 2
            }
        }
    },
    computed: {
        objBoth() {
            return [this.obj.b, this.obj.a]
        },
        fullName() {
            return [this.firstName, this.lastName]
        }
    },
    watch: {
        objBoth: function (value) {
            console.log(value)
        },
        fullName(value) {
            console.log(value)
        }
    },
    mounted() {
        this.obj.a++
        this.obj.b++
        this.firstName = '王'
    },
    template: watchTemplate
}
// expose
const {
    ref
} = Vue
const ExposeCom = {
    name: 'ExposeCom',
    // expose: ['exposeName'],
    data() {
        return {
            name: 'name',
            exposeName: 'expose'
        }
    },
    setup() {
        const name = ref('')
        name.value = 'setupname'
        return {
            name
        }
    },
    mounted() {
        console.log(this.$data)
    },
    template: `<div>{{ name }} {{ exposeName }}</div>`
}

export default {
    name: 'AppOptionsCom',
    components: {
        DataCom,
        WatchCom,
        ExposeCom
    },
    mounted() {
        console.log(this.$refs['expose'])
    },
    template: '<expose-com ref="expose"></expose-com>'
}