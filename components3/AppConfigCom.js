export default {
    name: 'AppConfigCom',
    tempalte: '<div>globalPropperties: {{ globalPropperty }}</div></div>',
    data() {
        return {
            globalPropperty: ''
        }
    },
    mounted() {
        this.globalPropperty = this.$global
    }
}